import React, { Component } from 'react';




class App extends Component{
	
	constructor(){
		super();
		this.state ={ displayBio : false};
	}
	
	render(){
		
		let bio = this.state.displayBio ? ( 
			     <div> 
			     <p> I live in Sanford Florida</p>
			     <p> My favorite language is Javascript and Java , and React as front end</p>
			     <p>Coding is my passion</p>
			     </div>
			     ) : null;
		
		
		return (
			 <div>
			    <h1>Hello!</h1>
			    <p>My name is Pritam. I am full stack Java developer having 12+ years of experience. </p>
			     <p>I am always looking forward to working on challanging projects and thrive to knowledge. </p>
                 {bio}
			  </div>
		)
	}
}

export default App;