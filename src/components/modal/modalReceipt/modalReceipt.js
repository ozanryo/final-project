import React, { Component } from 'react'
import { View, Text, 
        StyleSheet,TouchableOpacity,
        Modal
} from "react-native"

import Icon from 'react-native-vector-icons/Ionicons'

class ModalReceipt extends Component {
    render(){
        return(
            <Modal
                animationType='slide'
                transparent={true}
                visible={this.props.modalShow}
            >
                <View style={styles.modalLayout}>
                    <View style={styles.layout}>
                        <View style={styles.closeBtnPosition}>
                            <TouchableOpacity style={styles.closePicBtn} onPress={this.props.closeShow}>
                                <Icon name='close' size={20} color='white' />
                            </TouchableOpacity>
                        </View>
                        <View style={{marginHorizontal: 10, marginTop:40, marginBottom: 20}}>
                            <Text style={styles.modalContent}>
                                Tagihan : {this.props.modalContent.tagihan}
                            </Text>
                            <Text style={styles.modalContent}>
                                Provider : {this.props.modalContent.provider}
                            </Text>
                            <Text style={styles.modalContent}>
                                Phone : {this.props.modalContent.phone}
                            </Text>
                        </View>
                        
                    </View>
                </View>
            </Modal>
        )
    }
}

export default ModalReceipt;

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
        width: "85%",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 15
    },
    closePicBtn:{
        width: 30, 
        height: 30, 
        borderRadius: 30,
        backgroundColor: '#D92222',
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeBtnPosition:{
        flex: 1,
        alignItems: 'flex-end',
        position: 'absolute',
        top: 20,
        bottom: 20,
        right: 20,
        left: 20,
        elevation: 0,
    },
    modalContent:{
        fontSize: 21,
        marginHorizontal: 10,
        marginVertical: 5,
        textAlign: 'left'
    }
})

