import React, { Component } from 'react';




class App extends Component{
	
	state = {displayBio : false};
	/*constructor(){
		super();
		this.state ={ displayBio : false};
		this.toggleBio = this.toggleBio.bind(this);
		
	}*/
	
	
toggleBio =()=>{
	this.setState({displayBio : !this.state.displayBio});
	//this.state.displayBio = !this.state.displayBio;
}
	
	render(){
		
		return (
			 <div>
			    <h1>Hello!</h1>
			    <p>My name is Pritam. I am full stack Java developer having 12+ years of experience. </p>
			     <p>I am always looking forward to working on challanging projects and thrive to knowledge. </p>
                
                 { this.state.displayBio ? ( 
			     <div> 
			     <p> I live in Sanford Florida</p>
			     <p> My favorite language is Javascript and Java , and React as front end</p>
			     <p>Coding is my passion</p>
			     <button onClick ={this.toggleBio}> Show Less  </button>
			     </div>
			     ) : (<div>
			         <button onClick={this.toggleBio}>
			          Read More
			         </button>
			          </div>)}
			     
			  </div>
		)
	}
}

export default App;