import react, { Component } from 'react';

import './App.css'


class App extends Component {
	
	state = {deadline : 'December 25 ,',
	          newDeadLine : ''};


 changeDeadline = ()=>{
    this.setState({deadline: 'November 25, '});	
 }


	render() {
		return (
			<div className="App">
				<div> Countdown to {this.state.deadline} {new Date().getFullYear()}</div>
				<div>
					<div className="clockDays"> 14 days </div>
					<div className="clockHours"> 30 hours </div>
					<div className="clockMinutes"> 15 minutes</div>
					<div className="clockSeconds"> 20 seconds</div>
				</div>
				<div>
					<input
					 placeholder='new date' 
					 onChange={event => console.log('event' , event.target.value)}
					/>
					<button onClick={this.changeDeadline}>Submit </button>
				</div>
			</div>

		);
	}
}
export default App;