import React from 'react'
import PropTypes from 'prop-types'
import {Table} from 'reactstrap'

import Task from './Task/task'
import TaskForm from './Task/taskForm'
import ProjectForm from './projectForm'

export default class Project extends React.Component {
	constructor(props){
		super(props)
	}

	render = () => {
		const {project, projectIndex} = this.props
		return(
			<div className="row justify-content-md-center">
				<div className="col-md-8">
					<Table className="table-project">
						<caption align="top"> <ProjectForm project={project}></ProjectForm> </caption>
						<thead>
							<tr> 
								<th colSpan="4" > <TaskForm project={project}></TaskForm></th>
							</tr>
						</thead>
						<tbody>
							{ project.tasks.map((task,taskIndex) => 
								<Task key={task.id} task={task} taskIndex={taskIndex} projectIndex={projectIndex}></Task> 
							)}
						</tbody>
					</Table>
				</div>
			</div>

		)
	}

}
Project.propTypes={
	project: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string,
		tasks: PropTypes.array.isRequired
	}),
	projectIndex: PropTypes.number.isRequired
}
