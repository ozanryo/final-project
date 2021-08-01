import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';
import {TableList} from '../../components'
import './receipt.css'
import {connect} from 'react-redux'

class Receipt extends Component {
    constructor(props){
        super(props);
        this.state={
            sampleData: [{
                    transaksi: 'test',
                    tagihan: 2000,
                    metode: 'wallet',
                    status: false
                },{
                    transaksi: 'test1',
                    tagihan: 5000,
                    metode: 'wallet',
                    status: true
                },{
                    transaksi: 'test2',
                    tagihan: 10000,
                    metode: 'virtual-account',
                    status: false
                },{
                    transaksi: 'test3',
                    tagihan: 10000,
                    metode: 'virtual-account',
                    status: false
                },{
                    transaksi: 'test4',
                    tagihan: 10000,
                    metode: 'virtual-account',
                    status: false
                },{
                    transaksi: 'test4',
                    tagihan: 10000,
                    metode: 'virtual-account',
                    status: false
                },{
                    transaksi: 'test4',
                    tagihan: 10000,
                    metode: 'virtual-account',
                    status: false
                },{
                    transaksi: 'test4',
                    tagihan: 10000,
                    metode: 'virtual-account',
                    status: false
                },{
                    transaksi: 'test4',
                    tagihan: 10000,
                    metode: 'virtual-account',
                    status: false
                }
            ],
            offset: 0,
            perPage: 5,
            currentPage: 0,
            pageCount: 0,
            post: [],
            data: [],
            
        };

        this.handlePageClick = this.handlePageClick.bind(this)
    }

    componentDidMount(){
        this.postData()
    }

    postData(){
        const data = this.props.getReceipt;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        
        this.setState({pageCount: Math.ceil(data.length / this.state.perPage), post: slice})

    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
  
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.postData();
        });
  
    };

    render(){
        return(
            <div
                className="
                    flex justify-center
                    items-center flex-col
                    py-4
                "  
                style={{ height:'150vh', backgroundColor: '#A39D9C'}}
            >
                <div className='
                    flex items-center justify-center flex-col
                    bg-white rounded-3xl
                '
                style={{width:1350, height: 1150}}
                >
                    <div className='flex items-start justify-center mt-8 mb-4'>
                        <h1 className='text-7xl text-black'>Your Current Receipt</h1>
                    </div>

                    <div className='mt-4 mb-8'>
                        <React.Fragment>
                            <TableList data={this.state.post} />
                        </React.Fragment>
                    </div>

                    <ReactPaginate
                            previousLabel={"prev"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    getReceipt: state.order.order
})


export default connect(mapStateToProps)(Receipt);