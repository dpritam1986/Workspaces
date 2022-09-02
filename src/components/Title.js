import react , {Component} from 'react';

const TITLES =[
	
	'I am Full-stack developer with over 12+ years of strong and rich experience in web application development, using Java & J2EE technologies. Very Strong analytical and issues resolving skills',
	'I have hosted this website in google cloud platform using react js',
	'All the code base for below projects available in git repositories , I used different branches to commit code for respective applications'


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
		
		return(<p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>{title}</p>)
	}
	
}

export default Title;