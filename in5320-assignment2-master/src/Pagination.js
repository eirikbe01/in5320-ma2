

function Pagination({ currentPage, onPageChange, totalPages }) {


    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        onPageChange(currentPage + 1);
    };

    return(
        <div className="pagination">
            {currentPage > 1 && 
                <button className="paginationBtns" onClick={handlePrevious}>
                👈
                </button>
            }

            <p>Page {currentPage} of {totalPages}</p>

            <button className="paginationBtns" onClick={handleNext}>
                👉
            </button>
        </div>
    );
}

export default Pagination;