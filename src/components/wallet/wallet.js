import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

class PaymentComponent extends Component {
    render(){
        return(
            <View style={layouting.paymentLayout}>
                <View style={{flexDirection:'row'}}>
                    <View style={layouting.pointLayout}>
                        <View style={layouting.pointCaption}>
                            <Text style={{fontSize:12}}>E-Wallet</Text>
                            <Text style={{fontSize:20, fontWeight:'bold'}}>Rp. {this.props.getWallet},-</Text>
                        </View>
                    </View>
                    <View style={layouting.paymentMethodLayout}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity 
                                style={{alignItems:'center',justifyContent:'center', marginRight:10}}
                            >
                                <Icon name='add-circle' size={40} color='white' />
                                <Text style={{fontSize:15, color: 'white'}}>Topup</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{alignItems:'center',justifyContent:'center', marginLeft:10}}>
                                <Icon name='wallet' size={40} color='white' />
                                <Text style={{fontSize:15, color: 'white'}}>Pay Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const layouting = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"
    },
    paymentLayout:{
        backgroundColor: '#5151CF',
        width: '90%',
        height: 120,
        alignItems:'flex-start',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 35,
    },
    pointLayout:{
        backgroundColor: 'white',
        marginLeft: 20,
        marginRight: 10,
        width: '45%',
        height: 85,
        borderRadius: 15,
        alignItems:'flex-start',
        justifyContent: 'center',
    },
    pointCaption:{
        paddingLeft: 10
    },
    paymentMethodLayout:{
        marginLeft: 15,
        marginRight: 10,
        alignItems:'flex-start',
        justifyContent: 'center',
    },
    
})

export default PaymentComponent