import react, { Component } from 'react';
import Clock from './Clock'
import './App.css'


class App extends Component {
	
	state = {deadline : 'December 25 ,',
	          newDeadLine : ''};


 changeDeadline = ()=>{
    //this.setState({deadline: 'November 25, '});
   // console.log('state' , this.state);
    this.setState({deadline : this.state.newDeadLine});	
 }


	render() {
		return (
			<div className="App">
				<div> Countdown to {this.state.deadline} {new Date().getFullYear()}</div>
				<Clock/>
				<div>
					<input
					 placeholder='new date' 
					 onChange={event => this.setState({newDeadLine : event.target.value})}
					/>
					<button onClick={this.changeDeadline}>Submit </button>
				</div>
			</div>

		);
	}
}
export default App;