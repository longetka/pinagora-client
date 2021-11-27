import React from 'react';

const InfoCardAddress = (props) => {
	return (
		<div className="infoCardAddress">
			<p className="infoCardAddress__address font-secondary">{props.address}</p>
			<div className="infoCardAddress__map"></div>
		</div>
	);
};

export default InfoCardAddress;