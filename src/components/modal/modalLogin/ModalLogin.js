import React, { Component } from 'react'
import Modal from 'react-modal'


export default class ModalLogin extends Component {
    render(){
        return(
            <Modal 
                isOpen={this.props.modalShow}
                onRequestClose={this.props.closeModal}
                style={{
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    
                  }}
            >
                <div style={{
                    flexDirection: "column",
                    paddingVertical: 15,
                    marginHorizontal: 5,
                    width: '85%',
                    justifyContent:"center",
                    alignItems: "center",
                    backgroundColor: "black",
                    borderRadius: 15
                }}>
                    Message : 
                </div>
            </Modal>
        )
    }
}