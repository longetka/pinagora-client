import React from 'react';
import Calendar from 'react-calendar';

const Paper = () => {
	return (
		<div className="page-wrapper">
			<Calendar 
				showNeighboringMonth={true}
			/>
		</div>
	);
};

export default Paper;