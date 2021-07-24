import React, { Component } from 'react'
import userPic from "../../assets/webicons/res/mipmap-xxxhdpi/user.png"
import lockPic from "../../assets/webicons/res/mipmap-xxxhdpi/lock.png"
import cityIcon from "../../assets/webicons/res/mipmap-xxxhdpi/city.png"
import phoneIcon from "../../assets/webicons/res/mipmap-xxxhdpi/phone.png"
import closeIcon from "../../assets/webicons/res/mipmap-xxxhdpi/close.png"
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class UpdateProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname: "",
            lastname: "",
            phone: "",
            city: "",
            username: "",
            password: "",
            repassword: "",
            editedStatus: false
        }

        this.handleFirstname = this.handleFirstname.bind(this)
        this.handleLastname = this.handleLastname.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePass = this.handlePass.bind(this)
        this.handleRePass = this.handleRePass.bind(this)
    }
    handleFirstname(e){
        this.setState({firstname: e.target.value})
    }
    handleLastname(e){
        this.setState({lastname: e.target.value})
    }
    handlePhone(e){
        this.setState({phone: e.target.value})
    }
    handleCity(e){
        this.setState({city: e.target.value})
    }
    handleUsername(e){
        this.setState({username: e.target.value})
    }
    handlePass(e){
        this.setState({password: e.target.value})
    }
    handleRePass(e){
        this.setState({repassword: e.target.value})
    }

    componentDidMount(){
        this.setState({
            firstname: this.props.getProfile.firstname,
            lastname: this.props.getProfile.lastname,
            phone: this.props.getProfile.phone,
            city: this.props.getProfile.address,
            username: this.props.getProfile.username,
        })
    }

    submitUpdate(){
        if(this.state.repassword === this.state.password){
            const sendUpdate ={
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                phone: this.state.phone,
                address: this.state.city,
                email: this.props.getProfile.email,
                username: this.props.getProfile.username,
                password: this.state.password
            }

            console.log("New Profile : ", sendUpdate)
            this.submitUpdateAPI(sendUpdate)
            console.log('Update User Berhasil')
        } else {
            alert('Pastikan Password dan Re Password Sama')
        }
    }

    submitUpdateAPI(dataToObj){
        const option = {
            method: 'PUT',
            mode: "cors",
            headers:{ 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            },
            body: JSON.stringify(dataToObj)
        }

        fetch("http://localhost:8888/oneline/user/update/profile", option)
                .then(response => response.json())
                .then(async json => {
                    console.log("Update User Response : ", json);
                    if(json.success === true){
                        console.log('New Profile : ', json.userProfile)
                        this.props.setEditProfile(json.userProfile)
                        console.log("Response : ", json.message)
                    } else {
                        console.log("Response : ", json.message)
                    }
                })
                .catch(err => console.log('Error'))
    }
    

    render(){
        if(this.props.getEditStatus === false){
            return <Redirect to="/profile" />
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
                        onClick={()=>this.props.cancelEdit()}
                    >
                        <img alt={'close-Icon'} width='50' src={closeIcon} />
                    </div>

                    <h1 className="text-7xl text-left my-10">Update Your Profile</h1>

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
                                style={{width: 250, fontSize: 30, marginLeft: 50, marginRight: 10}} 
                                className="focus:outline-none" type='text' 
                                placeholder="Firstname"
                                value={this.state.firstname}
                                onChange={this.handleFirstname}
                            />
                            <input 
                                style={{width: 250, fontSize: 30, borderColor:'black', borderLeftWidth: 0.7, paddingLeft:25, marginLeft: 5, marginRight: 10}} 
                                className="focus:outline-none" type='text' 
                                placeholder="Lastname"
                                value={this.state.lastname}
                                onChange={this.handleLastname}
                            />
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
                            <img alt='phone-icon' style={{marginLeft: 25, marginRight: 15}} width='50' src={phoneIcon} />
                            <input 
                                style={{width: '90%', fontSize: 30, marginLeft: 20, marginRight: 15}} 
                                className="focus:outline-none" type='tel' placeholder="Phone"
                                value={this.state.phone}
                                onChange={this.handlePhone}
                            />
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
                            <img alt='City Icon' style={{marginLeft: 25, marginRight: 15}} width='50' src={cityIcon} />
                            <input 
                                style={{width: '90%', fontSize: 30, marginLeft: 20, marginRight: 15}} 
                                className="focus:outline-none" type='text' 
                                placeholder="City"
                                value={this.state.city}
                                onChange={this.handleCity}
                            />
                        </div>
                    </div>

                    {/* <div
                        className="
                            flex border-2 border-black my-3
                            w-3/5 h-20 rounded-2xl placeholder-red-500
                            justify-start items-center
                            bg-white
                        " 
                        style={{width: '80%'}}
                    >
                        <div className='flex flex-row'>
                            <img alt='User Icon' style={{marginLeft: 25, marginRight: 15}} width='50' src={userPic} />
                            <input 
                                style={{width: '90%', fontSize: 30, marginLeft: 20, marginRight: 15}} 
                                className="focus:outline-none" type='text' 
                                placeholder="Create Username"
                                value={this.state.username}
                                onChange={this.handleUsername}
                            />
                        </div>
                    </div> */}

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
                            <img alt='Lock Icon' style={{marginLeft: 25, marginRight: 15}} width='50' src={lockPic} />
                            <input 
                                style={{width: '90%', fontSize: 30, marginLeft: 20, marginRight: 15}} 
                                className="focus:outline-none" type='password' 
                                placeholder="Create Password"
                                value={this.state.password}
                                onChange={this.handlePass}
                            />
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
                            <img alt='Lock Icon' style={{marginLeft: 25, marginRight: 15}} width='50' src={lockPic} />
                            <input 
                                style={{width: '90%', fontSize: 30, marginLeft: 20, marginRight: 15}} 
                                className="focus:outline-none" type='password' 
                                placeholder="Re-Enter Password"
                                value={this.state.repassword}
                                onChange={this.handleRePass}
                            />
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
                        onClick={()=> this.submitUpdate()}
                    >
                        Update
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    getProfile: state.edit.profile,
    getEditStatus: state.edit.status,
})

const mapDispatchToProps=(dispatch)=>({
    setEditProfile: (newProfle)=>dispatch({
        type: 'EDIT_DONE',
        profile: newProfle,

    }),
    cancelEdit: ()=>dispatch({
        type: 'EDIT_CANCEL'
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);