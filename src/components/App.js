import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Profile from '../assets/profile.png';
import Title from './Title.js';




class App extends Component {

	state = { displayBio: false };
	/*constructor(){
		super();
		this.state ={ displayBio : false};
		this.toggleBio = this.toggleBio.bind(this);
		
	}*/


	toggleBio = () => {
		this.setState({ displayBio: !this.state.displayBio });
		//this.state.displayBio = !this.state.displayBio;
	}

	render() {

		return (
			<div>
				<img src={Profile} alt='profile' className="profile" />
				<h1>Hello!</h1>
				<p>My name is Pritam. </p>
				<Title />
				<p>I am always looking forward to working on challanging projects and thrive to knowledge. </p>

				{this.state.displayBio ? (
					<div>
						<p>• Good exposure to Banking Finance and PCI DSS  payment card industry and Data security domain along with Logistic and Healthcare domains.</p>
						<p>• Innovate, Design and develop web applications for Banking, Cards & Payments & Logistic industries.</p>
						<p>• Design and develop applications various application and webservers like Tomcat/Jboss/Webogic</p>
						<p>• Experience on frameworks like Struts, Spring, Hibernate, Apache, Angular JS, JQuery.</p>
						<p>• Thorough understanding of Object Oriented Programming, Core and J2EE Design Patterns, Test Driven Development and various web technologies.</p>
						<p>• Knowledge of SpringBoot , RestApi MySql , Microservice and  AWS cloud technologies.</p>
						<p>• Mentored  and led team of size varying from 4 to 8 developers</p>
						<p>• Capable of working under tight deadline projects and delivering effective results.</p>
						<p>• Excellent Inter personal skills and a good team player</p>
						<p>• Quick learner</p>
						<p>• Key tech stack - <b>Java, J2EE, SQL, HTML, JavaScript, jQuery ,CSS, SpringBoot,Microservices, RestApi, MySql, GIT Hub, React JS , Spring , Spring MVC, </b> JSF, JSP, Hibernate  </p>
						<button onClick={this.toggleBio}> Show Less  </button>
					</div>
				) : (<div>
					<button onClick={this.toggleBio}>
						Read More
					</button>
				</div>)}

				<hr />

				<Projects />
				<hr />

				<div style={{ marginTop: 20, textAlign: 'center' }}>
					<SocialProfiles />
				</div>
			</div>
		)
	}
}

export default App;