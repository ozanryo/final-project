import React, { Component } from 'react'
import userPic from "../../assets/webicons/res/mipmap-xxxhdpi/user.png"
import lockPic from "../../assets/webicons/res/mipmap-xxxhdpi/lock.png"
import cityIcon from "../../assets/webicons/res/mipmap-xxxhdpi/city.png"
import phoneIcon from "../../assets/webicons/res/mipmap-xxxhdpi/phone.png"
import closeIcon from "../../assets/webicons/res/mipmap-xxxhdpi/close.png"
import {Redirect} from 'react-router-dom'

class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            gotoLogin: false,
        }
    }

    render(){
        if(this.state.gotoLogin){
            return <Redirect to="/login" />
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
                        className='flex items-center justify-start' 
                        style={{width:'80%',}}
                        onClick={()=>this.setState({gotoLogin: true})}
                    >
                        <img width='50' src={closeIcon} />
                    </div>

                    <h1 className="text-7xl text-left my-10">Create Your Account</h1>

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
                            <input style={{width: 250, fontSize: 30, marginLeft: 50, marginRight: 10}} className="focus:outline-none" type='text' placeholder="Firstname"/>
                            <input style={{width: 250, fontSize: 30, borderColor:'black', borderLeftWidth: 0.7, paddingLeft:25, marginLeft: 5, marginRight: 10}} className="focus:outline-none" type='text' placeholder="Lastname"/>
                        </div>
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
                            <img style={{marginLeft: 25, marginRight: 15}} width='50' src={phoneIcon} />
                            <input style={{width: '90%', fontSize: 30, marginLeft: 20, marginRight: 15}} className="focus:outline-none" type='tel' placeholder="Phone"/>
                        </div>
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
                            <img style={{marginLeft: 25, marginRight: 15}} width='50' src={cityIcon} />
                            <input style={{width: '90%', fontSize: 30, marginLeft: 20, marginRight: 15}} className="focus:outline-none" type='text' placeholder="City"/>
                        </div>
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
                            <img style={{marginLeft: 25, marginRight: 15}} width='50' src={userPic} />
                            <input style={{width: '90%', fontSize: 30, marginLeft: 20, marginRight: 15}} className="focus:outline-none" type='text' placeholder="Create Username"/>
                        </div>
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
                            <img style={{marginLeft: 25, marginRight: 15}} width='50' src={lockPic} />
                            <input style={{width: '90%', fontSize: 30, marginLeft: 20, marginRight: 15}} className="focus:outline-none" type='password' placeholder="Create Password"/>
                        </div>
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
                            <img style={{marginLeft: 25, marginRight: 15}} width='50' src={lockPic} />
                            <input style={{width: '90%', fontSize: 30, marginLeft: 20, marginRight: 15}} className="focus:outline-none" type='password' placeholder="Re-Enter Password"/>
                        </div>
                    </div>

                    <div
                        className="
                            flex border-2 border-black my-10
                            w-3/5 h-14 rounded-full placeholder-red-500
                            justify-center items-center bg-black hover:bg-gray-700
                            hover:border-0 hover:border-white
                            text-2xl text-white
                        " 
                        style={{width: '80%', height: 70}}
                        onClick={()=> alert("Hai")}
                    >
                        Register
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;