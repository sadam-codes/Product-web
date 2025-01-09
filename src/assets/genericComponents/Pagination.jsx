import { useState } from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";

function PaginationComponent({ totalNumber, page, pageChange }) {
  const [active, setActive] = useState(page || 0);

  const handlePageClick = (data) => {
    const { selected } = data;
    pageChange(selected + 1);
    setActive(selected);
  };
  return (
    <div className="pagination-modify">
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        forcePage={active}
        breakClassName="page-item"
        pageCount={totalNumber}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

PaginationComponent.propTypes = {
  totalNumber: PropTypes.number.isRequired,
  pageChange: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};

export default PaginationComponent;
