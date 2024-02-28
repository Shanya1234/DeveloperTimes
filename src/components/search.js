// Search.js
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div className="d-flex">
            <input
                type="text"
                placeholder="Search for news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-light" onClick={handleSearch}>
                            Search
                        </button>
        </div>
    );
};

export default Search;
