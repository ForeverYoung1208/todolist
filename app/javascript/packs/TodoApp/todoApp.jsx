import React from 'react'
import Project from './Project/project'
import {fetchJSONfrom} from '../Lib/i-services'

//// should i use Context? idknow... just for fun, maybe...
const AppContext = React.createContext({
	statuses:[],
});

export default class TodoApp extends React.Component {
	constructor(props){
		super(props)
		this.state={
			projects:[],
			statuses:[],
		}
	}

	addProjectClick= () => {
	  console.log( 'mock addProjectClick')
	}

	deleteTask = (taskId) => {
		console.log( 'mock deleteTask id:'+ taskId)	  
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
		const {projects, statuses} = this.state
		return(
			<AppContext.Provider statuses={statuses} reducers={{deleteTask: this.deleteTask}}>
			
				<div className="container">
					<div className="row justify-content-md-center header">
						<div className="col-md-6">					
							<h1>Simple toto lists</h1>
							<h2>From ruby garage</h2>
						</div>
					</div>

					{projects.map( prj => 
						<Project key={prj.id} project={prj}></Project> )
					}

					<div className="row justify-content-md-center header">
						<button className="btn btn-primary" onClick={this.addProjectClick}><span className="fa fa-plus"></span> Add TODO List</button>
					</div>
				</div>
			</AppContext.Provider>
		)
	}

}


// onMouseEnter={this.hoverOn} 
// onMouseLeave={this.hoverOff}