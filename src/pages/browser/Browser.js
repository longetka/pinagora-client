import React, {useState} from 'react';
import NavAppField from '../../components/navAppField/NavAppField';
import SearchBrowser from '../../components/searchBrowser/SearchBrowser';
import SuggestionsBrowser from '../../components/suggestionsBrowser/SuggestionsBrowser';

const Browser = () => {
    const [suggestions, setSuggestions] = useState([]);
    const handleChangeSuggestions = (suggestions) => {
        setSuggestions(suggestions);
    };

	return (
		<div className="browser">
            <div className="browser__wrapper">
                <SearchBrowser onChange={handleChangeSuggestions} />
                <SuggestionsBrowser suggestions={suggestions} />
            </div>
			<NavAppField />
		</div>
	);
};

export default Browser;
