import React, {useState} from 'react';
import Calendar from 'react-calendar';
import PaperInfoBar from '../../components/paperInfoBar/PaperInfoBar';

const Paper = () => {
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'];
	const [date, setDate] = useState(new Date(Date.now()));
	const [nextDate, setNextDate] = useState(`${months[date.getMonth()+1]} ${date.getMonth() === 11 ? date.getFullYear() + 1 : date.getFullYear()}`);
	const [prevDate, setPrevDate] = useState(`${months[date.getMonth()-1]} ${date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear()}`);

	function handleLabelButtons (date) {
		setNextDate(`${months[date.getMonth()+1 >= months.length ?  - 0 : date.getMonth()+1]} ${date.getMonth() === 11 ? date.getFullYear() + 1 : date.getFullYear()}`);
		setPrevDate(`${months[date.getMonth() <= 0 ? months.length-1 : date.getMonth()-1]} ${date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear()}`);
		console.log(date.getMonth())
		return `${date.toLocaleString("en-US", {month: "long"})} ${date.getFullYear()}`;
	}

	return (
		<div className="page-wrapper paper">
			<PaperInfoBar 
				day={date.toLocaleString("en-US", {day: "2-digit"})}
				month={date.toLocaleString("en-US", {month: "long"})}
				year={date.toLocaleString("en-US", {year: "numeric"})}
			/>
			<div className="calendar">
				<h1 className="calendar__title">CALENDAR</h1>
				<Calendar 
					onChange={setDate}
					locale="en-US"
					value={date}
					showNeighboringMonth={true}
					navigationLabel={({date, label, locale, view}) => handleLabelButtons(date)}
					nextLabel={`${nextDate}`}
					prevLabel={`${prevDate}`}
					
				/>
			</div>
			
		</div>
	);
};

export default Paper;