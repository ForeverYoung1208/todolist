import React from 'react'
import Project from './Project/project'

export default class TodoApp extends React.Component {
	constructor(props){
		super(props)
	}


	render = () => {
		return(
			<div className="container">

				<div className="row justify-content-md-center header">
					<div className="col-md-6">					
						<h1>Simple toto lists</h1>
						<h2>From ruby garage</h2>
					</div>
				</div>
				
				<Project></Project>

				<div className="row justify-content-md-center header">
					<button className="btn btn-primary"><span className="fa fa-plus"></span> Add TODO List</button>
				</div>
			</div>
		)
	}

}


// onMouseEnter={this.hoverOn} 
// onMouseLeave={this.hoverOff}