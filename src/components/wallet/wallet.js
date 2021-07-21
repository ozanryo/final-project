import React, { Component } from 'react'
import payIcon from '../../assets/walleticon/pay-now.png'
import exploreIcon from '../../assets/walleticon/explore.png'
import topupIcon from '../../assets/walleticon/wallet-circle.png'

class Wallet extends Component {
    constructor(props){
        super(props);
        this.state={
            sampleWallet: 2500000,
        }
    }

    render(){
        return(
            <div className='
                        flex items-center justify-start flex-row
                        rounded-3xl my-20 border-2
                    '
                    style={{width: 900, height: 300, backgroundColor: '#C031D2'}}
            >
                <div className='
                        flex items-start justify-center flex-col
                        bg-white rounded-3xl ml-10 px-8 border-2
                        border-black
                    '
                    style={{width: 340, height: 220}}
                >
                    <div className='text-2xl'>
                        One Wallet
                    </div>
                    <div className='py-12 text-4xl'>
                        Rp. {this.state.sampleWallet},-
                    </div>
                </div>
                <div className='
                        flex items-center justify-start flex-row ml-10
                    '
                    style={{width: 500, height: 220}}
                >
                    <div className='
                        flex items-center 
                        justify-center flex-col 
                        mx-4 hover:bg-red-400
                        rounded-3xl
                    '
                    style={{width: 120, height: 200}}
                    onClick={()=>alert("Pay Now")}
                    >
                        <div>
                            <img src={payIcon} />
                        </div>
                        <div className='text-3xl text-white mt-4'>Pay</div>
                    </div>
                    <div className='
                        flex items-center 
                        justify-center flex-col 
                        mx-4 hover:bg-red-400
                        rounded-3xl
                    '
                    style={{width: 120, height: 200}}
                    onClick={()=>alert("Topup Now")}
                    >
                        <div><img src={topupIcon} /></div>
                        <div className='text-3xl text-white mt-4'>Topup</div>
                    </div>
                    <div className='
                        flex items-center 
                        justify-center flex-col 
                        mx-4 hover:bg-red-400
                        rounded-3xl
                    '
                    style={{width: 120, height: 200}}
                    onClick={()=>alert("Explore Now")}
                    >
                        <div><img src={exploreIcon} /></div>
                        <div className='text-3xl text-white mt-4'>Explore</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wallet;