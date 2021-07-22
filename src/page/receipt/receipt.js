import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';
import {TableList} from '../../components'
import './receipt.css'

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
                }],
            offset: 0,
            perPage: 2,
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
        const data = this.state.sampleData;
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
        console.log(this.state.post)
        return(
            <div
                className="
                    flex justify-center
                    items-center flex-col
                    py-4
                "  
                style={{ height:'90vh', backgroundColor: '#A39D9C'}}
            >
                <div className='flex items-start justify-center my-10'>
                    <h1 className='text-8xl text-white'>Your Current Receipt</h1>
                </div>
                {/* <TableList data={this.state.sampleData}/> */}

                <React.Fragment>
                    <TableList data={this.state.post} />
                </React.Fragment>

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
        )
    }
}

export default Receipt;