import React from 'react'
import PropTypes from 'prop-types'
import {AppContext} from '../../todoApp'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactsrap'


export default class  TaskEditForm extends React.Component {
	constructor(props){
		super(props)

	}

	render(){
		<AppContext.Consumer>
			const {is_shown, toggle, onOk, onCancel} = this.props
			return(
				<Modal isOpen={is_shown} toggle={toggle}>
					<ModalHeader toggle={toggle}>Task edit</ModalHeader>
					<ModalBody>
							<input type="text"/>
					</ModalBody>
					<ModalFooter>
							<Button color="primary" onClick={onOk}>Ok</Button>{' '}
							<Button color="secondary" onClick={onCancel}>Cancel</Button>
					</ModalFooter>
				</Modal>
			)
		</AppContext.Consumer>
	}
}

taskEditForm.propTypes = {
	is_shown: PropTypes.boolean.isRequired,
	toggle: PropTypes.func.isRequired,
	onOk: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	
}