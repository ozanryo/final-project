import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import { Avatar } from 'react-native-elements'
import Icon from "react-native-vector-icons/Ionicons"
import {ModalDetails} from '../../components/modal'

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            user:{
                firstname: 'Ozananda',
                lastname: 'Fachristiary',
                phone: '08212312412',
                address: 'Jakarta',
                email: 'Ozan@user.id',
                username: 'Ozan997',
                wallet: 150000,
            },
            profileContent:[{
                    id: 0,
                    icon: 'person-circle',
                    caption: 'My Profile',
                    size: 40,
                    color: 'white',
                    click: ()=>this.setState({detailsInfo: true})
                }, {
                    id: 1,
                    icon: 'images',
                    caption: 'Albums',
                    size: 40,
                    color: 'white',
                }, {
                    id: 2,
                    icon: 'settings',
                    caption: 'Settings',
                    size: 40,
                    color: 'white',
                }, {
                    id:3,
                    icon: 'exit',
                    caption: 'Logout',
                    size: 40,
                    color: 'white',
                },
            ],
            detailsInfo: false,
        }
    }

    closeProfile(){
        this.setState({detailsInfo: false})
    }

    gotoUpdate=()=>{
        this.props.navigation.navigate('Update')
        this.setState({detailsInfo: false})
    }
    render(){
        return(
            <View style={styling.main}>
                {/* <ImageBackground 
                    source={require('../../assets/wallpaper/universe.jpg')}
                    resizeMode='cover'
                    style={styling.image}  
                > */}
                    <View style={styling.onBoard}>
                        <View style={styling.avatarLayout}>
                            <Avatar 
                                rounded
                                source={require('../../assets/avatar/user-color-boy.png')}
                                size={270}
                                containerStyle={{opacity:1}}
                            />
                        </View>
                        <View style={styling.usernameLayout}>
                            <Text style={styling.usernameCaption}>{this.state.user.username}</Text>
                        </View>
                        <FlatList 
                            style={styling.menuLayout}
                            scrollEnabled={false}
                            data={this.state.profileContent}
                            renderItem={
                                ({item}) => 
                                <TouchableOpacity style={styling.tableRow} onPress={item.click}>
                                    <Icon name={item.icon} size={item.size} color={item.color}/>
                                    <Text style={styling.captionText}>{item.caption}</Text>
                                </TouchableOpacity>
                            }
                            numColumns={2}
                        />
                    </View>
                    <ModalDetails 
                        modalShow={this.state.detailsInfo} 
                        closeShow={()=>this.closeProfile()} 
                        modalContent={this.state.user}
                        gotoUpdate={this.gotoUpdate}
                    />
                {/* </ImageBackground> */}
            </View>
        )
    }
}

const styling = StyleSheet.create({
    main:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    image:{
        flex:1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8
    },
    onBoard:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        
    },
    avatarLayout:{
        marginTop: 65,
        marginBottom: 10,
    },
    usernameLayout: {
        backgroundColor:'#7E92E3BA',
        width: 340,
        height: 75,
        borderRadius: 18,
        borderWidth: 0.7,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginBottom: 15,
    },
    usernameCaption:{
        fontSize: 40,
        color: 'white',
        fontWeight: '900'
    },
    menuLayout:{
    },
    tableRow:{
        backgroundColor: '#7599F2',
        marginHorizontal: 15,
        marginVertical: 15,
        width: 155,
        height: 100,
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: 'white',
        alignItems:'center',
        justifyContent: 'center',
    },
    captionText:{
        fontSize:20,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default Profile;