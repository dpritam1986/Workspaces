import React, {Component} from 'react';
import './styles/style.css';

class Profile extends Component{
	
	
	
	
	render(){
		
      let artist = {name : '' , 
      followers : {total : ''} , 
      images : [{url : ''}],
      genres :[]
            };
	  artist = this.props.children[1] !==null ?  this.props.children[1] :artist;
	 
		
		return (
			<div className ='profile'>
			<img 
			 alt='Profile'
			 className ='profile-img'
			 src={artist.images[0].url}
			
			/>
			
			 <div className='profile-info'>
			 <div className='profile-name'>{artist.name}</div>
		     <div className='profile-followers'>
		       {artist.followers.total} followers
		     </div>
		     <div className='profile-generes'>
		     {
		       artist.genres.map( (genere ,k ) => { 
			    genere=genere!==artist.genres[artist.genres.length-1]
			                 ?`${genere},` 
			                 :`& ${genere}`;
			     
			     return(<span key={k}> {genere} </span>)
			 
		        })
		     }
		     </div>
		  
		   </div>
		  
		  </div>
		);
	}
}


export default Profile;