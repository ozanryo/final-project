import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet,TouchableOpacity, ToastAndroid, ScrollView } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

class UpdateInput extends Component {
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
    
    updateProfile(){
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
            }else{
                ToastAndroid.show('Pastikan Password yang diinput samas ', ToastAndroid.SHORT)
            }
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

    getInfo=()=>{
        console.log('Password Tidak Sesuai')
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
                    this.state.isPassValid ?
                    <View></View>
                    :
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <View style={styles.containerError}>
                            <Text 
                                style={{fontSize:18, color: 'white', marginLeft:30, marginRight:40}}
                            >Password Tidak Valid</Text>
                            <TouchableOpacity onPress={()=>this.props.infoPassword()}>
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
                    onPress={() => this.updateProfile()}
                >
                    <Text style={styles.btnText}>Update Profile</Text>
                </TouchableOpacity>
            </ScrollView>
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

export default UpdateInput;