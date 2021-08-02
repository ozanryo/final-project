import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import {Home, Receipt, Profile, Login, Signup, UpdateProfile, Verification, Transaction} from '../page'

class Page extends Component {
    render(){
        return(
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/receipt' component={Receipt}/>
                <Route exact path='/' component={Login}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/edit-profile' component={UpdateProfile}/>
                <Route path='/verify' component={Verification}/>
                <Route path='/transaction' component={Transaction} />
                <Route exact path='/*'>
                    <div className='flex items-center justify-center text-black text-7xl' >
                        Page Not Found
                    </div>
                </Route>
            </Switch>
        )
    }
}

export default Page;