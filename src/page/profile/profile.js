import React, { Component } from 'react'
import profileImage from "../../assets/avatar/user-color-boy.png"

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <div
                className="
                    flex justify-center
                    items-center flex-col
                    py-25
                "  
                style={{ height:'90vh', backgroundColor: '#171717AB'}}
            >
                <div
                    className="
                        flex items-center
                        flex-row border-white border-4
                        rounded-3xl my-50 
                    " 
                    style={{ width: 1250}}
                >
                    <div className='flex flex-col items-center' style={{marginLeft: 50, marginRight: 50}}>
                        <img src={profileImage} width='350' height='350'/>
                        {/* <div className='mt-24 
                            flex
                            w-4/5 h-20 rounded-full placeholder-red-500
                            justify-center items-center 
                            bg-red-700 hover:bg-red-500 text-white
                        '
                        style={{fontSize: 25}}
                        onClick={()=>alert("Change Profile Picture")}
                        >
                            Change Photo
                        </div> */}
                    </div>
                    <div className='flex flex-col items-start justify-start' style={{marginLeft: 20, paddingLeft: 70, borderLeftWidth: 0.7, borderLeftColor:'white'}}>
                        <h1 className='text-left text-white my-10' style={{fontSize:75}}>User Profile</h1>
                        
                        <h1 className='text-left text-white my-2' style={{fontSize:35}}>Name : </h1>
                        <h1 className='text-left text-white my-2' style={{fontSize:35}}>Phone : </h1>
                        <h1 className='text-left text-white my-2' style={{fontSize:35}}>City : </h1>
                        <h1 className='text-left text-white my-2' style={{fontSize:35}}>Email : </h1>
                        <h1 className='text-left text-white my-2' style={{fontSize:35}}>Username : </h1>

                        <div className='my-10 flex flex-row justify-start items-center' style={{width: 500}}>
                            <div className='
                                    flex
                                    w-3/5 h-20 rounded-full 
                                    justify-center items-center 
                                    bg-blue-700 hover:bg-blue-500 text-white
                                '
                                style={{fontSize: 25, marginRight: 15}}
                                onClick={()=>alert("Edit Profile")}
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

export default Profile;