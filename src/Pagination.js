import ReactPaginate from 'react-paginate';
import React from 'react'
// import {Pagination} from 'react-bootstrap'

const PaginationCom = ({getSelectedPage ,total_pages}) => {
    const handlePageClick =(id)=>{
        getSelectedPage(id.selected + 1)
    }

    const pageCount = total_pages;
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName={'pagination justify-content-center p-3'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
  )
}

export default PaginationCom
