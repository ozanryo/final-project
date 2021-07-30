import React, { Component } from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Modal, TextInput } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'

class ModalVerification extends Component {
    constructor(props){
        super(props);
        this.state={
            verifCode: ''
        }
    }
    sendVerifToAPI(){
        console.log('Verif Get : ', this.state.verifCode)
        const verification = {
            verifcode: this.state.verifCode
        }

        this.verifAPI(verification)
        
    }

    verifAPI(dataToObj){
        const option = {
            method: 'POST',
            mode: "cors",
            headers:{ 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            },
            body: JSON.stringify(dataToObj)
        }

        return fetch("http://192.168.100.5:8888/oneline/verification", option)
            .then(response => response.json())
            .then(async json => {
                console.log("User Registration Response : ", json);
                if (json.success == true && json.verifStatus){
                    console.log("Response : ", json.message)
                    this.props.setVerifStat()
                    this.props.goBack();
                }
                else{
                    console.log("Response : ", json.message)
                }
            })
            .catch(err => console.log('Error'))
    }
    render(){
        return(
            <Modal
                animationType='slide'
                transparent={true}
                visible={this.props.modalShow}  
            >
                <View style={styles.modalLayout}>
                    <View style={styles.layout}>
                        <Text style={styles.titleModal}>Silahkan Lakukan Verifikasi</Text>
                        <Text style={styles.pinCode}>{this.props.getVerifCode}</Text>
                        <View style={styles.inputBox}>
                            <TextInput 
                                style={styles.input} placeholder='Masukan Kode ' 
                                value={this.state.verifCode} onChangeText={(verifCode) => this.setState({verifCode})}
                            />
                            <TouchableOpacity style={{borderLeftWidth:0.5, paddingLeft:10,}}
                                onPress={()=>this.sendVerifToAPI()}
                            >
                                <Icon name='paper-plane' size={25} color='#ccc' />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    getVerifCode: state.verification.verifCode
})

const mapDispatchToProps = (dispatch)=>({
    setVerifStat: () => dispatch({
        type: 'VERIF_DONE'
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalVerification);

const styles = StyleSheet.create({
    modalLayout:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"rgba(1,1,1,0.8)",
        flex: 1
    },
    layout:{
        flexDirection: "column",
        paddingVertical: 15,
        marginHorizontal: 5,
        width: "85%",
        height: 350,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 15
    },
    closePicBtn:{
        width: 30, 
        height: 30, 
        borderRadius: 30,
        backgroundColor: '#D92222',
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeBtnPosition:{
        flex: 1,
        alignItems: 'flex-end',
        position: 'absolute',
        top: 20,
        bottom: 20,
        right: 20,
        left: 20,
        elevation: 0,
    },
    titleModal:{
        fontSize:30,
        textAlign:'center',
        marginTop: 15,
        marginBottom: 25,
    },
    pinCode:{
        fontSize: 70,
    },
    inputBox:{
        borderWidth: 0.8,
        width: '70%',
        height: 50,
        borderRadius: 25,
        alignItems:'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 20,
    },
    input:{
        marginLeft:25,
        fontSize: 18,
        marginRight: 25,
    },
})