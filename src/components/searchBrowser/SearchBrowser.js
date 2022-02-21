import React, {useState} from 'react';
import axios from 'axios';
import searchIcon from '../../assets/images/icons/search-icon.png';

const SearchBrowser = ({onChange}) => {
    let [query, setQuery] = useState('');
    let [suggestions, setSuggestions] = useState([]);
    let [inputTimer, setInputTimer] = useState('');

    const handleInputChange = async (event) => {
        setQuery(event.target.value)
        clearTimeout(inputTimer);

        let timeout = setTimeout(
            () => {
                console.log("FETCHING DATA");
                axios
                    .get(`http://localhost:8080/autocomplete?q=${query}`)
                    .catch(e => console.log(e.message))
                    .then(response => {
                        console.log(response);
                        setSuggestions(response.data);
                        onChange(suggestions);
                    });
            }, 300
        );
        setInputTimer(timeout);
    };

    return (
        <div className="searchBrowser">	
            <input 
                className="searchBrowser__input" 
                type="text" 
                placeholder="Search"
                value={query}
                onChange={handleInputChange}
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
