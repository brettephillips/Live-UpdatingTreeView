//Import needed packages
import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Class that will render the children of a
 * specific factory.
 */
export class Child extends Component {
    //Render the elements
    render() {
        //Loop through each child
        let childList = this.props.children.map(child =>
            <Panel.Body key={child.id}>{child.number}</Panel.Body>
        );

        return(
            <React.Fragment>
                {childList}
            </React.Fragment>
        );
    }
}
