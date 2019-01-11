//Import needed packages
import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import axios from 'axios';
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

    /**
     * Function that is responsible for adding the children
     * to a specific factory.
     */
    addChildren = (factId, num, lowerBound, upperBound, callback) => {
        factId = parseInt(factId);
        num = parseInt(num);
        lowerBound = parseInt(lowerBound);
        upperBound = parseInt(upperBound);

        axios.post('http://localhost:3001/api/children', {
                FactoryId: factId,
                number: num,
                lower_bound: lowerBound,
                upper_bound: upperBound,
            })
            .then(response => {  
                //If successful, then call the callback function to update the UI
                if(response.status === 200) {
                    callback();
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    /**
     * Function that is responsible for removing the children
     * from a specific factory.
     */
    removeChildren = (number, factId, lowerBound, upperBound, callback) => {
        factId = parseInt(factId);
        number = parseInt(number);
        lowerBound = parseInt(lowerBound);
        upperBound = parseInt(upperBound);
        
        axios.delete('http://localhost:3001/api/children/'+factId)
            .then(response => {
                //If a successfull response, then add the new children
                if(response.status === 200) {
                    this.addChildren(factId, number, lowerBound, upperBound, callback);
                }
            })
            .catch(error => {
                console.log(error);
            });
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
