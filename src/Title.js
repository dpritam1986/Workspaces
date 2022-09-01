import react , {Component} from 'react';

const TITLES =[
	
	'full stack Java developer having 12+ years of experience.',
	'a sport lover',
	'a fitness freak'
	
];


class Title extends Component{
	
	state = {titleIndex : 0 , fadeIn : true};
	
	componentDidMount(){
		
	this.timeout=	setTimeout( () => this.setState({fadeIn : false}) , 2000 );
		
		this.animateTitles();
	}
	
	animateTitles = () => {
		setInterval( () => {
			const titleIndex= (this.state.titleIndex +1)% TITLES.length;
			this.setState({titleIndex , fadeIn:true});
			
			setTimeout( () => this.setState({fadeIn : false}) , 2000 );
			
		} , 3000 );
	}
	
	render(){
		const {fadeIn , titleIndex} = this.state;
		
		const title = TITLES[this.state.titleIndex];
		
		return(<p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}> I am {title}</p>)
	}
	
}

export default Title;