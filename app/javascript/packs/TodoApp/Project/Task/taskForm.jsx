import React from 'react'
import PropTypes from 'prop-types'

export default class TaskForm extends React.Component {
	constructor(props){
		super(props)
	}

	render = () => {
		return(
			<div>
				<div className="input-group">
					<span className="fa fa-2x fa-plus"></span>
				  <input type="text" className="form-control input-new-task" placeholder="Start typing here to create a task" aria-label="task name"/>
				  <div className="input-group-append">
				    <button className="btn btn-add-task" type="button">Add task</button>
				  </div>
				</div>
			</div>
		)
	}

}
TaskForm.propTypes={

}


// onMouseEnter={this.hoverOn} 
// onMouseLeave={this.hoverOff}