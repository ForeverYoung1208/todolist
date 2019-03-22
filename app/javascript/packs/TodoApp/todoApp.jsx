import React from 'react'
import Project from './Project/project'
import {fetchJSONfrom} from '../Lib/i-services'
import {postDataAsJSON, ipost} from '../Lib/i-services'
import TaskEditForm from './Project/Task/taskEditForm'

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
			fun:{
				deleteProject: this.deleteProject,
				deleteTask: this.deleteTask,
				toggleTaskStatus: this.toggleTaskStatus,
				shiftTask: this.shiftTask,
				editTask: this.editTask,				
				addTask: this.addTask,
			}
		}
	}

	newId = ()=>{
		return {
			project: this.lastProjectId-=1 ,
			task: this.lastTaskId-=1
		}
	}

	deleteProject = (projectId) =>{
		ipost(`/projects/${projectId}.json`,'DELETE',null,
			(resProjects)=>{
				this.setState({
					projects: resProjects
				})
			}
		)
	}

	addProjectClick = () => {
		const emptyProject={
			name: 'new project',
		}
		ipost('/projects.json','POST',emptyProject,		
			(resProject)=>{
				this.setState({
					projects:[...this.state.projects, resProject]
				})
			}
		)
	}

	addTask = (project_id, task_name) => {
		const emptyTask={
			name: task_name,
			project_id: project_id
		}
		ipost('/tasks.json','POST',emptyTask,		
			(resTask)=>{
				const projectIndex = this.state.projects.findIndex(p=> p.id==project_id)
				const newProjects = this.state.projects
				newProjects[projectIndex].tasks.push(resTask)
				this.setState({
					projects:newProjects
				})
			}
		)
	}

	shiftTask= (projectIndex, taskIndex, shift=-1) => {
		const project = this.state.projects[projectIndex]
		const maxTaskIndex = project.tasks.length-1
		if ( (taskIndex+shift >= 0) && (taskIndex+shift <= maxTaskIndex) ){
			const tasksToChange = {
				task1_id: project.tasks[taskIndex].id,
				task2_id: project.tasks[taskIndex+shift].id
			}
			ipost(`/projects/${project.id}/changeTaskPriorities`,'POST',tasksToChange,
				(resProject)=>{
					this.setState({
						projects: this.state.projects.map(p => p.id == resProject.id ? resProject : p )
					})
				}
			)			
		} else {

		}
		
	}

	editTask= (task_id) => {
		console.log( 'mock editTask task_id:'+ task_id)	  
	}



	deleteTask = (taskId) => {
		ipost(`/tasks/${taskId}.json`,'DELETE',null,
			(resProject)=>{
				this.setState({
					projects: this.state.projects.map(p => p.id == resProject.id ? resProject : p )
				})
			}
		)
	}

	toggleTaskStatus = (taskId) => {
		ipost(`/tasks/${taskId}/toggleStatus`,'POST',null,
			(resProject)=>{
				this.setState({
					projects: this.state.projects.map(p => p.id == resProject.id ? resProject : p )
				})
			}
		)
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
				value={this.state.fun}
			>
			
				<div className="container">
					<div className="row justify-content-md-center header">
						<div className="col-md-8">					
							<h4>Simple todo lists</h4>
							<span>From ruby garage</span>
						</div>
					</div>

					{projects.map( (prj, projectIndex) => 
						<Project key={prj.id} project={prj} projectIndex={projectIndex}></Project> )
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
