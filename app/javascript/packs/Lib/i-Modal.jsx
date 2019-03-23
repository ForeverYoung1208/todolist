import React from 'react'
import PropTypes from 'prop-types'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap'


export default class  IModal extends React.Component {
	constructor(props){
		super(props)
		this.state={
			text:''
		}
	}

	toggle = () => {
	  this.setState(prevState => {is_shown: !prevState.is_shown})
	}

	render(){
		// <AppContext.Consumer>
			const {is_shown, onOk, onCancel, startText} = this.props
			return(
				<Modal isOpen={is_shown} onOpened={() => this.setState({text: startText}) } >
					<ModalHeader>Task edit</ModalHeader>
					<ModalBody>
							<Input type="text" value = {this.state.text} onChange={(e)=>this.setState({text: e.target.value}) }/>
					</ModalBody>
					<ModalFooter>
							<Button color="primary" onClick={()=> onOk(this.state.text)}>Ok</Button>{' '}
							<Button color="secondary" onClick={()=> onCancel(this.state.text)}>Cancel</Button>
					</ModalFooter>
				</Modal>
			)
		// </AppContext.Consumer>
	}
}

TaskEditForm.propTypes = {
	is_shown: PropTypes.bool.isRequired,
	onOk: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	startText: PropTypes.string.isRequired,
}