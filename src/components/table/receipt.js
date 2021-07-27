import React, { Component } from 'react'
import {Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'

class ReceiptTable extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[{
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
            
        }
    }

    obtainData(data){
        const input = {
            tagihan: data.tagihan,
            provider: data.provider,
            phone: data.phone
        }
        this.props.clickDetails(input)
    }

    render(){
        return(
            <FlatList 
                style={styles.main}
                data={this.props.data}
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