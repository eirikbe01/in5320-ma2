import { useState } from 'react';

function Search({value, onSearch}) {

    const [searchTerm, setSearchTerm] = useState("");

    const onChange = (event) => {
        setSearchTerm(event.target.value);
    }
    const submit = () => {
        onSearch(searchTerm);
        setSearchTerm("");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            onSearch(searchTerm);
            setSearchTerm("");
        }
    }

    return(
        <div>
            <input 
                type="text" 
                value={searchTerm}
                placeholder="Search..."
                onChange={onChange}
                onKeyDown={(e) => handleKeyDown(e)}>
            </input>
            <button
                type="button"
                onClick={submit}
                >
                Go!
            </button>
        </div>

    );
}


export default Search;