//Import needed packages
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './CustomButton.css';

/**
 * Class that will render the 'Delete' button.
 */
export class RemoveFactoryButton extends Component {
    //Render the elements
    render() {
        return(
            <Button bsStyle="danger" onClick={this.props.deleteFactory} id={this.props.factoryID} className="pull-right">Delete</Button>
        );
    }
}
