import React, { Component } from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

class ProductTable extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <View style={style.main}>
                {
                    this.props.productData.map((item, index) => 
                        <View style={style.tableRow} key={index}>
                            <Text style={style.codeTxt}>{item.code}</Text>
                            <Text style={style.pulsaTxt}>{item.pulsa}</Text>
                            <Text style={style.hargaTxt}>Rp. {item.harga},-</Text>
                        </View>
                    )
                }
            </View>
        )
    }
}

export default ProductTable;

const style = StyleSheet.create({
    main:{
        backgroundColor: '#34D8BB',
        width: 330,
        height: 170,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5, marginBottom: 5,
    },
    tableRow:{
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: 320,
        marginLeft: 45,
        
    },
    codeTxt:{
        color: 'white',
        fontSize: 18,
        marginRight: 25,
        fontWeight: 'bold',
    },
    pulsaTxt:{
        color: 'white',
        fontSize: 18,
        marginRight: 40,
        fontWeight: 'bold',
    },
    hargaTxt:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
})