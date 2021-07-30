import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {OrderCompletion, Home} from '../../page'

const Stack = createStackNavigator();

export default class OrderNav extends Component {
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} 
                    options={{headerShown: false, }}
                />
                <Stack.Screen name='Order' component={OrderCompletion} />
            </Stack.Navigator>
        )
    }
}