//Import needed packages
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './AddFactoryButton.css';

/**
 * Class that will render the 'Add Factory' button.
 */
export class AddFactoryButton extends Component {
    //Render the elements
    render() {
        return(
            <Button onClick={this.props.handleShow}>Add Factory</Button>
        );
    }
}
