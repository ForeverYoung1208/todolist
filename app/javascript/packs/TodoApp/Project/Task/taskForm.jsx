import React from 'react'
import PropTypes from 'prop-types'
import {AppContext} from '../../todoApp'

export default class TaskForm extends React.Component {
	constructor(props){
		super(props)
		this.state={
			name:''
		}
	}

	render = () => {
		const {project} = this.props
		return(
			<AppContext.Consumer>
				{(fun)=>
					<div>
						<div className="input-group">
							<span className="fa fa-2x fa-plus"></span>
						  <input type="text" className="form-control input-new-task" 
						  	placeholder="Start typing here to create a task" aria-label="task name"
								onChange = {(e)=>this.setState({name:e.target.value})}
								value = {this.state.name}
						  />
						  <div className="input-group-append">
						    <button className="btn btn-add-task" type="button" onClick={()=>fun.addTask(project.id, this.state.name)}>Add task</button>
						  </div>
						</div>
					</div>
				}
			</AppContext.Consumer>
		)
	}

}
TaskForm.propTypes={
	project: PropTypes.shape({
		id: PropTypes.number.isRequired
	}).isRequired


}


// onMouseEnter={this.hoverOn} 
// onMouseLeave={this.hoverOff}