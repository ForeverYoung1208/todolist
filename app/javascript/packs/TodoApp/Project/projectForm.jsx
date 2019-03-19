import React from 'react'
import PropTypes from 'prop-types'
import {AppContext} from '../todoApp'

export default class ProjectForm extends React.Component {
	constructor(props){
		super(props)
		this.state ={
			hovered: false
		}
	}


	render = () => {
		const {project} = this.props

		const btnsEditProject = <AppContext.Consumer>
			{(fun)=><div className="btns-edit-project ml-auto">
					<div className='fa fa-pen p-2'></div> 
					|
					<div className='far fa-trash-alt p-2' onClick={()=>fun.deleteProject(project.id)}></div> 
				</div>
			}
		</AppContext.Consumer>


		return(
			<div className="project-head flex-row" 
				onMouseEnter={e=> this.setState({hovered:true})}
				onMouseLeave={e=> this.setState({hovered:false})}
			>
				<div className='fa fa-calendar-alt shadow-blue p-2'></div> 
				<div> {project.name} ({project.id}) </div>
					{this.state.hovered ? btnsEditProject : ''}
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