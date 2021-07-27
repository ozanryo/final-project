import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Profile, Update} from '../../page'

const Stack = createStackNavigator();

export default class ProfileNavigation extends Component {
    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen name='Profile' component={Profile} 
                    options={{headerShown: false, }}
                />
                <Stack.Screen name='Update' component={Update} />
            </Stack.Navigator>
        )
    }
}