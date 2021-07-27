import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ToastAndroid } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

class OrderComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            phone: "",
        }
    }

    sendPhone(){
        if(this.state.phone == ""){
            ToastAndroid.show('Mohon Lengkapi Data', ToastAndroid.SHORT)
        }
        else if(this.state.phone.slice(0,4) == '0821' || this.state.phone.slice(0,4)=='0822'){
            this.props.phoneFunction(this.state.phone)
        }
        else{
            
            ToastAndroid.show('Provider Tidak Tersedia', ToastAndroid.SHORT)
        }
    }
    render(){
        return(
            <View style={layouting.paymentLayout}>
                <View style={{marginTop:30, marginBottom: 25,}}>
                    <Text style={layouting.titleStyle}>Topup Pulsa Sekarang</Text>
                </View>
                <View style={layouting.textInput}>
                    <Icon style={{marginLeft: 20, marginRight:10,}}
                        name='call' size={25} color='#23C7E3'
                    />
                    <TextInput style={{fontSize: 20}} 
                        placeholder='Your Phone Number' value={this.state.phone}
                        onChangeText={(phone)=>this.setState({phone})}
                        keyboardType='number-pad'
                    />
                </View>
                <TouchableOpacity onPress={()=>this.sendPhone()} style={layouting.button}>
                    <Text style={layouting.buttonText}>Next Step</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const layouting = StyleSheet.create({
    paymentLayout:{
        backgroundColor: '#3677D8',
        width: '90%',
        height: 300,
        alignItems:'center',
        justifyContent: 'flex-start',
        borderRadius: 15,
        marginTop: 35,
    },
    titleStyle:{
        fontSize: 35,
        textAlign: 'center',
        color: 'white'
    },
    textInput:{
        width:'80%',
        backgroundColor:'white',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#E06E1D',
        width: 150,
        height:40,
        borderRadius: 25,
        marginTop: 25,
    },
    buttonText:{
        color: 'white',
        fontSize: 20
    },    
})

export default OrderComponent