import React from 'react'
import PropTypes from 'prop-types'

export default class Task extends React.Component {
	constructor(props){
		super(props)
	}

	render = () => {
		return(
			<tr>
				<td>task1 data1</td>
				<td>data2</td>
				<td>data3</td>
			</tr>
		)
	}

}
Task.propTypes={

}


// onMouseEnter={this.hoverOn} 
// onMouseLeave={this.hoverOff}