import React from 'react';
import AddContactButton from '../../components/buttons/addContactButton/AddContactButton';
import ContactInfoCard from '../../components/contactInfoCard/ContactInfoCard';
import ContactLink from '../../components/contactLink/ContactLink';
import ContactsNavigate from '../../components/contactsNavigate/ContactsNavigate';
import NavAppField from '../../components/navAppField/NavAppField';
import SearchField from '../../components/searchField/SearchField';

const Contacts = () => {
	return (
		<div className="contacts">
			<div className="contacts__wrapper page-wrapper">
				<div className="contacts__container">
					<div className="contacts__button">
						<AddContactButton />
					</div>
					<div className="contacts__search">
						<SearchField />
					</div>
					<div className="contacts__list">
						<ContactLink avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80" name="Mary"/>
					</div>
					<div className="contacts__navigate">
						<ContactsNavigate />
					</div>
					<div className="contacts__info">
						<ContactInfoCard contactName="Mary"/>
					</div>
				</div>
			</div>
			<NavAppField />
		</div>
	);
};

export default Contacts;