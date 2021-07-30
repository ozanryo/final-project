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

    render(){
        console.log('Phone : ', this.props.getReceiptWallet.phone)
        console.log('Tagihan : ', this.props.getReceiptWallet.tagihan)
        console.log('Metode : ', this.props.getReceiptWallet.metode)
        console.log('Status  : ', this.props.getReceiptWallet.status)
        return(
            <Modal
                animationType='slide'
                transparent={true}
                visible={this.props.getReceiptStat}
            >
                <View style={styles.modalLayout}>
                    <View style={styles.layout}>
                        <View style={styles.closeBtnPosition}>
                            <TouchableOpacity style={styles.closePicBtn} onPress={this.props.closeShow}>
                                <Icon name='close' size={20} color='white' />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.titleTxt}>Hasil Transaksi</Text>
                        <View style={{marginHorizontal: 10, marginTop:15, marginBottom: 20}}>
                            <Text style={styles.textCaption}>Phone : {this.props.getReceiptWallet.phone}</Text>
                            <Text style={styles.textCaption}>Tagihan : {this.props.getReceiptWallet.tagihan}</Text>
                            <Text style={styles.textCaption}>Metode : {this.props.getReceiptWallet.metode}</Text>
                            <Text style={styles.textCaption}>Status Pembayaran : {this.props.getReceiptWallet.status ? 'Lunas' : 'Belum Lunas'}</Text>
                        </View>
                        
                    </View>
                </View>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({
    getReceiptStat: state.wallet.orderStat,
    getReceiptWallet: state.wallet
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
    },
    titleTxt:{
        fontSize:25,
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 10,
    },
    textCaption:{
        fontSize: 18
    },
})

