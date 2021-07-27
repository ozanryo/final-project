import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {UpdateInput} from '../../components/input'
import {ModalUpdate} from '../../components/modal'

class Update extends Component {
    constructor(props){
        super(props);
        this.state={
            modalPassword: false,
            message: '',
        }
    }

    infoPassword=()=>{
        this.setState({
            modalPassword: true,
            message: 
            "Password must contain at least one digit [0-9]." + 
            "\n\nPassword must contain at least one digit [0-9]." + 
            "\n\nPassword must contain at least one uppercase Latin character [A-Z]" + 
            "\n\nPassword must contain at least one special character like ! @ # & ( )" + 
            "\n\nPassword must contain a length of at least 8 characters "
        })
        console.log('Sudah di klik')
    }

    closePasswordInfo(){
        this.setState({modalPassword: false, message: ""})
    }

    goBack=()=>{
        this.props.navigation.navigate('Profile');
    }

    render(){
        return(
            <View style={styles.main}>
                <View style={styles.titleLayout}>
                    <Text style={styles.title}>Update Your Profile</Text>
                </View>
                <UpdateInput 
                    infoPassword={this.infoPassword}
                    sendBack={this.goBack}
                />
                <ModalUpdate 
                    modalShow={this.state.modalPassword}
                    modalContent={this.state.message}
                    closeShow={()=>this.closePasswordInfo()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    titleLayout:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 15
    },
    title:{
        fontSize: 55,
        fontWeight: '900',
        textAlign: 'center'
    }
})

export default Update;