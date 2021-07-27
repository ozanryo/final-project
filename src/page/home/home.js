import React, { Component } from 'react'
import {View, StyleSheet, ToastAndroid} from 'react-native'
import PaymentComponent from '../../components/wallet/wallet';
import OrderComponent from '../../components/order/Order';
import SubmitOrderComponent from '../../components/order/submitOrder';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            wallet: 150000, 
            nextStep: false,
            phone:"",
            selectedProvider:"",
        }
    }

    getPhone=(input)=>{
        this.setState({phone: input, nextStep: true})
    }

    cancelStep(){
        this.setState({phone: "", nextStep: false})
    }

    render(){
        return(
            <View style={styles.main}>
                <PaymentComponent getWallet={this.state.wallet}/>
                {
                    this.state.nextStep?
                    <SubmitOrderComponent getPhoneNumber={this.state.phone} cancelButton={()=>this.cancelStep()}/>
                    :
                    <OrderComponent phoneFunction={this.getPhone}/>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home;