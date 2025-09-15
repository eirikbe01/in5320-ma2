

function Pagination({ currentPage, onPageChange }) {


    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        onPageChange(currentPage + 1);
    };

    return(
        <div>
            <button onClick={handlePrevious}>
                Previous
            </button>

            <p>Page {currentPage}</p>

            <button onClick={handleNext}>
                Next
            </button>
        </div>
    );
}

export default Pagination;