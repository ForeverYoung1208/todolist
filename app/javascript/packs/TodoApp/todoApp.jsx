import React from 'react'

export default class TodoApp extends React.Component {
	constructor(props){
		super(props)
	}

	render = () => {
		console.log( ' wwwwwworking')
		return(
			<div>working...!<span className='fa fa-trash'></span></div>
		)
	}

}


// onMouseEnter={this.hoverOn} 
// onMouseLeave={this.hoverOff}