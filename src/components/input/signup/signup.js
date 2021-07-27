import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet,TouchableOpacity, ToastAndroid, ScrollView } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import {connect} from 'react-redux'

class RegisterInput extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname: "",
            lastname: "",
            phone: "",
            address: "",
            email: "",
            username: "",
            password: "",
            repassword:"",
            dataSecureEntry: true,
            dataSecureRePassEntry: true,
            isUserValid: true,
            validUsername: false,
            isPassValid: true,
            validPassword: false,
            donePassword: false,
        }
    }

    showPassword(){
        if(this.state.dataSecureEntry === false){
            this.setState({dataSecureEntry: true})
        } else {
            this.setState({dataSecureEntry: false})
        }
    }

    showRePassword(){
        if(this.state.dataSecureRePassEntry === false){
            this.setState({dataSecureRePassEntry: true})
        } else {
            this.setState({dataSecureRePassEntry: false})
        }
    }
    
    createUser(){
        if(
            this.state.firstname == "" || this.state.lastname == "" ||
            this.state.phone == "" || this.state.address =="" ||
            this.state.email == "" || this.state.username == "" ||
            this.state.password == "" || this.state.repassword == ""
        ){
            ToastAndroid.show('Mohon Lengkapi Data', ToastAndroid.SHORT)
        } else{
            if(this.state.password == this.state.repassword){
                const newUser = {
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    phone: this.state.phone,
                    address: this.state.address,
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password,
                }
        
                console.log('New User : ', newUser)
        
                ToastAndroid.show('Mengirim Data User Baru ', ToastAndroid.SHORT)
                // this.props.sendBack();
                this.props.setVerif('3212')
            }else{
                ToastAndroid.show('Pastikan Password yang diinput samas ', ToastAndroid.SHORT)
            }
        }        
    }

    validateUsername(input){
        var regex = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/
        return regex.test(input)
    }

    changeUsername(input){
        if (!this.validateUsername(input)) {
            this.setState({username: input})
            console.log('Tidak Valid')
            this.setState({
                isUserValid: false,
                
            })
            console.log(
                "Username consists of alphanumeric characters (a-zA-Z0-9), lowercase, or uppercase." + 
                "\nUsername allowed of the dot (.), underscore (_), and hyphen (-)." + 
                "\nThe dot (.), underscore (_), or hyphen (-) must not be the first or last character." + 
                "\nThe dot (.), underscore (_), or hyphen (-) does not appear consecutively, e.g., java..regex" + 
                "\nThe number of characters must be between 5 to 20."
            )
        } else {
            this.setState({username: input})
            console.log('Valid')
            this.setState({validUsername: true, isUserValid: true})
        }
    }

    validatePassword(input){
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return regex.test(input)
    }

    changePassword(input){
        if (!this.validatePassword(input)) {
            this.setState({password: input})
            console.log('Tidak Valid')
            this.setState({
                isPassValid: false,
                
            })
            console.log(
                "Password must contain at least one digit [0-9]." + 
                "\nPassword must contain at least one digit [0-9]." + 
                "\nPassword must contain at least one uppercase Latin character [A-Z]" + 
                "\nPassword must contain at least one special character like ! @ # & ( )" + 
                "\nPassword must contain a length of at least 8 characters "
            )
        } else {
            this.setState({password: input})
            console.log('Valid')
            this.setState({validPassword: true, isPassValid: true})
        }
    }

    checkPassword(input){
        this.setState({repassword: input})
        this.samePassword()
    }

    samePassword(){
        if(this.state.password == this.state.repassword){
            console.log('Password Sudah sama')
            this.setState({
                donePassword: true,
            })
        }else{
            this.setState({donePassword: false})
        }
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.textInput} >
                    <Icon 
                        style={{padding: 7, alignItems:"center", justifyContent:"center"}}
                        name="person"
                        color="#030303"
                        size={30}
                    />
                    <TextInput 
                        style={styles.inputForm} 
                        placeholder="Your Firstname" 
                        onChangeText={(firstname)=>this.setState({firstname})}
                        value={this.state.firstname}
                    />
                </View>
                <View style={styles.textInput} >
                    <Icon 
                        style={{padding: 7, alignItems:"center", justifyContent:"center"}}
                        name="person"
                        color="#030303"
                        size={30}
                    />
                    <TextInput 
                        style={styles.inputForm} 
                        placeholder="Your Lastname" 
                        onChangeText={(lastname)=>this.setState({lastname})}
                        value={this.state.lastname}
                    />
                </View>
                <View style={styles.textInput} >
                    <Icon 
                        style={{padding: 7, alignItems:"center", justifyContent:"center"}}
                        name="call"
                        color="#030303"
                        size={30}
                    />
                    <TextInput 
                        style={styles.inputForm} 
                        placeholder="Your Phone Number" 
                        onChangeText={(phone)=>this.setState({phone})}
                        value={this.state.phone}
                        keyboardType='number-pad'
                    />
                </View>
                <View style={styles.textInput} >
                    <Icon 
                        style={{padding: 7, alignItems:"center", justifyContent:"center"}}
                        name="home"
                        color="#030303"
                        size={30}
                    />
                    <TextInput 
                        style={styles.inputForm} 
                        placeholder="Your Address (City)" 
                        onChangeText={(address)=>this.setState({address})}
                        value={this.state.address}
                    />
                </View>
                <View style={styles.textInput} >
                    <Icon 
                        style={{padding: 7, alignItems:"center", justifyContent:"center"}}
                        name="mail"
                        color="#030303"
                        size={30}
                    />
                    <TextInput 
                        style={styles.inputForm} 
                        placeholder="Your Email Address" 
                        onChangeText={(email)=>this.setState({email})}
                        value={this.state.email}
                    />
                </View>

                {
                    this.state.isUserValid ?
                    <View></View>
                    :
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <View style={styles.containerError}>
                            <Text 
                                style={{fontSize:18, color: 'white', marginLeft:30, marginRight:40}}
                            >Username Tidak Valid</Text>
                            <TouchableOpacity onPress={this.props.infoButton}>
                                <Icon style={{marginRight: 8}} name='information-circle-outline' size={28} color='white' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.setState({isUserValid: true})}>
                                <Icon name='close-circle-outline' size={28} color='white' />
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                    
                }
                <View style={styles.textInput} >
                    <Icon 
                        style={{padding: 7, alignItems:"center", justifyContent:"center"}}
                        name="person-circle"
                        color="#030303"
                        size={30}
                    />
                    <TextInput 
                        style={styles.inputForm} 
                        placeholder="Create Your Username" 
                        onChangeText={(username)=>this.changeUsername(username)}
                        value={this.state.username}
                        maxLength={28}
                    />
                    <Icon style={{marginLeft: 15}} 
                        name='checkmark-circle-outline' size={30} color={this.state.validUsername ? "#59E25F" : "#ccc"}
                    />
                </View>

                {
                    this.state.isPassValid ?
                    <View></View>
                    :
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <View style={styles.containerError}>
                            <Text 
                                style={{fontSize:18, color: 'white', marginLeft:30, marginRight:40}}
                            >Password Tidak Valid</Text>
                            <TouchableOpacity onPress={this.props.infoPassButton}>
                                <Icon style={{marginRight: 8}} name='information-circle-outline' size={28} color='white' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.setState({isPassValid: true})}>
                                <Icon name='close-circle-outline' size={28} color='white' />
                            </TouchableOpacity>    
                        </View>
                    </View>
                    
                }
                <View style={styles.textInput} >
                    {
                        !this.state.validPassword ?
                            <Icon 
                                style={{padding: 7, alignItems:"center", justifyContent:"center"}}
                                name="lock-closed"
                                color="#030303"
                                size={30}
                            />
                        :
                            <Icon 
                                style={{padding: 7, alignItems:"center", justifyContent:"center"}}
                                name="checkmark-circle-outline"
                                color="#030303"
                                size={30}
                            />
                    }
                    
                    <TextInput 
                        style={styles.inputForm} 
                        placeholder="Create Your Password" 
                        onChangeText={(password)=>this.changePassword(password)}
                        value={this.state.password}
                        secureTextEntry={this.state.dataSecureEntry}
                    />
                    <TouchableOpacity 
                        style={{padding: 7, alignItems:"center", justifyContent:"center", marginLeft: 5}}
                        onPress={()=>this.showPassword()}
                    >
                        {
                            this.state.dataSecureEntry ? 
                            <Icon 
                                name="eye-outline"
                                color="#ccc"
                                size={30}
                            />
                            :
                            <Icon 
                                name="eye-off-outline"
                                color="#ccc"
                                size={35}
                            />
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.textInput} >
                    {
                        !this.state.donePassword ?
                        <Icon 
                            style={{padding: 7, alignItems:"center", justifyContent:"center"}}
                            name="lock-closed"
                            color="#030303"
                            size={30}
                        />
                        :
                        <Icon 
                            style={{padding: 7, alignItems:"center", justifyContent:"center"}}
                            name="checkmark-circle-outline"
                            color="#030303"
                            size={30}
                        />
                    }
                    <TextInput 
                        style={styles.inputForm} 
                        placeholder="Create Your Password" 
                        onChangeText={(repassword)=>this.checkPassword(repassword)}
                        value={this.state.repassword}
                        secureTextEntry={this.state.dataSecureRePassEntry}
                    />
                    <TouchableOpacity 
                        style={{padding: 7, alignItems:"center", justifyContent:"center", marginLeft: 5}}
                        onPress={()=>this.showRePassword()}
                    >
                        {
                            this.state.dataSecureRePassEntry ? 
                            <Icon 
                                name="eye-outline"
                                color="#ccc"
                                size={30}
                            />
                            :
                            <Icon 
                                name="eye-off-outline"
                                color="#ccc"
                                size={35}
                            />
                        }
                    </TouchableOpacity>
                </View>
                 
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => this.createUser()}
                >
                    <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const mapDispatchToProps=(dispatch)=>({
    setVerif: (code) => dispatch({
        type:'GET_VERIFCODE',
        verifCode: code,
    })
})

export default connect(null, mapDispatchToProps)(RegisterInput);

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
        marginVertical: 15,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start'
        
    },
    inputForm: {
        width: "70%",
        height: 50,
        fontSize: 18,
        color: "#030303",
    },
    button: {
        width: 350,
        height: 65,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#030303",
        marginTop: 10,
        marginBottom: 100,
    },
    btnText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    containerError:{
        backgroundColor: '#CB6C62',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 350,
        height: 50,
        borderRadius: 20,
        flexDirection: 'row'
    }
})