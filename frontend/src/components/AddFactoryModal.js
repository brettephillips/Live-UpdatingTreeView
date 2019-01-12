//Import needed packages
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { CustomButton } from './CustomButton';
import { AddFactoryForm } from './AddFactoryForm';
import 'bootstrap/dist/css/bootstrap.css';
import './CustomButton.css';

/**
 * Class that will handle the modal.
 */
export class AddFactoryModal extends Component {
    constructor(props, context) {
      super(props, context);
      //State of the model (whether it is showing or not)
      this.state = {
        show: false
      };

      //Bind events
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    /**
     * Function that will change the state of the modal
     */
    handleClose() {
        this.setState( { 
            show: false 
        });
    }
  
    /**
     * Function that will change the state of the modal
     */
    handleShow() {
        this.setState( { 
            show: true 
        });
    }

    /**
     * Function to pass data from the form to
     * the parent.
     * 
     * @param {*} factoryName 
     * @param {*} lowerBound 
     * @param {*} upperBound 
     */
    handleSubmit(factoryName, lowerBound, upperBound) {
        this.props.newFactory(factoryName, lowerBound, upperBound);
        this.handleClose();
    }
  
    //Render the elements
    render() {
        return(
            <React.Fragment>
                <CustomButton handleShow={this.handleShow} style="default" name="Add Factory" />
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Factory</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddFactoryForm addFactorySubmit={this.handleSubmit} />
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        );
    }
}
