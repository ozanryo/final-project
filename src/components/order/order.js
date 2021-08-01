import React, { Component } from 'react'
import Select from 'react-dropdown-select';
import backIcon from "../../assets/orderticon/backward.png"
import {connect} from 'react-redux'

class Order extends Component {
    constructor(props){
        super(props);
        this.state={
            phone: "",
            methods: "",
            produk: 1,
            sampleProvider1:[{
                    code: 1,
                    nominal: 5000,
                    harga: 5750
                },{
                    code: 2,
                    nominal: 10000,
                    harga: 10750
                }
            ],
            sampleProvider2:[{
                    code: 1,
                    nominal: 5000,
                    harga: 5250
                },{
                    code: 2,
                    nominal: 10000,
                    harga: 11250
                }
            ],
            secondStep: false,
            provider: [],
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
                    console.log("Data : ", dataProvider)

                    this.setState({provider: dataProvider})
                })
                .catch(err => console.log('Error'))
    }

    render(){
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
                                onClick={()=>this.setState({secondStep: false})}
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
                                        style={{width:200, height: 45}}
                                    >
                                        <select 
                                            className='text-2xl text-black text-center focus:outline-none ml-10'
                                            onChange={this.handleNominal}
                                            style={{width:150}}
                                            // value={this.state.provider}
                                        >
                                            {
                                                this.state.provider.map((item, index)=>(
                                                        <option key={index} className='text-black text-xl' value={item.code}>{item.pulsa}</option>
                                                ))
                                            }
                                        </select>
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
                                justify-center rounded-full bg-red-700 w-1/4 h-24
                                text-white text-4xl mt-14
                            '
                            onClick={this.handleSubmit}
                            >
                                Submit
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
                            Input Phone
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    getUsername: state.forLogin.profile.username,
})

const mapDispatchToProps=(dispatch)=>({
    setReceipt: (dataReceipt)=> dispatch({
        type:'ORDER_TAKEN',
        order: dataReceipt,
    }),
    setWallet: wallet => dispatch({
        type: 'GET_WALLET',
        wallet: wallet,
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Order);