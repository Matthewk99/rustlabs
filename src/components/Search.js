import React from 'react';

const Search = () => {
    return (
        <div id="searchb">
            <form action="/" method="get">
                <label htmlFor="search-bar">
                    <span className="visually-hidden"></span>
                </label>
                <input
                    type="text"
                    id="search-bar"
                    placeholder="Search"
                    name="s" 
                />
                <button id="search-bar" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search;