import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, ToastAndroid } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

class LoginInput extends Component {
    constructor(props){
        super(props);
        this.state={
            username: "Ozan997",
            password: "Ozan997?",
            dataSecureEntry: true,
        }
    }

    showPassword(){
        if(this.state.dataSecureEntry === false){
            this.setState({dataSecureEntry: true})
        } else {
            this.setState({dataSecureEntry: false})
        }
    }
    
    login(){
        const userLogin = {
            username: this.state.username,
            password: this.state.password,
        }

        console.log('Login User : ', userLogin)

        ToastAndroid.show('Berhasil Login ', ToastAndroid.SHORT)

        this.props.login()
        // this.props.navigation.navigate('HomeNav');
    }

    render(){
        return(
            <View>
                <View style={styles.textInput} >
                    <Icon 
                        style={{padding: 7, alignItems:"center", justifyContent:"center"}}
                        name="person-circle-outline"
                        color="#030303"
                        size={30}
                    />
                    <TextInput 
                        style={styles.inputForm} 
                        placeholder="Your Username" 
                        onChangeText={(username)=>this.setState({username})}
                        value={this.state.username}
                    />
                </View>
                <View style={styles.textInput}>
                    <Icon 
                        style={{padding: 7, alignItems:"center", justifyContent:"center"}}
                        name="lock-closed"
                        color="#030303"
                        size={30}
                    />
                    <TextInput 
                        style={styles.inputForm} 
                        placeholder="Your Password" 
                        secureTextEntry={this.state.dataSecureEntry} 
                        onChangeText={(password)=>this.setState({password})}
                        value={this.state.password}
                    />
                    <TouchableOpacity 
                        style={{padding: 7, alignItems:"center", justifyContent:"center"}} 
                        onPress={()=>this.showPassword()}
                    >
                        {
                            this.state.dataSecureEntry ? 
                            <Icon 
                                name="eye-outline"
                                color="#030303"
                                size={30}
                            />
                            :
                            <Icon 
                                name="eye-off-outline"
                                color="#030303"
                                size={35}
                            />
                        }
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => this.login()}
                >
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    }, 
    textInput: {
        width: 350,
        height: 65,
        borderColor: "#030303",
        borderWidth: 0.8,
        borderRadius: 30,
        paddingHorizontal: 15,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start'
        
    },
    inputForm: {
        width: "70%",
        height: 50,
        fontSize: 25,
    },
    button: {
        width: 350,
        height: 65,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#030303",
        marginVertical:10
    },
    btnText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
})

export default LoginInput;