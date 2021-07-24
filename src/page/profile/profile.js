import React, { Component } from 'react'
import profileImage from "../../assets/avatar/user-color-boy.png"
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            editedStatus: false
        }
    }

    gotoEdit(){
        console.log("Edited Profile ",this.props.getProfile)
        this.props.setEditProfile(this.props.getProfile)
        this.setState({editedStatus: true})
    }
    render(){
        if(this.state.editedStatus == true){
            return <Redirect to='/edit-profile' />
        }
        return(
            <div
                className="
                    flex justify-center
                    items-center flex-col
                    py-25
                "  
                style={{ height:'150vh', backgroundColor: '#A39D9C'}}
            >
                <div
                    className="
                        flex items-center
                        flex-row border-black border-4
                        rounded-3xl my-50 bg-white 
                    " 
                    style={{ width: 1250}}
                >
                    <div className='flex flex-col items-center' style={{marginLeft: 50, marginRight: 50}}>
                        <img alt='Profile Icon' src={profileImage} width='350' height='350'/>
                    </div>
                    <div className='flex flex-col items-start justify-start' style={{marginLeft: 20, paddingLeft: 70, borderLeftWidth: 0.7, borderLeftColor:'black'}}>
                        <h1 className='text-left text-black my-10' style={{fontSize:75}}>User Profile</h1>
                        
                        <h1 className='text-left text-black my-2' style={{fontSize:35}}>
                            Name : {this.props.getProfile.firstname}  {this.props.getProfile.lastname}
                        </h1>
                        <h1 className='text-left text-black my-2' style={{fontSize:35}}>
                            Phone : {this.props.getProfile.phone}
                        </h1>
                        <h1 className='text-left text-black my-2' style={{fontSize:35}}>
                            City : {this.props.getProfile.address}
                        </h1>
                        <h1 className='text-left text-black my-2' style={{fontSize:35}}>
                            Email : {this.props.getProfile.email}
                        </h1>
                        <h1 className='text-left text-black my-2' style={{fontSize:35}}>
                            Username : {this.props.getProfile.username}
                        </h1>

                        <div className='my-10 flex flex-row justify-start items-center' style={{width: 500}}>
                            <div className='
                                    flex
                                    w-3/5 h-20 rounded-full 
                                    justify-center items-center 
                                    bg-blue-700 hover:bg-blue-500 text-white
                                '
                                style={{fontSize: 25, marginRight: 15}}
                                onClick={()=>this.gotoEdit()}
                            >
                                Edit Profile
                            </div>

                            <div className='
                                    flex w-3/5 h-20 rounded-full 
                                    justify-center items-center 
                                    bg-red-700 hover:bg-red-500 text-white
                                '
                                style={{fontSize: 25, marginLeft: 25,}}
                                onClick={()=>alert("Logout")}
                            >
                                Logout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    getProfile: state.forLogin.profile,
    getEditStatus: state.edit.status,
})

const mapDispatchToProps=(dispatch)=>({
    setEditProfile: (newProfle)=>dispatch({
        type: 'EDIT_BEGIN',
        profile: newProfle,

    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);