//Import needed packages
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './CustomButton.css';

/**
 * Class that will render a custom button.
 */
export class CustomButton extends Component {
    //Render the elements
    render() {
        return(
            <Button onClick={this.props.handleShow} bsStyle={this.props.color} className="pull-right">{this.props.name}</Button>
        );
    }
}
