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
		return(
			<div className="row justify-content-md-center">
				<div className="col-md-6">
					<Table bordered className="table_project">
						<caption align="top"> <ProjectForm></ProjectForm> </caption>
						<thead>
							<tr> 
								<th colSpan="3" > <TaskForm></TaskForm></th>
							</tr>
						</thead>
						<tbody>
							<Task></Task>
						</tbody>
					</Table>
				</div>
			</div>

		)
	}

}
Project.propTypes={

}


// onMouseEnter={this.hoverOn} 
// onMouseLeave={this.hoverOff}