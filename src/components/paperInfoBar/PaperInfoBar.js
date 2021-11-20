import React from 'react';

const PaperInfoBar = (props) => {
	return (
		<div className="paperInfoBar">
			<div className="paperInfoBar__dateBar">
				<p className="paperInfoBar__day">{props.day}</p>
				<p className="paperInfoBar__month">{props.month}</p>
				<p className="paperInfoBar__year">{props.year}</p>
			</div>
			<div className="paperInfoBar__todo"></div>
			<div className="paperInfoBar__schedule"></div>
		</div>
	);
};

export default PaperInfoBar;