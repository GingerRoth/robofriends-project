import React from 'react';

const SearchBox = ({searchfield, SearchChange}) => {
    return(
        <div className="pa2">
            <input type="search" 
            placeholder="Find Robot" 
            className="pa3 ba b--green bg-lightest-blue" 
            onChange={SearchChange}  />
        </div>
        
    );
}

export default SearchBox;