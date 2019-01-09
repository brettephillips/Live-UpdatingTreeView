//Import needed packages
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Class that will render the 'Edit Factory' button.
 */
export class EditFactoryButton extends Component {
    //Render the elements
    render() {
        return(
            <Button onClick={this.props.handleShow} bsStyle="warning" className="pull-right">Edit</Button>
        );
    }
}
