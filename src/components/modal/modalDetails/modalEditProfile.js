import React, { Component } from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Modal } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

class ModalDetails extends Component {
    render(){
        return(
            <Modal
                animationType='slide'
                transparent={true}
                visible={this.props.modalShow}
            >
                <View style={style.modalLayout}>
                    <View style={style.layout}>
                        <View style={style.closeBtnPosition}>
                            <TouchableOpacity style={style.closePicBtn} onPress={this.props.closeShow}>
                                <Icon name='close' size={20} color='white' />
                            </TouchableOpacity>
                        </View>
                        <Text style={style.titleModal}>Your Profile</Text>
                        <View style={style.details}>
                            <Text style={{fontSize: 22,}}>Name : {this.props.modalContent.firstname} {this.props.modalContent.lastname}</Text>
                            <Text style={{fontSize: 22,}}>Phone : {this.props.modalContent.phone} </Text>
                            <Text style={{fontSize: 22,}}>Address : {this.props.modalContent.address} </Text>
                            <Text style={{fontSize: 22,}}>Email : {this.props.modalContent.email} </Text>
                            <Text style={{fontSize: 22,}}>Username : {this.props.modalContent.username} </Text>
                        </View>
                        <TouchableOpacity style={style.button} onPress={()=>this.props.gotoUpdate()}>
                            <Text style={style.btnText}>Edit Profile ?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
}

const style = StyleSheet.create({
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
        height: 420,
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
        fontSize: 35,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 15,
    },
    details:{
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 250,
        marginTop: 10,
        marginBottom: 10
    },
    button:{
        width: '70%',
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E05727',
        marginTop: 15,
        marginBottom: 10
    },
    btnText:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
})

export default ModalDetails;