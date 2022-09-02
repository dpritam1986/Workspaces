import react from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';


const Socialprofile = props => {

	//render(){
	const { image, link } = props.socialprofileobj;

	return (

		<div style={{ display: 'inline-block', margin: 10 }}>


			<a href={link} target="_blank">  <img src={image} alt='link to profile' style={{ width: 20, height: 20 }}/> </a>


		</div>)
	//}
}



const SocialProfiles = () => (


	//	render(){

	//return(
	<div>

		<h3> Connect with me!</h3>

		<div>

			{

				SOCIAL_PROFILES.map(SOCIAL_PROFILE => {

					return (<Socialprofile key={SOCIAL_PROFILE.id} socialprofileobj={SOCIAL_PROFILE} />);

				})

			}

		</div>
	</div>

)

//}


//}


export default SocialProfiles;

