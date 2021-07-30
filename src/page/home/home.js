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
        
        if(this.state.phone.slice(0, 4) == '0821'){
            this.fetchProvider('telkomsel')
        } else if (this.state.phone.slice(0,4) == '0822'){
            this.fetchProvider('indosat')
        } else {
            ToastAndroid.show('Provider Tidak Tersedia', ToastAndroid.SHORT)
        }
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
                this.props.getOrder(this.state.phone, json);
                this.props.navigation.navigate('Order');

                this.setState({phone: ''})

            })
            .catch(err => console.log('Error'))
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
                {/* <ModalReceiptOrder 
                    modalShow={this.props.orderStat}
                    closeShow={()=>this.closeReceipt()}
                    modalContent={this.props.receiptTransaction}
                /> */}
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