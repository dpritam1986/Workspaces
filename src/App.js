import React, { Component } from 'react';

class RegularClass{}
class ComponentClass extends Component{}

const regClassInstance = new RegularClass();
const compClassInstance = new ComponentClass();

console.log('rgg --> ' + regClassInstance);
console.log('comp -->' + compClassInstance);


class App extends Component{
	
	render(){
		
		return (
			 <div>
			    <h1>Hello!</h1>
			    <p>My name is Pritam. I am full stack Java developer having 12+ years of experience. </p>
			     <p>I am always looking forward to working on challanging projects and thrive to knowledge. </p>
			  </div>
		)
	}
}

export default App;