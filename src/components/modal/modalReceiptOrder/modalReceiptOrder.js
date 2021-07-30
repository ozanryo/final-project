import React, { Component } from 'react'
import { View, Text, 
        StyleSheet,TouchableOpacity,
        Modal
} from "react-native"

import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'

class ModalReceiptOrder extends Component {
    constructor(props){
        super(props);
        this.state={
            phone: '',
            provider: '',
            tagihan: '',
            status: false,
            metode: ''
        }
    }

    componentDidMount(){
        if(this.props.getReceiptStat != false){
            if(this.props.modalContent.metode == 'wallet'){
                this.setState({
                    phone: this.props.getReceiptOrder.phone,
                    provider:this.props.getReceiptOrder.provider,
                    tagihan:this.props.getReceiptOrder.tagihan,
                    status:this.props.getReceiptOrder.status,
                    metode:this.props.getReceiptOrder.metode,
                })
            } else {
                this.setState({
                    phone: this.props.getReceiptOrder.phone,
                    provider:this.props.getReceiptOrder.provider,
                    tagihan:this.props.getReceiptOrder.tagihan,
                    status:this.props.getReceiptOrder.status,
                    metode:this.props.getReceiptOrder.metode,
                })
            }
            
        }
    }

    render(){
        console.log('Get Receipt : ', this.props.modalContent)
        return(
            <Modal
                animationType='slide'
                transparent={true}
                visible={this.props.modalShow}
            >
                <View style={styles.modalLayout}>
                    <View style={styles.layout}>
                        <View style={styles.closeBtnPosition}>
                            <TouchableOpacity style={styles.closePicBtn} onPress={this.props.closeShow}>
                                <Icon name='close' size={20} color='white' />
                            </TouchableOpacity>
                        </View>
                        <View style={{marginHorizontal: 10, marginTop:40, marginBottom: 20}}>
                            <Text>{this.props.getMessage}</Text>
                        </View>
                        
                    </View>
                </View>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({
    getReceiptOrder: state.order.receipt,
    getMessage: state.order.message,
    getReceiptStat: state.order.orderState,
})

const mapDispatchToProps = dispatch => ({
    transactionDone: ()=>dispatch({
        type:'RECEIPT_TRASH'
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalReceiptOrder);

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
    modalContent:{
        fontSize: 21,
        marginHorizontal: 10,
        marginVertical: 5,
        textAlign: 'left'
    }
})

