import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import {Login, Signup, Home, Receipt, Profile} from '../page'

class Page extends Component {
    render(){
        return(
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/home' component={Home}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/receipt' component={Receipt}/>
            </Switch>
        )
    }
}

export default Page;