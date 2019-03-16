import React from 'react'
import PropTypes from 'prop-types'
import {AppContext} from '../../todoApp'

export default class Task extends React.Component {
	constructor(props){
		super(props)
	}

	render = () => {
		const {id, name, priority, deadline, status_id} = this.props.task
		const {toggleTaskStatus} = this.context
		return(
			<AppContext.Consumer>
				{(fns)=>
					<tr>
						<td>
								<input type="checkbox" className="checkbox-task" checked={status_id == 4} onChange={()=> fns.toggleTaskStatus(id)}/>
						</td>
						<td>{name} (id:{id}), till: {deadline}</td>
						<td>controls</td>
					</tr>
				}
			</AppContext.Consumer>
		)
	}

}
Task.propTypes={
	task: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string,
		priority: PropTypes.number, 
		deadline: PropTypes.string, 
		status_id: PropTypes.number,		
	})

}


// onMouseEnter={this.hoverOn} 
// onMouseLeave={this.hoverOff}