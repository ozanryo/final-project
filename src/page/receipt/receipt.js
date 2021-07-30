import React, { Component } from 'react'
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native'
import { ModalReceipt } from '../../components/modal';
import ReceiptTable from '../../components/table/receipt';
import {connect} from "react-redux"

class Receipt extends Component {
    constructor(props){
        super(props);
        this.state={
            sampleData:[{
                    code:0,
                    tagihan: 20000,
                    provider: 'telkomsel',
                    phone: '0812312312'
                },{
                    code:1,
                    tagihan: 20000,
                    provider: 'indosat',
                    phone: '0812289247'
                },{
                    code:2,
                    tagihan: 15000,
                    provider: 'indosat',
                    phone: '0812289247'
                },{
                    code:3,
                    tagihan: 35000,
                    provider: 'telkomsel',
                    phone: '0812289247'
                },{
                    code:4,
                    tagihan: 50000,
                    provider: 'indosat',
                    phone: '0812289247'
                },
            ],
            selected:[],
            detailsInfo: false,
        }
    }

    detailReceipt=(inputData)=>{
        console.log('Selected Receipt : ', inputData)   
        this.setState({selected: inputData, detailsInfo: true})
    }

    closeDetails(){
        this.setState({detailsInfo: false})
    }

    render(){
        console.log(this.state.selected)
        return(
            <View style={styles.main}>
                <View style={styles.titleLayout}>
                    <Text style={styles.title}>Your Current Receipt</Text>
                </View>
                <ReceiptTable 
                    data={this.props.getReceipt} 
                    sendUsername={this.props.getUsername}
                    clickDetails={this.detailReceipt}
                />
                <ModalReceipt 
                    modalShow={this.state.detailsInfo} 
                    modalContent={this.state.selected}
                    closeShow={()=>this.closeDetails()}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    getReceipt: state.receipt.receipt,
    getUsername: state.profile.profile.username,
})

export default connect(mapStateToProps)(Receipt);

const styles = StyleSheet.create({
    main:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    titleLayout:{
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.7
    },
    title:{
        fontSize: 35,
        textAlign: 'center',
    }
})

