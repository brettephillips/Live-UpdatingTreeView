//Import needed packages
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './AddFactoryButton.css';

/**
 * Class that will render the 'Generate' button.
 */
export class GenerateChildrenButton extends Component {
    //Render the elements
    render() {
        return(
            <Button onClick={this.props.handleShow} className="pull-right">Generate</Button>
        );
    }
}
