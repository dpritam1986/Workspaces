import react, { Component } from 'react';
import './styles/style.css';
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import Profile from './Profile'
import Gallery from './Gallery';

class App extends Component {

	state = { query: '', 
	artist: null ,
	tracks:[] };


	search() {
		console.log('search string ', this.state);
		const BASE_URL = 'https://api.spotify.com/v1/search?';
		let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
		const ALBUM_URL =  'https://api.spotify.com/v1/artists';
		let token = 'Bearer BQCZXzu88GD72-w673CyHBy0f5yyggP5GTrw1jwTIdsPkQGPNdRCp4FWGaqH1qpPjVDuoSsYgUrZZtBvlgfY_8a9E9Rn_NK8nJYQx2e2YlmqKHMnjhrIoSu4W2S6bWEU2MkrYNCpftKj4PvNdA8X4D4A7x0StRK4HTxUlKLFmvdvzxjJHG-n0xEjsN2cmwI';

		let xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", FETCH_URL, false);
		xmlHttp.setRequestHeader("Authorization", token );

		xmlHttp.send(null);

		let jsonResponse = JSON.parse(xmlHttp.responseText);

		console.log('Fetch_url ', FETCH_URL);

		/*	fetch(FETCH_URL , {
				method : 'GET'
				
			}).then(xmlHttp => xmlHttp.json).then(json => {
				
				const artist =json.artists.items[0];
				console.log('artist' , artist);
				this.setState({artist});
			});*/

		const artist = jsonResponse.artists.items[0];
		console.log('artist', this.state.artist);


        FETCH_URL =`${ALBUM_URL}/${artist.id}/top-tracks?country=US&`;

        var xmlHttpAlbum = new XMLHttpRequest();
		xmlHttpAlbum.open("GET", FETCH_URL, false);
		xmlHttpAlbum.setRequestHeader("Authorization", token);

		xmlHttpAlbum.send(null);

		var jsonResponseAlbum = JSON.parse(xmlHttpAlbum.responseText);
		
		console.log('album', jsonResponseAlbum);
		
		const {tracks} = jsonResponseAlbum;
		
		this.setState({tracks});
		this.setState({ artist: artist });
	}

	render() {

		return (
			<div className="App">

				<div className='App-title'>Music Master</div>

				<FormGroup>
					<InputGroup>

						<FormControl
							type='text'
							placeholder='Search for an Artist'
							value={this.state.query}
							onChange={event => { this.setState({ query: event.target.value }) }}
							onKeyPress={
								event => {

									if (event.key === 'Enter') {
										this.search()
									}
								}
							}
						/>

						<button type="button" className="btn" onClick={() => this.search()}>
							<div className="glyphicon glyphicon-search" ></div>
						</button>
					</InputGroup>
				</FormGroup>
                {
	            this.state.artist !== null 
				?
				<div>
					<Profile>
						artist = {this.state.artist}
					</Profile>
	
					<Gallery
					   tracks={this.state.tracks}
					 />
				</div>
			:  <div></div>	
                }
                
                
			</div>

		);

	}

}

export default App;