import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ToastAndroid, ScrollView } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import {Picker} from '@react-native-picker/picker'
import {connect} from 'react-redux'
import ProductTable from '../../components/table/product'
import {ModalReceiptOrder} from '../../components/modal'

class OrderCompletion extends Component {
    constructor(props){
        super(props)
        this.state={
            phone: '',
            produk: [],
            username: '',
            metode:'wallet',
            selectedProduct: '',
            receipt: [],
            transactionDone: false,
            message: '',
        }
    }

    componentDidMount(){
        this.setState({
            username: this.props.getUsername,
            phone: this.props.getPhone,
            produk: this.props.getProduct,
        })
    }

    topup(){
        const topupData = {
            username: this.state.username,
            phone: this.state.phone,
            produk: this.state.selectedProduct,
            metode: this.state.metode,
        }

        console.log('Topup Product : ', topupData)

        this.topupAPI(topupData)
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Previous Props : ', prevProps);
        console.log('Previous State : ', prevState)
    }

    topupAPI(dataToObj){
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

        return fetch("http://192.168.100.5:8888/oneline/topup", option)
            .then(response => response.json())
            .then(async json => {
                // console.log("Login Response : ", json);
                // console.log('Methods : ', json.metode)
                // console.log('status : ', json.success)
                if(json.success){
                    if(json.metode == 'wallet'){
                        this.props.doneTransaction(json.receipt)
                        this.props.getAllReceipt(json.allReceipt)

                        const sendMessage = json.message
                        this.setState({receipt: json.receipt, transactionDone:true, message:sendMessage})
                        this.props.doneTransaction(json.receipt, sendMessage)
                    }else{
                        
                        this.props.getAllReceipt(json.allReceipt)

                        const sendMessage = json.message + '\nKode Transfer : ' + json.receiptBank.transfer_code + '\nTagihan : ' + json.receiptBank.tagihan;
                        this.setState({receipt: json.receiptBank, transactionDone:true, message:sendMessage})
                        this.props.doneTransaction(json.receiptBank, sendMessage)
                    }
                }else{
                    console.log('Message : ', json.message)
                }

                console.log("Response : ", json.message)
            })
            .catch(err => console.log('Error'))
    }

    closeReceipt=()=>{
        this.props.navigation.navigate('Home')
        this.props.finishReceipt()
    }

    render(){
        return(
            <View style={style.main} scrollEnabled={true}>
                <Text style={style.titleStyle}>Payment</Text>
                <View style={style.textInput}>
                    <Icon style={{marginLeft: 20, marginRight:25,}}
                        name='person-circle' size={30} color='#1F1E1F'
                    />
                    <TextInput style={{fontSize: 20}} value={this.state.username}/>
                </View>

                <View style={style.textInput}>
                    <Icon style={{marginLeft: 20, marginRight:25,}}
                        name='call' size={30} color='#1F1E1F'
                    />
                    <TextInput 
                        style={{fontSize: 20}} 
                        value={this.state.phone} 
                        onChangeText={(phone)=>this.setState({phone})}
                    />
                </View>

                <ProductTable productData={this.state.produk} />
                
                <View style={style.textInput}>
                    <Icon 
                        style={{marginLeft: 20, marginRight:25,}}
                        name='cube' size={30} color='#1F1E1F'
                    />
                    <TextInput 
                        style={{fontSize: 18}} 
                        value={this.state.selectedProduct} 
                        onChangeText={(selectedProduct)=>this.setState({selectedProduct})}
                        placeholder='Masukkan Code Pulsa'
                        keyboardType='number-pad'
                        maxLength={2}
                    />
                </View>

                <View style={style.pickerContainer}>
                    <Picker
                        style={{width:310, height:65, marginLeft: 5}}
                        selectedValue={this.state.metode}
                        onValueChange={(itemValue, itemIndex) => this.setState({metode: itemValue})}
                    >
                        <Picker.Item label='Wallet' value='wallet' />
                        <Picker.Item label='Virtual Account' value='virtual account' />
                    </Picker>
                </View>
                
                <TouchableOpacity style={style.button} onPress={()=>this.topup()}>
                    <Text style={style.buttonText}>Topup</Text>
                </TouchableOpacity>
                <ModalReceiptOrder 
                    modalShow={this.state.transactionDone}
                    modalContent={this.state.message}
                    closeShow={()=>this.closeReceipt()}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    getUsername: state.profile.profile.username,
    getPhone: state.order.phone,
    getProduct: state.order.product,
    getDoneStat: state.order.orderState,
    getReceiptOrder: state.order.receipt
})

const mapDispatchToProps = dispatch => ({
    doneTransaction: (receipt, message) => dispatch({
        type:'ORDER_DONE',
        receipt: receipt,
        message: message
    }),
    finishReceipt: () => dispatch({
        type: 'RECEIPT_TRASH'
    }),
    getAllReceipt: (allReceipt) => dispatch({
        type:'RECEIPT_GET',
        receipt: allReceipt,
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderCompletion);

const style = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    titleStyle:{
        fontSize: 40,
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 15,
    },
    textInput:{
        width:'80%',
        height:60,
        marginVertical: 10,
        backgroundColor:'white',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 0.8,
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#191616',
        width:'80%',
        height:60,
        borderRadius: 25,
        marginTop: 10,
    },
    buttonText:{
        color: 'white',
        fontSize: 30,
    }, 
    pickerContainer:{
        width:'80%',
        height:60,
        backgroundColor:'white',
        borderRadius: 25,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 8,
        borderColor: 'black',
        borderWidth: 0.6
    },

})