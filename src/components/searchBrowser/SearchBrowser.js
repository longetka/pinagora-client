import React from 'react';
import searchIcon from '../../assets/images/icons/search-icon.png';

const SearchBrowser = () => {
    return (
        <div className="searchBrowser">	
            <input 
                className="searchBrowser__input" 
                type="text" 
                name="search"
                id="search" 
            />
            <img 
                src={searchIcon}
                alt="" 
                className="searchBrowser__image"
            />
        </div>

    );
};

export default SearchBrowser;
