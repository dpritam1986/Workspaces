import React, {Component} from 'react';
import './styles/style.css';

class Gallery extends Component{
	
	
	state ={ playingurl : '',
	 audio : null,
	 playing :false
	 };
	
	
	playAudio(preview_url){
		let audio = new Audio(preview_url);
		if(!this.state.playing){
			audio.play();
			this.setState({
				playing : true,
				playingurl : preview_url,
				audio
			})
		}else{
			
			
			if(this.state.playingurl === preview_url){
				this.state.audio.pause();
				this.setState({
				playing : false,
			})
			}else{
				this.state.audio.pause();
				audio.play();
				this.setState({
				playing : true,
				playingurl : preview_url,
				audio
			})
				
			}
			
			
			
			
		}
		
	}
	
	render(){
		
		
		
		const {tracks} = this.props;
		
		return (
			
			<div>
			{
				tracks.map((track , k) =>{
					console.log('track' , track);
				const trackImg = track.album.images[0].url;
				return(	
					<div key={k} 
					 className="track"
					 onClick={() => this.playAudio(track.preview_url)}
					 >
					 <img
					 alt="track"
					 src={trackImg}
					 className="track-image"
					  />
					  <div className="track-play">
						   <div className="track-play-inner">
						  
						   {
							 this.state.playingurl === track.preview_url
							 ?<span>| |</span>
							 :<span> &#9654;</span>
							 
						   }
						  </div>
					  </div>
					  <p className="track-text">
					   {track.name}
					   </p>
					</div>)
					
				}
				
			)
			}
			
			</div>
			
		);
	}
	
}

export default Gallery;