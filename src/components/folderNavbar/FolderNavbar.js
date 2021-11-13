import React from 'react';

const FolderNavbar = (props) => {

	return (
		<div className={props.variant}>
			{props.children}
			
		</div>
	);
};

export default FolderNavbar;