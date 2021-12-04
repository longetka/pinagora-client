import React from 'react';
import alphabet from './alphabet';

const ContactsNavigate = () => {
	const links = alphabet.map((value, index) => {
		return (
			<li key={index}>
				<a className="contactsNavigate__link" href={`#${value}`}>{value}</a>
			</li>
		)
	});

	return (
		<div className="contactsNavigate">
			<ul className="contactsNavigate__list">
				{links}
			</ul>
		</div>
	)
};

export default ContactsNavigate;