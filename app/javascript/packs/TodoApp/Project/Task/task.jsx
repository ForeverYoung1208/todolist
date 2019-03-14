import React from 'react'
import PropTypes from 'prop-types'

export default class Task extends React.Component {
	constructor(props){
		super(props)
	}

	render = () => {
		const {id, name, priority, deadline, status_id} = this.props.task
		return(
			<tr>
				<td>status {status_id}</td>
				<td>{name} (id:{id}), till: {deadline}</td>
				<td>controls</td>
			</tr>
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