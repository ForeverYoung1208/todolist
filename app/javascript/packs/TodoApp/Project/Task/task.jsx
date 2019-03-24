import React from 'react'
import PropTypes from 'prop-types'
import {AppContext} from '../../todoApp'
import {Input, InputGroupAddon, InputGroup} from 'reactstrap'


export default class Task extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			hovered: false,
			isEditting: false,
			val: props.task.name,
		  deadline: props.task.deadline

		}
	}

	componentDidMount= () => {

	}


	startEditting = () => {
		this.setState(ps=>({
			isEditting: !ps.isEditting,
			val: this.props.task.name,
			deadline: this.props.task.deadline
		}))
	}


	render = () => {
		const {id, name, priority, deadline, status_id} = this.props.task
		const {projectIndex, taskIndex} = this.props
		const {isEditting} = this.state
		const taskControls = <AppContext.Consumer>
			{(fun)=><div className="task-controls">
									<div className="arrows">
										<div className="fa fa-caret-up hoverable" onClick={()=>fun.shiftTask(projectIndex, taskIndex, -1)}></div>
										<div className="horizontal-line"></div>
										<div className="fa fa-caret-down hoverable" onClick={()=>fun.shiftTask(projectIndex, taskIndex, 1)}></div>
									</div>
									<div className="vertical-line m-2"></div>
									<div className="fa fa-pen m-2 hoverable" onClick={this.startEditting}></div>
									<div className="vertical-line m-2"></div>
									<div className="far fa-trash-alt m-2 hoverable" onClick={()=>fun.deleteTask(id)}></div>
							</div>
			}
		</AppContext.Consumer>

		const noTaskControls = <div className="no-task-controls"></div>

		return(
			<AppContext.Consumer>
				{(fun)=>
					<tr
						onMouseEnter={e=> this.setState({hovered:true})}
						onMouseLeave={e=> this.setState({hovered:false})}
					>
						<td className="td-status">
								<input type="checkbox" className="checkbox-task" checked={status_id == 4} onChange={()=> fun.toggleTaskStatus(id)} />
						</td>
						<td className="td-empty"></td>
						
						<td> 
						{
						isEditting
						? <div>
								<InputGroup>
									<Input value={this.state.val} onChange={(e) => this.setState({val: e.target.value})}/>
										<InputGroupAddon addonType="prepend">
										
											<Input
												type="date"
												// data-provide="datepicker"
												// data-date-format="yyyy-mm-dd"
												onChange={(e)=>this.setState({deadline: e.target.value})}
												value={this.state.deadline ? this.state.deadline : ''}
											/>

											<button className="btn btn-add-task" type="button" 
												onClick={()=>{
											 		this.setState({isEditting: false})
											 		fun.onTaskEditOk(projectIndex, taskIndex, this.state.val, this.state.deadline)
											 	}}>Ok
										 	</button>
									 	</InputGroupAddon>
								</InputGroup>
							</div>
						: <div>{name} {deadline? `; deadline: ${deadline}` : ''}</div>
						}

						</td>

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
	}).isRequired,
	projectIndex: PropTypes.number.isRequired,
	taskIndex: PropTypes.number.isRequired
}


// onMouseEnter={this.hoverOn} 
// onMouseLeave={this.hoverOff}