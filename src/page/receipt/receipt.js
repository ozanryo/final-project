import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { ModalReceipt } from '../../components/modal';
import ReceiptTable from '../../components/table/receipt';
import {connect} from "react-redux"
import Icon from 'react-native-vector-icons/EvilIcons'

class Receipt extends Component {
    constructor(props){
        super(props);
        this.state={
            selected:[],
            detailsInfo: false,
            data:[]
        }
    }

    componentDidMount(){
        this.getReceiptData(this.props.getUsername)
    }

    getReceiptData(input){
        const user = {
            username: input
        }
        const option = {
            method: 'POST',
            mode: "cors",
            headers:{ 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            },
            body:JSON.stringify(user)
        }

        return fetch("http://192.168.100.5:8888/oneline/receipt/all/", option)
            .then(response => response.json())
            .then( async json => {
                console.log("Receipt Log Response : ", json);

                this.setState({data: json.orderData})

            })
            .catch(err => console.log('Error'))
    }

    refreshReceipt(){
        this.getReceiptData(this.props.getUsername)
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
                    <Text style={styles.title}>Your Receipt</Text>
                    <TouchableOpacity 
                        onPress={()=>this.refreshReceipt()}
                    >
                        <Icon name='refresh' size={70} />
                    </TouchableOpacity>
                </View>
                <ReceiptTable 
                    data={this.state.data} 
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
        width:350,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 0.7,
        flexDirection: 'row'
    },
    title:{
        fontSize: 35,
        textAlign: 'center',
        marginRight: 65,
    }
})

