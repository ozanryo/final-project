import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ToastAndroid, } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import {Picker} from '@react-native-picker/picker'

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
            product:"",
            method: "",
        }
    }
    componentDidMount(){
        this.getProvider();
    }

    getProvider(){
        if(this.props.getPhoneNumber.slice(0, 4) == '0822'){
            this.setState({selectedProvider: this.state.sampleProvider1})
        } else if(this.props.getPhoneNumber.slice(0, 4) == '0821'){
            this.setState({selectedProvider: this.state.sampleProvider2})
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
            username: 'Ozan',
            phone: this.props.getPhoneNumber,
            produk: this.state.product,
            metode: this.state.method,
        }

        console.log('Pesanan Baru : ', newOrder)
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
                            this.state.selectedProvider.length == 0 ?
                            <Picker.Item label='' value='' />
                            :
                            this.state.selectedProvider.map((items, index)=>
                                <Picker.Item key={index} label={items.pulsa} value={items.produk} />
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

export default SubmitOrderComponent