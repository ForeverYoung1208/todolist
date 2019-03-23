import React from 'react'
import PropTypes from 'prop-types'
import {Button, Input} from 'reactstrap'


export default class  TaskShowOrEdit extends React.Component {
	constructor(props){
		super(props)
		this.state={
			val:'',
		}
	}


	render(){
		const {id, name, priority, deadline, status_id, isEditting} = this.props.task
		const {projectIndex, taskIndex} = this.props		
		let res
		isEditting
		? res = <div>
				<Input value={this.state.val} onChange={(e) => this.setState({val: e.target.value})}/>
				<Button onClick={()=>fun.onEditTaskOk()}>Ok</Button>
			</div>
		: res = <div>{name} (id: {id}); deadline:{deadline}</div>

		return(
			<React.Fragment>
				{res}
			</React.Fragment>
		)
	}
}

TaskShowOrEdit.propTypes = {
	task:PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string,
		priority: PropTypes.number, 
		deadline: PropTypes.string, 
		status_id: PropTypes.number,		
		isEditting: PropTypes.bool,
	}).isRequired,
}