import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Login, Register} from '../../page'

const Stack = createStackNavigator();

export default class LoginNav extends Component {
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} 
                    options={{headerShown: false, }}
                />
                <Stack.Screen name='Register' component={Register} />
            </Stack.Navigator>
        )
    }
}
