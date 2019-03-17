import React from 'react'
import PropTypes from 'prop-types'
import {AppContext} from '../../todoApp'

export default class Task extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			hovered: false,
		}
	}

	render = () => {
		const {id, name, priority, deadline, status_id} = this.props.task
		const {toggleTaskStatus} = this.context
		const taskControls = <div className="task-controls">
								<div className="arrows">
									<div className="fa fa-caret-up hoverable"></div>
									<div className="horizontal-line"></div>
									<div className="fa fa-caret-down hoverable"></div>
								</div>
								<div className="vertical-line m-2"></div>
								<div className="fa fa-pen m-2 hoverable"></div>
								<div className="vertical-line m-2"></div>
								<div className="far fa-trash-alt m-2 hoverable"></div>
		</div>
		const noTaskControls = <div className="no-task-controls"></div>


		return(
			<AppContext.Consumer>
				{(fns)=>
					<tr
						onMouseEnter={e=> this.setState({hovered:true})}
						onMouseLeave={e=> this.setState({hovered:false})}
					>
						<td>
								<input type="checkbox" className="checkbox-task" checked={status_id == 4} onChange={()=> fns.toggleTaskStatus(id)}/>
						</td>
						<td className="td-empty"></td>
						<td>{name} (id:{id}), till: {deadline}</td>
						<td className="td-task-controls">{this.state.hovered ? taskControls : noTaskControls }</td>
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