import React from 'react'
import Project from './Project/project'
import {fetchJSONfrom} from '../Lib/i-services'
import {postDataAsJSON} from '../Lib/i-services'

//// should i use Context? idknow... just for fun, maybe...
export const AppContext = React.createContext();

export default class TodoApp extends React.Component {
	constructor(props){
		super(props)
		this.lastProjectId = 0;
		this.lastTaskId = 0;

		this.state={
			projects:[],
			statuses:[],
		}
	}

	newId = ()=>{
		return {
			project: this.lastProjectId-=1 ,
			task: this.lastTaskId-=1
		}
	}

	addProjectClick = () => {
		const emptyProject={
			name: 'new project',
		}
		postDataAsJSON ('/projects.json','POST',emptyProject,		
			(res)=>{
				if(res.ok){
					res.json().then( resProject=>
						this.setState({
							projects:[...this.state.projects, resProject]
						})
					)
				}else{
					console.log('request error: '+res.status+ '-'+res.statusText)
				}
			},
			(e)=>console.log('error: '+e)
		)
	}

// TODO UNDER CONSTRUCTION
	addTaskClick = (task_name, project_id) => {
		const emptyTask={
			name: task_name,
			project_id: project_id
		}
		postDataAsJSON ('/tasks.json','POST',emptyTask,		
			(res)=>{
				if(res.ok){
					res.json().then( 
						(resTask)=>{
							const projectIndex = this.state.projects.findIndex(p=> p.id==project_id)
							const newProjects = this.state.projects[projectIndex].tasks.push()
							this.setState({
								projects:[...this.state.projects, resProject]
							})
						}
					)
				}else{
					console.log('request error: '+res.status+ '-'+res.statusText)
				}
			},
			(e)=>console.log('error: '+e)
		)
	}
// TODO UNDER CONSTRUCTION

	deleteProject = () =>{

	}

	deleteTask = (taskId) => {
		console.log( 'mock deleteTask id:'+ taskId)	  
	}

	toggleTaskStatus = (taskId) => {
		console.log( 'mock toggleTaskStatus id:'+ taskId)	   
	}

	componentDidMount= () => {
		Promise.all([
			fetchJSONfrom('/statuses.json'),
			fetchJSONfrom('/projects.json')			
		]).then((res)=>{
				const [statuses, projects] = res
				this.setState({
					projects:projects,
					statuses:statuses,
				})
			}
		)
	  
	}

	render = () => {
		const {projects} = this.state
		return(
			<AppContext.Provider 
				value={{
					deleteTask: this.deleteTask,
					toggleTaskStatus: this.toggleTaskStatus
				}}
			>
			
				<div className="container">
					<div className="row justify-content-md-center header">
						<div className="col-md-8">					
							<h4>Simple todo lists</h4>
							<span>From ruby garage</span>
						</div>
					</div>

					{projects.map( prj => 
						<Project key={prj.id} project={prj}></Project> )
					}

					<div className="row justify-content-md-center header">
						<button className="btn btn-primary btn-add-project" onClick={this.addProjectClick}>
							<div className="fa fa-2x fa-plus shadow-blue"></div> <div>Add TODO List</div>
						</button>
					</div>
					<footer> Test task for Ruby Garage by Ihor</footer>
				</div>
			</AppContext.Provider>
		)
	}

}


// onMouseEnter={this.hoverOn} 
// onMouseLeave={this.hoverOff}