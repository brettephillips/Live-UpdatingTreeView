//Import needed packages
import React, { Component } from 'react'
import { Label } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Class that will render the label for a 
 * factory with the upper and lower bounds.
 */
export class Bound extends Component {
    //Render the elements
    render() {
        return(
            <Label>{this.props.lowerBound} : {this.props.upperBound}</Label>
        );
    }
}
