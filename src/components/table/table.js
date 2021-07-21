import React, { Component } from 'react'
import "./table.css"

class TableList extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    getData(data){
        return data.map((item, index) => {
            return(
                <tr key={index}>
                    <td className='text-3xl py-4'>{index + 1}</td>
                    <td className='text-3xl py-4'>{item.transaksi}</td>
                    <td className='text-3xl py-4'>{item.tagihan}</td>
                    <td className='text-3xl py-4'>{item.metode}</td>
                    <td className='text-3xl py-4'>{item.status ? 'lunas' : 'belum lunas'}</td>
                </tr>
            )
        })
    }

    render(){
        return(
            <table style={{width: 1750}}>
                <thead>
                    <tr>
                        <th className='text-3xl py-4' width={"50px"}>No.</th>
                        <th className='text-3xl py-4' width={"450px"}>Transaction</th>
                        <th className='text-3xl py-4' width={"450px"}>Tagihan</th>
                        <th className='text-3xl py-4' width={"450px"}>Metode</th>
                        <th className='text-3xl py-4' width={"350px"}> Status</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getData(this.props.data)}
                </tbody>
            </table>
        )
    }
}

export default TableList;