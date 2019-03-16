import React from 'react'
import PropTypes from 'prop-types'

export default class ProjectForm extends React.Component {
	constructor(props){
		super(props)
	}

	render = () => {
		const {project} = this.props
		return(
			<div className="project-head flex-row">
				<div className='fa fa-calendar-alt shadow-blue p-2'></div> 
				<div> {project.name} </div>
				<div className="btns-edit-project ml-auto">
					<div className='fa fa-pen p-2'></div> 
					|
					<div className='far fa-trash-alt p-2'></div> 
				</div>
			</div>
		)
	}

}
ProjectForm.propTypes={
	project: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string,
		tasks: PropTypes.array.isRequired
	})	
}


// onMouseEnter={this.hoverOn} 
// onMouseLeave={this.hoverOff}