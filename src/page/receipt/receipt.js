import React, { Component } from 'react'
import {TableList} from '../../components'

class Receipt extends Component {
    constructor(props){
        super(props);
        this.state={
            sampleData: [{
                    transaksi: 'test',
                    tagihan: 2000,
                    metode: 'wallet',
                    status: false
                },{
                    transaksi: 'test1',
                    tagihan: 5000,
                    metode: 'wallet',
                    status: true
                },{
                    transaksi: 'test2',
                    tagihan: 10000,
                    metode: 'virtual-account',
                    status: false
                },
            ],
            data: null,
        }
    }

    render(){
        return(
            <div
                className="
                    flex justify-center
                    items-center flex-col
                    py-4
                "  
                style={{ height:'90vh', backgroundColor: '#171717AB'}}
            >
                <div className='flex items-start justify-center my-10'>
                    <h1 className='text-8xl text-white'>Your Current Receipt</h1>
                </div>
                <TableList data={this.state.sampleData}/>
            </div>
        )
    }
}

export default Receipt;