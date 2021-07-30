import React, { Component } from 'react'
import { View, Text, 
        StyleSheet,TouchableOpacity,
        Modal
} from "react-native"

import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'

class ModalBank extends Component {
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
        console.log('Phone : ', this.props.getReceiptBank.phone)
        console.log('Tagihan : ', this.props.getReceiptBank.tagihan)
        console.log('Metode : ', this.props.getReceiptBank.metode)
        console.log('Status  : ', this.props.getReceiptBank.status)
        console.log('Kode : ', this.props.getReceiptBank.transferCode)
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
                            <Text style={styles.textCaption}>Phone : {this.props.getReceiptBank.phone}</Text>
                            <Text style={styles.textCaption}>Tagihan : {this.props.getReceiptBank.tagihan}</Text>
                            <Text style={styles.textCaption}>Metode : {this.props.getReceiptBank.metode}</Text>
                            <Text style={styles.textCaption}>Status Pembayaran : {this.props.getReceiptBank.status ? 'Lunas' : 'Belum Lunas'}</Text>
                            <Text style={styles.textCaption}>Kode Transfer : {this.props.getReceiptBank.transferCode}</Text>
                        </View>
                        <View style={{width: 320,}}>
                            <Text style={styles.footerTxt}>Mohon Membayar Melalui Bank</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({
    getReceiptStat: state.bank.orderStat,
    getReceiptBank: state.bank
})

const mapDispatchToProps = dispatch => ({
    transactionDone: ()=>dispatch({
        type:'RECEIPT_TRASH'
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalBank);

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
    textCaption: {
        fontSize: 18,
    },
    titleTxt:{
        fontSize: 25,
        textAlign: 'center',
        marginTop: 20,
        marginBottom:10,
    },
    footerTxt:{
        fontSize: 25,
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 20,
    }
})

