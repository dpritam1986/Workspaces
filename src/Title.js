import react , {Component} from 'react';

const TITLES =[
	
	'full stack Java developer having 12+ years of experience.',
	'a sport lover',
	'a fitness freak'
	
];


class Title extends Component{
	
	state = {titleIndex : 0};
	
	componentDidMount(){
		console.log('Title comp has mounted');
		
		this.animateTitles();
	}
	
	animateTitles = () => {
		setInterval( () => {
			const titleIndex= (this.state.titleIndex +1)% TITLES.length;
	
			this.setState({titleIndex});
			
		} , 1000 );
	}
	
	render(){
		
		const title = TITLES[this.state.titleIndex];
		
		return(<p> I am {title}</p>)
	}
	
}

export default Title;