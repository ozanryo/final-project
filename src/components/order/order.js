import React, { Component } from 'react'
import Select from 'react-dropdown-select';
import backIcon from "../../assets/orderticon/backward.png"

class Order extends Component {
    constructor(props){
        super(props);
        this.state={
            phone: "",
            methods: "",
            pulsa: 0,
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
            secondStep: true,
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
        this.setState({pulsa: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();

        this.submitFunction(
            this.state.phone,
            this.state.pulsa,
            this.state.methods
        )
    }

    submitFunction(inputPhone, inputPulsa, inputMetode){
        const newOrder = [{
            phone: inputPhone,
            pulsa: inputPulsa,
            metode: inputMetode
        }]

        console.log("Pesanan : ",newOrder)
    }


    searchProvider(){
        if(this.state.phone.slice(0, 4) == '0821'){
            this.setState({secondStep: true})
        } else if (this.state.phone.slice(0, 4) == '0822') {
            this.setState({secondStep: true})
        } else if(this.state.phone == ''){
            alert('Mohon Mengisi Nomor Telepon')
        }
        else {
            alert('Provider Tidak Tersedia')
        }
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
                                <img width='50' src={backIcon} />
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
                                            className='text-2xl  text-center focus:outline-none ml-10'
                                            onChange={this.handleNominal}
                                            style={{width:150}}
                                        >
                                            {
                                                this.state.sampleProvider1.map((item, index)=>(
                                                        <option key={index} value={item.code}>{item.nominal}</option>
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
                                        <input style={{width: 25, height: 25}} type='radio' id='va' value='virtual-account' 
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
                                bg-yellow-400 mt-8
                                flex items-center justify-center
                                rounded-full text-2xl
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

export default Order;