import React, { Component } from 'react'
import {Wallet, Order} from "../../components"
import payIcon from '../../assets/walleticon/pay-now.png'
import exploreIcon from '../../assets/walleticon/explore.png'
import topupIcon from '../../assets/walleticon/wallet-circle.png'

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            sampleWallet: 2500000,
        }
    }
    
    render(){
        return(
            <div
                className="
                    flex justify-start
                    items-center flex-col
                    py-4
                "  
                style={{ height:'150vh', backgroundColor: '#A39D9C'}}
            >
                <Wallet />
                <Order />
            </div>
        )
    }
}

export default Home;