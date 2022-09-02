import react,{Component} from 'react';
import './App.css';

class Clock extends Component {

state = {
	     days : 0,
         hours : 0,
         minutes : 0,
         seconds : 0
         };
         
 componentWillMount(){
	this.getTimeUntil(this.props.deadline)
}  


componentDidMount(){
	setInterval( () => this.getTimeUntil(this.props.deadline) , 1000);
}
         
 getTimeUntil (deadline){
	
	const time = Date.parse(deadline) - Date.parse(new Date());
	
	console.log('time' , time);
	
	const seconds = Math.floor((time / 1000) % 60);
	
	const minutes =  Math.floor((time / 1000 / 60) % 60);
	
	const hours =  Math.floor((time / 1000* 60 * 60) % 24);
	
	const days =  Math.floor(time / (1000* 60 * 60 * 24));
	
	console.log('sec' , seconds);
	console.log('min' , minutes);
	console.log('hours' , hours);
	console.log('days' , days);
	
	this.setState({days,hours,minutes,seconds});
}        




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