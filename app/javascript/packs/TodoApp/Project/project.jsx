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
		const {tasks} = this.props.project
		return(
			<div className="row justify-content-md-center">
				<div className="col-md-6">
					<Table className="table_project">
						<caption align="top"> <ProjectForm></ProjectForm> </caption>
						<thead>
							<tr> 
								<th colSpan="3" > <TaskForm></TaskForm></th>
							</tr>
						</thead>
						<tbody>
							{ tasks.map(task => 
								<Task key={task.id} task={task}></Task> 
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
	})
}


// onMouseEnter={this.hoverOn} 
// onMouseLeave={this.hoverOff}