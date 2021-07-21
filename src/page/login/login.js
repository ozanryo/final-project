import React, { Component } from 'react'
import userPic from "../../assets/webicons/res/mipmap-xxxhdpi/user.png"
import lockPic from "../../assets/webicons/res/mipmap-xxxhdpi/lock.png"
import {Redirect} from 'react-router-dom'


class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            passMask:false
        }
    }

    render(){
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
                        flex items-center
                        flex-col bg-white
                        rounded-3xl my-20 py-20
                    " 
                    style={{ width: 900}}
                >
                    <h1 className="text-7xl my-10">LOGIN</h1>
                    <div
                        className="
                            flex border-2 border-black my-3
                            w-3/5 h-20 rounded-full placeholder-red-500
                            justify-start items-center
                            bg-white
                        " 
                    >
                        <div className='flex flex-row'>
                            <img style={{marginLeft: 20, marginRight: 15}} width='50' src={userPic} />
                            <input style={{width: '80%', fontSize: 30}} className="focus:outline-none" type="text" placeholder="Username"/>
                        </div>
                    </div>

                    <div
                        className="
                            flex border-2 border-black my-3
                            w-3/5 h-20 rounded-full placeholder-red-500
                            justify-start items-center
                            bg-white
                        " 
                    >
                        <div className='flex flex-row'>
                            <img style={{marginLeft: 20, marginRight: 15}} width='50' src={lockPic} />
                            <input style={{width: '80%', fontSize: 30}} className="focus:outline-none" type='password' placeholder="Password"/>
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
                        onClick={()=> alert("Hai")}
                    >
                        Login
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

export default Login;