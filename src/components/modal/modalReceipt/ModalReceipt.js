import React, { Component } from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import backIcon from "../../../assets/orderticon/backward.png"


class ModalReceipt extends Component {
    render(){
        return(
            <Modal 
                isOpen={this.props.modalShow}
                onRequestClose={this.props.closeModal}
                ariaHideApp={false}
                style={{
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    
                  }}
            >
                <div 
                    className='flex flex-col items-start justify-center pl-24'
                    style={{
                        paddingVertical: 15,
                        marginHorizontal: 5,
                        width: '85%',
                        backgroundColor: "white",
                        borderRadius: 15
                }}>
                    <div className='flex flex-row items-start justify-center'>
                        <div 
                            className='flex items-center justify-start mb-15' 
                            style={{width:'90%',}}
                            onClick={()=>this.props.closeModal}
                        >
                                <img alt='Back Icon' width='50' src={backIcon} />
                        </div>
                        <div className='text-9xl mt-24 mb-12 ml-10'>Transaction Receipt</div>
                    </div>
                    
                    <div className='flex flex-row items-start justify-center'>
                        <div className='text-7xl mt-24 mb-12 ml-10'>Phone : </div>
                    </div>
                    <div className='flex flex-row items-start justify-center'>
                        <div className='text-7xl mt-24 mb-12 ml-10'>Provider : </div>
                    </div>
                    <div className='flex flex-row items-start justify-center'>
                        <div className='text-7xl mt-24 mb-12 ml-10'>Tagihan : </div>
                    </div>
                    <div className='flex flex-row items-start justify-center'>
                        <div className='text-7xl mt-24 mb-12 ml-10'>Metode : </div>
                    </div>
                    <div className='text-7xl mt-24 mb-12 ml-10'>Close</div>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({

})


export default connect(mapStateToProps)(ModalReceipt);