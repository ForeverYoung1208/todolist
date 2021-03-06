import React from 'react'
import Project from './Project/project'
import {fetchJSONfrom} from '../Lib/i-services'
import {postDataAsJSON, ipost} from '../Lib/i-services'

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
			taskEdittingIds: [],
			fun:{
				deleteProject: this.deleteProject,
				deleteTask: this.deleteTask,
				addTask: this.addTask,
				toggleTaskStatus: this.toggleTaskStatus,
				shiftTask: this.shiftTask,
				onTaskEditOk: this.onTaskEditOk,
				onProjectEditOk: this.onProjectEditOk
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
	onProjectEditOk= (projectIndex, name) => {
		let newProject = this.state.projects[projectIndex]
		newProject.name = name
		ipost(`/projects/${newProject.id}.json`,'PUT',newProject,		
			(resProject)=>{
				let newProjects = this.state.projects
				newProjects[projectIndex] = resProject
				this.setState({
					projects:newProjects,
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

	onTaskEditOk = (projectIndex, taskIndex, value, deadline) => {
		let newTask = this.state.projects[projectIndex].tasks[taskIndex]
		newTask={...newTask, name: value, deadline: deadline}
		ipost(`/tasks/${newTask.id}.json`,'PUT',newTask,		
			(resProject)=>{
				const projectIndex = this.state.projects.findIndex(p=> p.id==resProject.id)
				const newProjects = this.state.projects
				newProjects[projectIndex] = resProject
				this.setState({
					projects:newProjects
				})
			}
		)
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
							<span>Just pet react.js project</span>
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
					<footer> Simple todo list by Ihor</footer>
				</div>
			</AppContext.Provider>
		)
	}

}
