import React, { Component } from 'react'
import Select from 'react-dropdown-select';
import backIcon from "../../assets/orderticon/backward.png"
import {connect} from 'react-redux'
import ModalReceipt from '../modal/modalReceipt/ModalReceipt';
import { Redirect } from 'react-router-dom';

class Order extends Component {
    constructor(props){
        super(props);
        this.state={
            phone: "",
            methods: "",
            produk: 1,
            secondStep: false,
            provider: [],
            loadingCondition: false,
            loadingProduct:false,
            modalCondition: true,
        }

        this.handlePhone = this.handlePhone.bind(this)
        this.handleMethods = this.handleMethods.bind(this)
        this.handleNominal = this.handleNominal.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handlePhone(event){
        this.setState({phone: event.target.value})
    }
    handleMethods(event){
        this.setState({methods: event.target.value})
    }
    handleNominal(event){
        this.setState({produk: event.target.value})
    }

    handleSubmit(event){
        // event.preventDefault();

        console.log('Pulsa Terpilih : ', this.state.pulsa)

        this.submitFunction(
            this.props.getUsername,
            this.state.phone,
            this.state.produk,
            this.state.methods
        )
    }

    submitFunction(inputUser, inputPhone, inputPulsa, inputMetode){
        const newOrder = {
            username: inputUser,
            phone: inputPhone,
            produk: inputPulsa,
            metode: inputMetode
        }

        console.log("Pesanan : ",newOrder)
        this.submitOrder(newOrder)
    }

    submitOrder(dataToObj){
        this.setState({loadingCondition: true})
        const option = {
            method: 'POST',
            mode: "cors",
            headers:{ 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            },
            body: JSON.stringify(dataToObj)
        }

        fetch("http://localhost:8888/oneline/topup", option)
                .then(response => response.json())
                .then(async json => {
                    if(json.success){
                        console.log("Order Response : ", json);
                        // console.log("Order Message : ", json.message)
                        this.props.setReceipt(json.allReceipt);
                        this.setState({
                            phone: "",
                            methods: "",
                            produk: 1,
                            provider: [],
                            secondStep: false
                        })
                        this.props.setWallet(json.user.wallet)
                        if(json.metode === 'wallet'){
                            this.props.setTransaction(json.receipt)
                            this.setState({loadingCondition: false})
                        }else{
                            this.props.setTransaction(json.receiptBank)
                            this.setState({loadingCondition: false})
                        }
                    } else {
                        alert('message : ', json.message)
                        this.setState({loadingCondition: false})
                    }
                    
                    
                })
                .catch(err => console.log('Error'))
    }


    searchProvider(){
        if(this.state.phone.slice(0, 4) === '0821'){
            this.setState({secondStep: true})
            this.fetchProduct('telkomsel')
        } else if (this.state.phone.slice(0, 4) === '0822') {
            this.setState({secondStep: true})
            this.fetchProduct('indosat')
        } else if(this.state.phone === ''){
            alert('Mohon Mengisi Nomor Telepon')
        }
        else {
            alert('Provider Tidak Tersedia')
        }
    }

    fetchProduct(product){
        this.setState({loadingProduct: true})
        const option = {
            method: 'GET',
            mode: "cors",
            headers:{ 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            },
        }

        fetch("http://localhost:8888/oneline/product/"+product, option)
                .then(response => response.json())
                .then(async json => {
                    console.log("Order Response : ", json);
                    // console.log("Order Message : ", json.message)
                    const dataProvider = json;
                    console.log("Data Produk : ", dataProvider)

                    this.setState({provider: dataProvider, loadingProduct: false})
                })
                .catch(err => console.log('Error'))
    }

    closeModal=()=>{
        this.setState({modalCondition: false})
    }

    render(){
        if(this.props.getTransactionStat){
            return <Redirect to='/transaction' />
        }
        return(
            <div>
                {  
                    this.state.secondStep ?
                    <div className='
                            flex items-center justify-start
                                rounded-3xl border-2 flex-col my-20
                                py-12
                            '
                            style={{width: 900, height: 650, backgroundColor:'#CF681D'}}
                        >
                            <div 
                                className='flex items-center justify-start mb-15' 
                                style={{width:'90%',}}
                                onClick={()=>this.setState({secondStep: false, provider:[]})}
                            >
                                <img alt='Back Icon' width='50' src={backIcon} />
                            </div>
                            <div className='text-white text-7xl mt-4 mb-10'>
                                Pilih Fitur Sesukamu
                            </div>
                            <form className='flex items-center justify-center flex-col'>
                                <div className='flex items-start justify-center flex-row mt-10 mb-5'>
                                    <div className='text-4xl text-white mr-5 pr-10' 
                                        style={{borderRightWidth: 0.8, borderColor: 'white'}}
                                    >
                                        Nominal 
                                    </div>
                                    <div className='rounded-full bg-white flex items-center justify-start ' 
                                        style={{width:390, height: 45}}
                                    >
                                        {
                                            this.state.loadingProduct ?
                                                <div className='text-2xl text-black text-center focus:outline-none ml-10'
                                                    onChange={this.handleNominal}
                                                    style={{width:150}}>
                                                    <div className='flex flex-row'>
                                                        <svg className='animate-spin h-6 w-6 mr-10 bg-black' ></svg>
                                                        Loading...
                                                    </div>
                                                </div>
                                            :
                                                <select 
                                                    className='text-2xl text-black text-center focus:outline-none ml-10'
                                                    onChange={this.handleNominal}
                                                    style={{width:340}}
                                                >
                                                {
                                                    this.state.provider.map((item, index)=>(
                                                            <option key={index} className='text-black text-xl' value={item.code}>{item.pulsa}</option>
                                                    ))
                                                }
                                                </select>
                                        }
                                    </div>                                    
                                </div>
                                <div className='flex items-start justify-center flex-row my-10'>
                                    <div className='text-4xl text-white mr-5 pr-10' 
                                        style={{borderRightWidth: 0.8, borderColor: 'white'}}
                                    >
                                        Pembayaran 
                                    </div>
                                    <div className='flex items-center justify-center flex-row'>
                                        <input style={{width: 25, height: 25}} type='radio' id='wallet' value='wallet' 
                                            onChange={this.handleMethods} name='methods'/>
                                        <label className='text-4xl text-white mr-5 ml-4' htmlFor='wallet'>Wallet</label>
                                    </div>

                                    <div className='flex items-center justify-center flex-row'>
                                        <input style={{width: 25, height: 25}} type='radio' id='va' value='virtual account' 
                                        onChange={this.handleMethods} name='methods'/>
                                        <label className='text-4xl text-white mr-5 ml-5' htmlFor='va'>Virtual Account</label>
                                    </div>
                                </div>
                            </form>
                            <div className='flex items-center 
                                justify-center rounded-full bg-red-700 w-2/4 h-24
                                text-white text-4xl mt-14
                            '
                            onClick={this.handleSubmit}
                            >
                                {
                                    this.state.loadingCondition ?
                                    <div className='text-4xl text-white text-center focus:outline-none ml-4'
                                        onChange={this.handleNominal}
                                        style={{width:150}}
                                    >
                                        <div className='flex flex-row'>
                                            <svg className='animate-spin h-10 w-10 mr-4 bg-white' ></svg>
                                            Loading...
                                        </div>
                                    </div>
                                    :
                                    <div>Submit</div>
                                }
                                
                            </div>
                        </div>
                    :
                    <div className='
                        flex items-center justify-center
                        rounded-3xl border-2 flex-col
                    '
                    style={{width: 900, height: 400, backgroundColor:'#0A4C90'}}
                    >
                        <div className='text-white text-6xl mt-4 mb-10'>Isi Ulang Pulsa Sekarang</div>
                        <div className='
                            flex items-center justify-start
                            flex-row bg-white rounded-full
                            ml-10
                        '
                        style={{width:'50%', height: 60}}
                        >
                            <input className='focus:outline-none ml-10 text-2xl w-4/5' placeholder='Your Phone Number' 
                                value={this.state.phone} onChange={this.handlePhone}
                            />
                        </div>
                        <div className='
                                bg-yellow-600 mt-8
                                flex items-center justify-center
                                rounded-full text-2xl text-white
                                hover:bg-yellow-300
                            '
                            style={{width: 200, height:60}}
                            onClick={()=>this.searchProvider()}
                        >
                            {
                            !this.state.loadingCondition ?
                            <div>Input Phone</div>
                            :
                            <div className='flex flex-row'>
                                <svg className='animate-spin h-10 w-10 mr-10 bg-white' ></svg>
                                Loading...
                            </div>
                        }
                        </div>
                    </div>
                }
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    getUsername: state.forLogin.profile.username,
    getTransactionStat: state.transaction.transactionStat
})

const mapDispatchToProps=(dispatch)=>({
    setReceipt: (dataReceipt)=> dispatch({
        type:'ORDER_TAKEN',
        order: dataReceipt,
    }),
    setWallet: wallet => dispatch({
        type: 'GET_WALLET',
        wallet: wallet,
    }),
    setTransaction: transaction => dispatch({
        type: 'GET_TRANSACTION',
        receipt: transaction,
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Order);