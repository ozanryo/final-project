import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ToastAndroid, } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import {Picker} from '@react-native-picker/picker'
import {connect} from 'react-redux'

class SubmitOrderComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            username: "",
            sampleProvider1:[{
                    produk: 1,
                    harga:25000,
                    pulsa:"25000"
                }, {
                    produk: 2,
                    harga:35000,
                    pulsa:"45000"
                },
            ],
            sampleProvider2:[{
                    produk: 1,
                    harga:35000,
                    pulsa:"30000"
                }, {
                    produk: 2,
                    harga:55000,
                    pulsa:"50000"
                },
            ],
            selectedProvider: [],
            telkomsel:[],
            indosat:[],
            product:"",
            method: "",
        }
    }
    componentDidMount(){
        this.fetchProviderTelkomsel()
        this.fetchProviderIndosat()
        this.getProvider();
    }

    

    async getProvider(){
        if(this.props.getPhoneNumber.slice(0, 4) == '0822'){
            // this.setState({selectedProvider: this.state.sampleProvider1})
            // this.fetchProvider("indosat")
            this.setState({selectedProvider: this.state.indosat})
        } else if(this.props.getPhoneNumber.slice(0, 4) == '0821'){
            // this.setState({selectedProvider: this.state.sampleProvider2})
            // this.fetchProvider("telkomsel")
            this.setState({selectedProvider: this.state.telkomsel})
        }else{
            ToastAndroid.show('Provider Tidak Bersedia', ToastAndroid.SHORT)
        }
    }

    handleProduct=(value)=>{
        this.setState({product: value})
        console.log('Selected Product : ', this.state.product)
    }

    handleMethod=(value)=>{
        this.setState({method: value})
        console.log('Selected Methods : ', this.state.method)
    }

    handleSubmit(){
        const newOrder = {
            username: this.props.getProfileUsername,
            phone: this.props.getPhoneNumber,
            produk: this.state.product,
            metode: this.state.method,
        }
        
        console.log('Pesanan Baru : ', newOrder)
        this.topupAPI(newOrder);
        
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Previous Props : ",prevProps)
        console.log("Previous State : ",prevState.selectedProvider)
        console.log('Current Selected : ', this.state.selectedProvider)
        if(this.state.selectedProvider == prevState.selectedProvider){
            this.getProvider()
        }
    }
    

    async fetchProviderTelkomsel(){
        const option = {
            method: 'GET',
            mode: "cors",
            headers:{ 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            },
        }

        return fetch("http://192.168.100.5:8888/oneline/product/telkomsel", option)
            .then(response => response.json())
            .then( async json => {
                console.log("Order Product Response : ", json);
                this.setState({telkomsel: json})
                // this.setState({selectedProvider: this.state.telkomsel})
                // console.log('Produk Terpilih : ', this.state.selectedProvider)
            })
            .catch(err => console.log('Error'))
    }

    async fetchProviderIndosat(){
        const option = {
            method: 'GET',
            mode: "cors",
            headers:{ 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            },
        }

        return fetch("http://192.168.100.5:8888/oneline/product/indosat", option)
            .then(response => response.json())
            .then( async json => {
                console.log("Order Product Response : ", json);
                this.setState({telkomsel: json})
                // this.setState({selectedProvider: this.state.indosat})
                // console.log('Produk Terpilih : ', this.state.selectedProvider)
            })
            .catch(err => console.log('Error'))
    }

    fetchProvider(providerName){
        const option = {
            method: 'GET',
            mode: "cors",
            headers:{ 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            },
        }

        return fetch("http://192.168.100.5:8888/oneline/product/" + providerName, option)
            .then(response => response.json())
            .then( async json => {
                console.log("Order Product Response : ", json);
                this.setState({selectedProvider: json})
                // console.log('Produk Terpilih : ', this.state.selectedProvider)
            })
            .catch(err => console.log('Error'))
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
                console.log("Login Response : ", json);
                if(json.succes){
                    console.log('Message : ', json.message)
                    
                    if(json.metode == 'wallet'){
                        this.props.setReceiptOrder(json.receipt)
                        this.props.getAllReceipt(json.allReceipt)
                        
                    }else{
                        this.props.setReceiptOrder(json.receiptBank)
                        this.props.getAllReceipt(json.allReceipt)
                    }
                }else{
                    console.log('Message : ', json.message)
                }

                console.log("Response : ", json.message)
            })
            .catch(err => console.log('Error'))
    }

    render(){
        return(
            <View style={layouting.paymentLayout}>
                <View style={layouting.closeBtnPosition}>
                    <TouchableOpacity style={layouting.closePicBtn} onPress={this.props.cancelButton}>
                        <Icon name='arrow-back' size={25} color='white' />
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:10, marginBottom: 15}}>
                    <Text style={layouting.titleStyle}>Pilih Opsi</Text>
                </View>

                <View style={layouting.pickerContainer}>
                    <Picker
                        style={{width:270, height:65, marginLeft: 5}}
                        selectedValue={this.state.product}
                        onValueChange={(itemValue, itemIndex) => this.setState({product: itemValue})}
                    >
                        <Picker.Item label='Pilih Pulsa' value='' />
                        {
                            // this.state.selectedProvider.length == 0 ?
                            // <Picker.Item label='' value='' />
                            // :
                            this.state.selectedProvider.map((items, index)=>
                                <Picker.Item key={index} label={items.pulsa} value={items.code} />
                            )            
                        }
                    </Picker>
                </View>

                <View style={layouting.pickerContainer}>
                    <Picker
                        style={{width:270, height:65, marginLeft: 5}}
                        selectedValue={this.state.method}
                        onValueChange={(itemValue, itemIndex) => this.setState({method: itemValue})}
                    >
                        <Picker.Item label='Pilih Pembayaran' value='' />
                        <Picker.Item label='Wallet' value='wallet' />
                        <Picker.Item label='Virtual Account' value='virtual account' />
                    </Picker>
                </View>

                <TouchableOpacity style={layouting.button} onPress={()=>this.handleSubmit()}>
                    <Text style={layouting.buttonText}>Topup</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const mapStateToProps = state => ({
    getProfileUsername: state.profile.profile.username,
})

const mapDispatchToProps = dispatch => ({
    setReceiptOrder: (receipt)=>dispatch({
        type:'ORDER_DONE',
        receipt: receipt,
    }),
    getAllReceipt: (allReceipt) => dispatch({
        type:'RECEIPT_GET',
        receipt: allReceipt,
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitOrderComponent)

const layouting = StyleSheet.create({
    paymentLayout:{
        backgroundColor: '#3977E7',
        width: '90%',
        height: 450,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 35,
    },
    titleStyle:{
        fontSize: 45,
        textAlign: 'center',
        color: 'white'
    },
    pickerContainer:{
        width:280,
        height:60,
        backgroundColor:'white',
        borderRadius: 25,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 15,
    },
    textInput:{
        width:'80%',
        backgroundColor:'white',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#D17C2F',
        width: 250,
        height:60,
        borderRadius: 30,
        marginTop: 25,
    },
    buttonText:{
        color: 'white',
        fontSize: 25
    },
    closePicBtn:{
        width: 50, 
        height: 35, 
        borderRadius: 25,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeBtnPosition:{
        flex: 1,
        alignItems: 'flex-start',
        position: 'absolute',
        top: 20,
        bottom: 20,
        right: 20,
        left: 20,
        elevation: 0,
    },
})

