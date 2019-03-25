import React from 'react'
import PropTypes from 'prop-types'
import {AppContext} from '../todoApp'
import {Input, InputGroupAddon, InputGroup} from 'reactstrap'

export default class ProjectForm extends React.Component {
	constructor(props){
		super(props)
		this.state ={
			hovered: false,
			isEditting: false,
			val: props.project.name,			
		}
	}


	render = () => {
		const {project, projectIndex} = this.props
		const {isEditting, val} =this.state

		const btnsEditProject = <AppContext.Consumer>
			{(fun)=><div className="btns-edit-project ml-auto">
					<div className='fa fa-edit p-2' onClick={()=>this.setState(ps=>({isEditting: !ps.isEditting}))}></div> 
					|
					<div className='fa fa-trash p-2' onClick={()=>fun.deleteProject(project.id)}></div> 
				</div>
			}
		</AppContext.Consumer>


		return(
			<AppContext.Consumer>	
			{(fun)=>
				<div className="project-head flex-row" 
					onMouseEnter={e=> this.setState({hovered:true})}
					onMouseLeave={e=> this.setState({hovered:false})}
				>
					<div className='fa fa-calendar shadow-blue p-2'></div> 
					<div> 
						{ isEditting
							? <InputGroup>
									<input type="text" value={val} onChange={(e)=>this.setState({val:e.target.value})}/>
									<InputGroupAddon addonType="prepend">
										<button className="btn btn-primary" type="button" 
											onClick={()=>{
										 		this.setState({isEditting: false})
										 		fun.onProjectEditOk(projectIndex, this.state.val)
										 	}}>Ok
									 	</button>
								 	</InputGroupAddon>
								</InputGroup>
							: `${project.name}`
						}
						 
					</div>
						{this.state.hovered ? btnsEditProject : ''}
				</div>
			}
			</AppContext.Consumer>
		)
	}

}
ProjectForm.propTypes={
	projectIndex: PropTypes.number.isRequired,
	project: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string,
		tasks: PropTypes.array.isRequired
	})	
}

