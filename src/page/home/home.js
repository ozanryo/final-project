import React, { Component } from 'react'
import {Wallet, Order} from "../../components"
import {connect} from 'react-redux'

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
                <Wallet receiveWallet={this.props.getWallet}/>
                <Order />
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    getWallet: state.wallet.wallet
})

export default connect(mapStateToProps)(Home);