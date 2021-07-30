import React, { Component } from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home, Receipt,} from '../../page'
import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import ProfileNavigation from './profileNavigation';
import OrderNav from './orderNavigation';

const Tab = createBottomTabNavigator();

export default class HomeNav extends Component {
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <Tab.Navigator name='HomeNav'
                tabBarOptions={{
                    showLabel:false,
                    style:{
                       height: 80, 
                       borderBottomEndRadius:15,
                    }
                }}
            >
                <Tab.Screen 
                    name='Home' component={OrderNav} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={style.tabs} >
                                <Icon name='home' color={focused ? "#C70707" : "#363535"} size={30} />
                                <Text style={{color: focused ? "#C70707" : "#363535", fontSize: 12}} >HOME</Text>
                            </View>
                        )
                    }}
                />
                <Tab.Screen 
                    name='Receipt' component={Receipt} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={style.tabs} >
                                <Icon name='receipt' color={focused ? "#C70707" : "#363535"} size={30} />
                                <Text style={{color: focused ? "#C70707" : "#363535", fontSize: 12}} >RECEIPT</Text>
                            </View>
                        )
                    }}
                />
                <Tab.Screen 
                    name='Profile' component={ProfileNavigation} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={style.tabs} >
                                <Icon name='person' color={focused ? "#C70707" : "#363535"} size={30} />
                                <Text style={{color: focused ? "#C70707" : "#363535", fontSize: 12}} >PROFILE</Text>
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
        )
    }
}

const style = StyleSheet.create({
    tabs: {
        alignItems: 'center',
        justifyContent: 'center',
        // borderRightWidth: 0.8,
        // borderRightColor: "#C70707",
        // borderLeftWidth: 0.8,
        // borderLeftColor: "#C70707",
        // paddingHorizontal:15
    }
})