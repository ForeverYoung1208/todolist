import React from 'react'
import PropTypes from 'prop-types'

export default class ProjectForm extends React.Component {
	constructor(props){
		super(props)
	}

	render = () => {
		return(
			<div>
				Project Form here <span className='fa fa-trash'></span>
			</div>
		)
	}

}
ProjectForm.propTypes={

}


// onMouseEnter={this.hoverOn} 
// onMouseLeave={this.hoverOff}