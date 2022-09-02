import react, { Component } from 'react';
import {Form , FormControl , Button } from 'react-bootstrap';
import Clock from './Clock'
import './App.css'


class App extends Component {
	
	state = {deadline : 'December 25,',
	          newDeadLine : ''};


 changeDeadline = ()=>{
    //this.setState({deadline: 'November 25, '});
   // console.log('state' , this.state);
    this.setState({deadline : this.state.newDeadLine});	
 }


	render() {
		return (
			<div className="App">
				<div> Countdown to <span className="CountDownValue-bold">{this.state.deadline} {new Date().getFullYear()}</span></div>
				<Clock
				deadline = {this.state.deadline +' '+ new Date().getFullYear() }
				/>
				<Form inline>
					<FormControl
					className="Deadline-input"
					 placeholder='new date' 
					 onChange={event => this.setState({newDeadLine : event.target.value})}
					/>
					<Button onClick={this.changeDeadline}>Submit </Button>
				</Form>
				
			</div>
      
		);
		
		 this.setState({deadline : 'December 25,' , newDeadLine : '' });
	}
}
export default App;