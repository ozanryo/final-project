import React, { Component } from 'react'
import {View, StyleSheet, ToastAndroid} from 'react-native'
import PaymentComponent from '../../components/wallet/wallet';
import OrderComponent from '../../components/order/Order';
import SubmitOrderComponent from '../../components/order/submitOrder';
import {connect} from 'react-redux'


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
        this.props.navigation.navigate('Order');
        // if(this.state.phone.slice(0, 4) == '0821'){
        //     this.fetchProvider('telkomsel')
        // } else if (this.state.phone.slice(0,4) == '0822'){
        //     this.fetchProvider('indosat')
        // } 
        // else {
        //     ToastAndroid.show('Provider Tidak Tersedia', ToastAndroid.SHORT)
        // }
    }

    cancelStep(){
        this.setState({phone: "", nextStep: false})
    }

    doneStep=()=>{
        this.setState({phone: "", nextStep: false})
    }

    closeReceipt=()=>{
        this.props.transactionDone();
        this.setState({phone: "", nextStep: false})
    }

    render(){
        return(
            <View style={styles.main}>
                <PaymentComponent getWallet={this.props.getWallet}/>
                <OrderComponent phoneFunction={this.getPhone}/>
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

const mapStateToProps = state => ({
    getWallet: state.profile.profile.wallet,
    orderStat: state.order.orderState,
    receiptTransaction: state.order.receipt,
})

const mapDispatchToProps = dispatch => ({
    getOrder: (phone, product)=>dispatch({
        type:'GET_ORDER',
        phone: phone, 
        product: product,
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);