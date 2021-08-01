import React, { Component } from 'react'
import userPic from "../../assets/webicons/res/mipmap-xxxhdpi/user.png"
import lockPic from "../../assets/webicons/res/mipmap-xxxhdpi/lock.png"
import closePic from "../../assets/webicons/res/mipmap-xxxhdpi/close-white.png"
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Modal from 'react-modal'
import Spinner from 'react-bootstrap/Spinner'
import {ModalLogin} from '../../components/modal'



class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            passMask:false,
            username: "",
            password: "",
            loginNotif: false,
            showModal: true,
            message: "",
            loadingCondition: false,
        }

        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeUsername(event){
        this.setState({username: event.target.value, loginNotif: false})
    }

    handleChangePassword(event){
        this.setState({password: event.target.value, loginNotif: false})
    }

    handleSubmit(event){
        event.preventDefault();

        this.submitLogin(
            this.state.username,
            this.state.password
        )
    }

    submitLogin(){

        const inputLogin={
            username: this.state.username,
            password: this.state.password,
        }

        console.log('For Login : ', inputLogin)

        this.loginAPI(inputLogin);

    }

    loginAPI(dataToObj){
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

        fetch("http://localhost:8888/oneline/login", option)
                .then(response => response.json())
                .then(async json => {
                    if(json.success){
                        console.log("Login Response : ", json);
                        this.props.setLoginProfile(json.userProfile)
                        this.props.setOrder(json.orderData)
                        this.props.setProfile(json.userProfile)
                        this.props.setWallet(json.userProfile.wallet)

                        console.log("Response : ", json.message)
                        this.setState({loadingCondition: false,})
                    }
                    else{
                        console.log(json.message);
                        this.setState({loadingCondition: false, loginNotif: true, message: json.message})
                    }
                })
                .catch(err => console.log('Error'))
    }

    closeNotification(){
        this.setState({loginNotif: false})
    }
    // closeModal(){
    //     this.setState({loginNotif: true})
    // }

    render(){
        if(this.props.getLoginStatus !== false){
            return <Redirect to='/home' />
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
                <div className="flex items-center flex-col bg-white rounded-3xl my-20 py-20" 
                    style={{ width: 900}}
                >
                    <h1 className="text-7xl my-10">LOGIN</h1>

                    {
                        this.state.loginNotif ?
                        <div className='flex flex-row items-center justify-start bg-red-400 w-3/5 
                            h-20 rounded-3xl  '
                        >
                            <img onClick={()=>this.closeNotification()} className='ml-10' src={closePic} alt='Close' style={{width:45, height: 45}} />
                            <div className='ml-10 text-3xl text-white'>
                                {this.state.message}
                            </div>
                            
                        </div>
                        :
                        <div></div>
                    }
                    
                    {/* <ModalLogin
                        modalShow={this.state.showModal}
                        closeModal={()=>this.closeModal()}
                        content={this.state.message}
                    /> */}

                    <div
                        className="
                            flex border-2 border-black my-3 w-3/5 h-20 rounded-full placeholder-red-500
                            justify-start items-center bg-white
                        " 
                    >
                        <div className='flex flex-row'>
                            <img alt='User Icon' style={{marginLeft: 20, marginRight: 15}} width='50' src={userPic} />
                            <input style={{width: '80%', fontSize: 30}} className="focus:outline-none" 
                                type="text" placeholder="Username" value={this.state.username}
                                onChange={this.handleChangeUsername}
                            />
                        </div>
                    </div>

                    <div
                        className="
                            flex border-2 border-black my-3 w-3/5 h-20 rounded-full placeholder-red-500
                            justify-start items-center bg-white
                        " 
                    >
                        <div className='flex flex-row'>
                            <img alt='Lock Icon' style={{marginLeft: 20, marginRight: 15}} width='50' src={lockPic} />
                            <input style={{width: '80%', fontSize: 30}} className="focus:outline-none" 
                                type='password' placeholder="Password" value={this.state.password}
                                onChange={this.handleChangePassword}
                            />
                        </div>
                    </div>

                    <div
                        className="
                            flex border-2 border-black mt-10 mb-5 w-3/5 h-20 rounded-full placeholder-red-500
                            justify-center items-center bg-black hover:bg-gray-700 hover:border-0 hover:border-white text-4xl text-white
                        " 
                        onClick={()=> this.submitLogin()}
                    >
                        {
                            !this.state.loadingCondition ?
                            <div>Login</div>
                            :
                            <div className='flex flex-row'>
                                <svg className='animate-spin h-10 w-10 mr-10 bg-white' ></svg>
                                Loading...
                            </div>
                            // <Spinner animation="border"  variant='light' />
                        }
                    </div>
                    <div className='flex flex-row my-5 justify-start items-center'>
                        <h1 className="text-2xl">Don't have an account ?</h1>
                        <a href='\signup'><h1 className="text-2xl text-red-800" style={{marginLeft: 5}}>Register Now</h1></a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    getLoginStatus: state.forLogin.status
})

const mapDispatchToProps=(dispatch)=>({
    setLoginProfile: (user) => dispatch({
        type: 'LOGIN_DONE',
        profile: user,
    }),
    setProfile:(user)=> dispatch({
        type: 'RECEIVE_PROFILE',
        profile: user,
    }),
    setOrder: (receipt) => dispatch({
        type: 'ORDER_TAKEN',
        order: receipt,
    }),
    setWallet: wallet => dispatch({
        type: 'GET_WALLET',
        wallet: wallet,
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);