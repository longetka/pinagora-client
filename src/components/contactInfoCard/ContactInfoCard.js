import React from 'react';
import InteractionButton from '../buttons/interactionButton/InteractionButton';
import InfoCardAddress from '../infoCardAddress/InfoCardAddress';
import InfoCardField from '../infoCardField/InfoCardField';
import interacactionButtonsData from './interactionButtonsData';

const ContactInfoCard = (props) => {
	const renderButton = interacactionButtonsData.map((value, index) => {
		return <InteractionButton img={value.img} name={value.name} key={index}/>
	});

	return (
		<div className="contactInfoCard">
			<div className="contactInfoCard__wrapper">
				<div className="contactInfoCard__user">
					<img 
						className="contactInfoCard__userAvatar" 
						src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80" 
						alt="User avatar" 
						width="86px"
						height="86px"
					/>
					<h3 className="contactInfoCard__contactName">{props.contactName}</h3>
				</div>
				<div className="contactInfoCard__interactionButtons">
					{renderButton}
				</div>
				<div className="contactInfoCard__info">
					<InfoCardField label="mobile" data="89991005510" />
					<InfoCardField label="home" data="89991101530" />
					<InfoCardField label="email" data="example@example.com" />
					<InfoCardAddress address="Altai krai, Biysk, Gorkogo street, 69"/>
				</div>
			</div>
			
		</div>
	);
};

export default ContactInfoCard;