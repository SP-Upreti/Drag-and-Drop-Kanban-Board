import React from 'react';

const SearchBar = ({ searchQuery, onSearch }) => {
    return (
        <div className="my-5 flex justify-between items-center gap-10">
            <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="p-2 border rounded w-[25rem]"
            />
        </div>
    );
};

export default SearchBar;
