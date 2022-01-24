import React from 'react';
import NavAppField from '../../components/navAppField/NavAppField';
import { YMaps, Map } from 'react-yandex-maps';

const MapPage = () => {
	

	return (
		<div className="map">
			<YMaps>
				<div>
					<Map 
						defaultState={{ center: [55.75, 37.57], zoom: 10 }} 
						width="99vw" 
						height="89vh"
						modules={["package.full"]}
					/>
				</div>
			</YMaps>
			<NavAppField />
		</div>
	);
};

export default MapPage;