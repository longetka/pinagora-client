import React from 'react';

const OptionButton = (props) => {
	const selected = (event) => {
		const target = event.currentTarget;
		const childrens = target.offsetParent.children;
		// console.log(target.offsetParent.children.classList.contains('selected'))
		for (let el of childrens) {
			// console.log(el);
			if (el.classList.contains('selected')) {
				el.classList.remove('selected');
				console.log('selecte remove');
			} else {
				target.classList.add('selected');
				console.log('select added');
			}
		}
	}

	return (
		<div className="optionButton__container" onClick={selected}>
			<input 
				className="optionButton font-secondary"
				type="button" 
				name={props.name} 
				value={props.value} 
			/>
		</div>
	);
};

export default OptionButton;