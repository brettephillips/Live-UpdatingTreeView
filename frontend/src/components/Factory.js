//Import needed packages
import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Child } from './Child';
import { Bound } from './Bound';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Class that will retrieve and display
 * the factories.
 */
export class Factory extends Component {
    constructor(props) {
        super(props);
        //Keep the state of the factories
        this.state = {
            factories: []
        };
    }

    //When the component mounts fetch data from the api
    componentDidMount() {
        axios.get('http://localhost:3001/api/factories')
            .then(response => {
                //Set the state of the factories array
                this.setState( {
                    factories: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    //Render the elements
    render() {
        //Loop through each factory
        let factoriesList = this.state.factories.map(factory =>
            <Panel key={factory.id}>
                <Panel.Heading>
                    <Panel.Title toggle>{factory.name}</Panel.Title>
                    <Bound lowerBound={factory.lower_bound} upperBound={factory.upper_bound} />
                </Panel.Heading>
                <Panel.Collapse>
                    <Child children={factory.Children} />
                </Panel.Collapse>
            </Panel>
        );

        return(
            <div>
                {factoriesList}
            </div>
        );
    }
}