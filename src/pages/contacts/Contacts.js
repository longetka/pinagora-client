import React from 'react';
import NavAppField from '../../components/navAppField/NavAppField';
import SearchField from '../../components/searchField/SearchField';

const Contacts = () => {
	return (
		<div className="contacts page-wrapper">
			<div className="contacts__container">
				<div className="contacts_top">
					<SearchField />
				</div>
				
			</div>
			<NavAppField />
		</div>
	);
};

export default Contacts;