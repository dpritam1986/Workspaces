import react , {Component} from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';


class Socialprofile extends Component{
	
	render(){
		const{image , link} = this.props.socialprofileobj;
		
		return(
			
			<div style = {{display : 'inline-block' , margin :10}}>
			
			 
			  <a href={link}>  <img src={image} alt ='link to profile'  style={{width : 20, height:20}} /> </a> 
			
			
			</div>)
	}
}



class SocialProfiles extends Component{
	
	
	render(){
		
		return(
			<div> 
			
			 <h3> Connect with me!</h3>
			 
			 <div>
			 
			  {
				
			  SOCIAL_PROFILES.map(SOCIAL_PROFILE=> {
				
			  return(<Socialprofile key={SOCIAL_PROFILE.id} socialprofileobj={SOCIAL_PROFILE} />);
				
			   })
				
		      }
			 
			 </div>
			</div>
			
		)
		
	}
	
	
}


export default SocialProfiles;

