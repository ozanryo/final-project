import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {LoginInput} from '../../components/input'
import Icon from "react-native-vector-icons/Ionicons"
import {ModalLoading} from '../../components/modal'

class Login extends Component {
    constructor(props){
        super(props);
        this.state={}
    }

    gotoHome=()=>{
        this.props.navigation.navigate('HomeNav');
    }
    render(){
        return(
            <View style={styles.main}>
                <Text style={styles.title}>Login</Text>
                <LoginInput login={this.gotoHome}/>
                <View style={styles.registrationDirection}>
                    <Text style={styles.registrationText}>Don't have an account ? </Text>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Register')}>
                        <Text style={styles.registrationLink}>Register Now</Text>
                    </TouchableOpacity>
                </View> 
                <ModalLoading modalShow={false} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 75
        ,
        textAlign: 'center',
        fontWeight:'900',
        marginBottom: 20
    }, 
    registrationText: {
        fontSize: 15
    },
    registrationLink: {
        color: "red",
        marginRight: 5,
        marginLeft: 5,
        fontSize: 15
    },
    registrationDirection:{
        flexDirection: "row",
        marginTop: 15,
    }
})

export default Login;