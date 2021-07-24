import React, { Component } from 'react'
import {MenuBar} from "./menu"
import { Link } from "react-router-dom"
import "./navigation.css"
import compLogo from "../../assets/logo/logo-landscape.png"
import {connect} from 'react-redux'

class NavBar extends Component{
    render(){
        return(
            <div className="NavbarItems">
                <h1 className="navbar-logo">
                    <img width="350" height="50" src={compLogo} alt="logo"/>
                </h1>
                <div className="nav-menu"
                >
                    {
                        MenuBar.map((item, index)=>{
                            if(!this.props.getLoginStatus){
                                if( item.title === "Login" || item.title === "Sign-Up"){
                                    return (
                                            <div key={index} >
                                                <Link className="nav-links" to={item.url}>
                                                    {item.title}
                                                </Link>
                                            </div>
                                    )
                                }
                            } else {
                                if(item.title === "Home" || item.title === "Receipt" || item.title === "Profile")
                                    return (
                                        <div key={index} >
                                            <Link className="nav-links" to={item.url}>
                                                {item.title}
                                            </Link>
                                        </div>
                                    )
                                }
                            }
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    getLoginStatus: state.forLogin.status
})

export default connect(mapStateToProps)(NavBar);