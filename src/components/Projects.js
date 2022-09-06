import react  from 'react';
import PROJECTS from '../data/projects';

//class Project extends Component{

const Project = props =>{ 	
	//render(){
		
		
		const{title , image , description , link , caption} = props.projectObject;
		
		return(		
			<div style={{display : 'inline-block' , width :400 , margin : 10}}> 
			
              <h3> {title}</h3>
              <img src ={image} alt ='profile' style={{width : 200, height:120}}/>
              <p>{description}</p>
              <a href={link} style={{margin :10}} target='_blank'>{caption} {title} </a>
                            
         
		     
		    </div>)
	//}
}



//class Projects extends Component{
const Projects = () =>(
	
	//render(){
			<div> 
		     <h2>Highlighted Projects </h2>
		      <div>
			   {
			    PROJECTS.map(PROJECT => {
				  return( <Project key={PROJECT.id}  projectObject={PROJECT} />);
		     	})
			   }
			
			  </div>
			</div>
			
)
//}
	
	
export default Projects;