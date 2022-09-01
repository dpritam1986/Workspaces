import react,{Component} from 'react';
import './App.css';

class Clock extends Component {

state = {days : 0,
         hours : 0,
         minutes : 0,
         seconds : 0};

render() {

	return (

		<div>
			<div className="clockDays"> {this.state.days} days </div>
			<div className="clockHours"> {this.state.hours} hours </div>
			<div className="clockMinutes"> {this.state.minutes} minutes</div>
			<div className="clockSeconds"> {this.state.seconds} seconds</div>
		</div>

	);

}
}

export default Clock;