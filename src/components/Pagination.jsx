import React from "react";

const Pagination = ({ totalPage, setCurrentPage, moviePerPage, loading }) => {
  const handleClick = (pageNumber) => {
    if (!loading) {
      setCurrentPage(pageNumber); 
    }
  };

  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(
      <button className="button"
        key={i}
        onClick={() => handleClick(i)}
        disabled={loading}  
      >
        {i}
      </button>
    );
  }

  return (
    <div>
      <nav>
        <ul className="pagination">{pages}</ul>
      </nav>
    </div>
  );
};

export default Pagination;
