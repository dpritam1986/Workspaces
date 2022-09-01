import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Profile from './assets/profile.png';
import Title from './Title.js';




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
			    <img src={Profile} alt='profile' className="profile"/> 
			    <h1>Hello!</h1>
			    <p>My name is Pritam. </p>
			    <Title />
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
			     
			     <hr />
			     
			     <Projects />
			     <hr/>
			     
			     <div style={{ marginTop :20 , textAlign : 'center' }}>
			     <SocialProfiles />
			     </div>
			  </div>
		)
	}
}

export default App;