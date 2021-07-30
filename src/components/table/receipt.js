import React, { Component } from 'react'
import {Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'

class ReceiptTable extends Component {
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
            },],
            data:[]
        }
    }

    componentDidMount(){
        // this.setState({
        //     data: this.props.data
        // })

        this.getReceiptData(this.props.sendUsername)
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

    obtainData(data){
        const input = {
            tagihan: data.tagihan,
            provider: data.provider,
            phone: data.phone,
            metode: data.metode,
            status: data.status,
        }
        this.props.clickDetails(input)
    }

    render(){
        console.log(this.props.sendUsername)
        return(
            <FlatList 
                style={styles.main}
                data={this.state.data}
                renderItem={({item})=>
                    <TouchableOpacity 
                        style={styles.tableRow} 
                        onPress={()=>this.obtainData(item)}
                    >
                        <Text style={styles.tableRowText}>{item.phone}</Text>
                    </TouchableOpacity>
                }
                keyExtractor={item => item.code}
                scrollEnabled={true}
            />
        )
    }
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
    },
    tableRow:{
        width:350,
        height: 85,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth:0.7,

    },
    tableRowText:{
        fontSize:25
    }
    
})

export default ReceiptTable;