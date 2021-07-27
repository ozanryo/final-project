import React, { Component } from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Modal, TextInput, ActivityIndicator } from "react-native"
import Icon from 'react-native-vector-icons/EvilIcons'
import AnimatedLoader from 'react-native-animated-loader'

class ModalLoading extends Component {
    render(){
        return(
            <Modal
                animationType='slide'
                transparent={true}
                visible={this.props.modalShow}
            >
                <View style={styles.modalLayout}>
                    <View style={styles.layout}>
                        <ActivityIndicator animating={true} size={90} color='black' />
                        
                        <Text style={styles.textModal}>Loading </Text>
                    </View>
                </View>
            </Modal>
        )
    }
}

export default ModalLoading;

const styles = StyleSheet.create({
    modalLayout:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"rgba(1,1,1,0.8)",
        flex: 1
    },
    layout:{
        flexDirection: "column",
        paddingVertical: 15,
        marginHorizontal: 5,
        width: 260,
        height: 260,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 35
    },
    textModal:{
        fontSize:35,
        textAlign:'center',
        marginTop: 15,
        marginBottom: 5,
        fontWeight: '900',
    }
})