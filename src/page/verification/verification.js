import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Verification extends Component {
    constructor(props){
        super(props);
        this.state={
            code: "",
            verifCode: "",
            verifState: false,
        }

        this.handleCode=this.handleCode.bind(this)
    }

    componentDidMount(){
        this.setState({
            code: this.props.getVerifCode
        })
    }

    handleCode(e){
        this.setState({verifCode: e.target.value})
    }

    submit(){
        const verifCode ={
            verifcode: this.state.verifCode
        }
        console.log('Kirim Kode : ', verifCode)
        this.submitVerifCode(verifCode);
    }

    submitVerifCode(dataToObj){
        const option = {
            method: 'POST',
            mode: "cors",
            headers:{ 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            },
            body: JSON.stringify(dataToObj),
        }

        fetch("http://localhost:8888/oneline/verification", option)
                .then(response => response.json())
                .then(async json => {
                    console.log("New User Registration Response : ", json);
                    console.log('Registered User : ', json.doneUser)
                    this.props.verifyDone();
                    this.setState({verifState: true})
                    console.log("Response : ", json.message)
                })
                .catch(err => console.log('Error'))
    }
    render(){
        console.log('Kode Masuk : ', this.props.getVerifCode)
        if(this.state.verifState  === true){
            return <Redirect to='/' />
        }
        return(
            <div className="
                flex
                justify-center
                items-center
                flex-col
            " 
            style={{backgroundColor: '#171717AB'}}
            >
                <div
                    className="
                        flex items-center justify-center
                        flex-col bg-white
                        rounded-3xl my-20 py-20
                    " 
                    style={{ width: 900}}
                >
                    <div className='text-black text-5xl mt-4 mb-8 text-center'>
                        Insert The Code To Verify Your New Account
                    </div>
                    <div className='text-black text-8xl mt-8 mb-8'>
                        {this.state.code}
                    </div>

                    <div
                        className="
                            flex border-2 border-black my-3
                            w-3/5 h-20 rounded-2xl placeholder-red-500
                            justify-start items-center
                            bg-white
                        " 
                        style={{width: '80%'}}
                    >
                        <div className='flex flex-row'>
                            <input 
                                style={{width: '90%', fontSize: 30, marginLeft: 20, marginRight: 15}} 
                                className="focus:outline-none" type='tel' placeholder="Verification Code"
                                value={this.state.verifCode} onChange={this.handleCode}
                            />
                        </div>
                    </div>

                    <div
                        className="
                            flex border-2 border-black mt-10 mb-5
                            w-3/5 h-20 rounded-full placeholder-red-500
                            justify-center items-center bg-black hover:bg-gray-700
                            hover:border-0 hover:border-white
                            text-4xl text-white
                        " 
                        onClick={()=>this.submit()}
                    >
                        Continue
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    getVerifCode: state.verify.verifCode,
})

const mapDispatchToProps=(dispatch)=>({
    verifyDone: () => dispatch({
        type: 'VERIF_DONE',
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Verification);