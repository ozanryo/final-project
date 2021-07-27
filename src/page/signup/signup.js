import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import {RegisterInput} from '../../components/input'
import {ModalSignup, ModalVerification} from '../../components/modal'
import {connect} from 'react-redux'

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            modalUsername: false,
            message: "",
            modalPassword: false,
        }
    }

    infoUsername(){
        this.setState({
            modalUsername: true,
            message: 
            "Username may consists of alphanumeric characters, lowercase, or uppercase." + 
            "\n\nUsername allowed of the dot (.), underscore (_), and hyphen (-)." + 
            "\n\nThe dot (.), underscore (_), or hyphen (-) must not be the first or last character." + 
            "\n\nThe dot (.), underscore (_), or hyphen (-) does not appear consecutively, e.g., java..regex" + 
            "\n\nThe number of characters must be between 5 to 20."
        })
    }

    closeUsernameInfo(){
        this.setState({modalUsername: false, message: ""})
    }

    infoPassword(){
        this.setState({
            modalPassword: true,
            message: 
            "Password must contain at least one digit [0-9]." + 
            "\n\nPassword must contain at least one digit [0-9]." + 
            "\n\nPassword must contain at least one uppercase Latin character [A-Z]" + 
            "\n\nPassword must contain at least one special character like ! @ # & ( )" + 
            "\n\nPassword must contain a length of at least 8 characters "
        })
    }

    closePasswordInfo(){
        this.setState({modalPassword: false, message: ""})
    }

    goBack=()=>{
        this.props.navigation.navigate('Login');
    }

    render(){
        return(
            <View style={styles.main}>
                <View style={styles.titleLayout}>
                    <Text style={styles.titleText}>Register User</Text>
                </View>
                <RegisterInput 
                    infoButton={()=>this.infoUsername()} 
                    infoPassButton={()=>this.infoPassword()}
                    sendBack={this.goBack}
                />
                <ModalSignup 
                    modalShow={this.state.modalUsername} 
                    modalContent={this.state.message}
                    closeShow={()=>this.closeUsernameInfo()}
                />
                <ModalSignup 
                    modalShow={this.state.modalPassword} 
                    modalContent={this.state.message}
                    closeShow={()=>this.closePasswordInfo()}
                />
                <ModalVerification 
                    modalShow={this.props.getVerifStat}
                    goBack={this.goBack}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    getVerifStat: state.verification.verifStat
})

export default connect(mapStateToProps)(Register);

const styles = StyleSheet.create({
    main:{
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    titleLayout:{
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText:{
        fontSize: 50
    }
})

