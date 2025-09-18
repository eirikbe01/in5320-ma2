

function PageSize({ onPageSizeChange }) {
    const options = [10, 20, 50];

    const handleChange = (event) => {
        onPageSizeChange(Number(event.target.value));
    }
    return(
        <div className="pageSizeContainer">
            <p>Results per page:</p>
            <select className="select" onChange={handleChange}>
                {options.map((opt) => {
                    return <option key={opt} value={opt}>{opt}</option>
                })}
            </select>
        </div>
    );
}


export default PageSize;