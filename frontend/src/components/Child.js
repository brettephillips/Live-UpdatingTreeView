//Import needed packages
import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Class that will render the children of a
 * specific factory.
 */
export class Child extends Component {
    constructor(props) {
        super(props);
        //Keep the state of the children
        this.state = {
            children: this.props.children
        };
    }

    //Render the elements
    render() {
        //Loop through each child
        let childList = this.state.children.map(child =>
            <Panel.Body key={child.id}>{child.number}</Panel.Body>
        );

        return(
            <React.Fragment>
                {childList}
            </React.Fragment>
        );
    }
}
