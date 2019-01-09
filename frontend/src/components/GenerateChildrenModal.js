//Import needed packages
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { GenerateChildrenButton } from './GenerateChildrenButton';
import { GenerateChildrenForm } from './GenerateChildrenForm';
import 'bootstrap/dist/css/bootstrap.css';
import './AddFactoryButton.css';

/**
 * Class that will handle the modal.
 */
export class GenerateChildrenModal extends Component {
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
     * @param {*} number
     */
    handleSubmit(number) {
        this.props.removeChildren(number, this.props.childFactoryID);
        this.handleClose();
    }
  
    //Render the elements
    render() {
        return(
            <React.Fragment>
                <GenerateChildrenButton handleShow={this.handleShow} />
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Generate Children</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <GenerateChildrenForm generateChildrenSubmit={this.handleSubmit} />
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        );
    }
}
