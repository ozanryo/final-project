import React, { Component } from 'react'
import backIcon from "../../assets/orderticon/backward.png"
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';

class Transaction extends Component {
    constructor(props){
        super(props);
        this.state={}
    }

    closeTransaction=()=>{
        console.log('Tutup Transaksi')
        this.props.endTransaction()
    }
    render(){
        if(this.props.getTransactionStat === false){
            return <Redirect to='/home' />
        }
        return(
            <div className="
                flex justify-center
                items-center flex-col
            "  
            style={{backgroundColor: '#171717AB'}}
            >
                <div
                    className="
                        flex items-center
                        flex-col bg-white
                        rounded-3xl my-32 py-20
                    " 
                    style={{ width: 1000}}
                >
                    <div 
                        className='flex items-center justify-start mb-15' 
                        style={{width:'90%',}}
                        onClick={()=>this.closeTransaction()}
                    >
                        <img alt='Back Icon' width='50' src={backIcon} />
                    </div>

                    <div className='text-7xl mt-10 mb-20'>
                        Transaction Result
                    </div>

                    <div className='flex flex-row items-center justify-start mt-10 mb-10'
                        style={{width: '80%'}}
                    >
                        <div className='text-3xl'>Phone : </div>
                        <div className='text-3xl ml-10'>{this.props.getTransaction.phone}</div>
                    </div>

                    <div className='flex flex-row items-center justify-start mt-10 mb-10'
                        style={{width: '80%'}}
                    >
                        <div className='text-3xl'>Provider : </div>
                        <div className='text-3xl ml-10'>{this.props.getTransaction.provider}</div>
                    </div>

                    <div className='flex flex-row items-center justify-start mt-10 mb-10'
                        style={{width: '80%'}}
                    >
                        <div className='text-3xl'>Tagihan : </div>
                        <div className='text-3xl ml-10'>{this.props.getTransaction.tagihan}</div>
                    </div>

                    <div className='flex flex-row items-center justify-start mt-10 mb-10'
                        style={{width: '80%'}}
                    >
                        <div className='text-3xl'>Metode : </div>
                        <div className='text-3xl ml-10'>{this.props.getTransaction.metode}</div>
                    </div>

                    <div className='flex flex-row items-center justify-start mt-10 mb-10'
                        style={{width: '80%'}}
                    >
                        <div className='text-3xl'>Status Pembayaran : </div>
                        <div className='text-3xl ml-10'>{this.props.getTransaction.status ? 'Lunas' : 'Belum Lunas'}</div>
                    </div>

                    {
                        this.props.getTransaction.metode === 'wallet'?
                        <div className='flex flex-row items-center justify-start mt-10 mb-10'
                            style={{width: '80%'}}
                        >
                            <div className='text-3xl'>Sisa Wallet : </div>
                            <div className='text-3xl ml-10'>{this.props.getTransaction.wallet}</div>
                        </div>
                        :
                        <div className='flex flex-row items-center justify-start mt-10 mb-10'
                            style={{width: '80%'}}
                        >
                            <div className='text-3xl'>Kode Transfer : </div>
                            <div className='text-3xl ml-10'>{this.props.getTransaction.transfer_code}</div>
                        </div>
                    }
                    {
                        this.props.getTransaction.metode === 'wallet'?
                        <div className='text-6xl mt-10 mb-10 text-center'>
                            Pembayaran Anda Sudah Lunas
                            <div className='text-3xl mt-5 mb-5 text-center'>
                                Silahkan Periksa Receipt History
                            </div>
                        </div>
                        :
                        <div className='text-5xl mt-10 mb-10 text-center'>
                            Silahkan Membayar Melalui Virtual Account
                            <div className='text-2xl mt-5 mb-5'>
                                Transaksi ini dapat diperiksa di laman receipt
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    getTransaction: state.transaction.receipt,
    getTransactionStat: state.transaction.transactionStat,
})

const mapDispatchToProps = dispatch => ({
    endTransaction: () => dispatch({
        type:'TRANSACTION_TRASH'
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);