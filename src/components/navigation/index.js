import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer} from '@react-navigation/native'
import LoginNav from './loginNavigation';
import HomeNav from './homeNavigation';

const Stack = createStackNavigator();

export default class Navigator extends Component {
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='LoginNav' component={LoginNav} 
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen name='HomeNav' component={HomeNav} 
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}