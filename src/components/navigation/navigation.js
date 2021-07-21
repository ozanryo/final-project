import React, { Component } from 'react'
import {MenuBar} from "./menu"
import { Link } from "react-router-dom"
import "./navigation.css"
import compLogo from "../../assets/logo/logo-landscape.png"

class NavBar extends Component{
    render(){
        return(
            <div className="NavbarItems">
                <h1 className="navbar-logo">
                    <img width="150" height="50" src={compLogo} alt="logo"/>
                </h1>
                <div className="nav-menu"
                >
                    {
                        MenuBar.map((item, index)=>{
                            return(
                                <div key={index} >
                                    <Link className="nav-links" to={item.url}>
                                        {item.title}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default NavBar;