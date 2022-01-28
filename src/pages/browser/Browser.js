import React from 'react';
import NavAppField from '../../components/navAppField/NavAppField';
import searchIcon from '../../assets/images/icons/search-icon.png';
import SearchBrowser from '../../components/searchBrowser/SearchBrowser';

const Browser = () => {
	return (
		<div className="browser">
            <div className="browser__wrapper">
                <SearchBrowser />
            </div>
			<NavAppField />
		</div>
	);
};

export default Browser;
