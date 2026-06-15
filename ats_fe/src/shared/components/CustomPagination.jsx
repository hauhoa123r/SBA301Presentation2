import { Pagination } from "react-bootstrap";

const CustomPagination = ({ totalPages, currentPage, onPageChange }) => {
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <>
      <Pagination>
        <Pagination.First disabled={currentPage === 1} />
        <Pagination.Prev disabled={currentPage === 1} />
        {items}
        <Pagination.Next disabled={currentPage === totalPages} />
        <Pagination.Last disabled={currentPage === totalPages} />
      </Pagination>
    </>
  );
};

export default CustomPagination;
