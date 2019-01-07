//Import needed packages
import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Child } from './Child';
import { GenerateChildrenModal } from './GenerateChildrenModal';
import { RemoveFactoryButton } from './RemoveFactoryButton';
import { Bound } from './Bound';
import axios from 'axios';
import { AddFactoryModal } from './AddFactoryModal';
import './Factory.css';
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

        this.deleteFactory = this.deleteFactory.bind(this);
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

    /**
     * Function that will add a new factory by posting
     * the data to the api.
     * 
     * @param {*} factoryName 
     * @param {*} lowerBound 
     * @param {*} upperBound 
     */
    addFactory = (factoryName, lowerBound, upperBound) => {
        axios.post('http://localhost:3001/api/factories', {
                name: factoryName,
                lower_bound: lowerBound,
                upper_bound: upperBound
            })
            .then(response => {
                //Add a child property to the json obj returned
                response.data.Children = [];
                //Create a new array and push the new data onto it
                var newArray = this.state.factories.slice();
                newArray.push(response.data);

                //Change the state
                this.setState( {
                    factories: newArray
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    /**
     * Factory that will delete a factory.
     * 
     * @param {*} event 
     */
    deleteFactory(event) {
        var factId = event.target.id;

        axios.delete('http://localhost:3001/api/factories/'+factId)
            .then(response => {
                //If a successfull response, then update the UI
                if(response.status === 200) {
                    var index = -1;

                    //Get the index of the factory
                    for(var i = 0; i < this.state.factories.length; i++) {
                        if(this.state.factories[i]["id"] == factId) {
                            index = i;
                        }
                    }

                    //If we find the factory, then splice the array and set the state
                    if(index !== -1) {
                        this.state.factories.splice(index, 1);
                        var newArray = this.state.factories;

                        this.setState( {
                            factories: newArray
                        });
                    }
                }
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
                    <RemoveFactoryButton deleteFactory={this.deleteFactory} factoryID={factory.id} />
                    <GenerateChildrenModal />
                    <Panel.Title toggle>{factory.name}</Panel.Title>
                    <Bound lowerBound={factory.lower_bound} upperBound={factory.upper_bound} />
                </Panel.Heading>
                <Panel.Collapse>
                    <Child children={factory.Children} />
                </Panel.Collapse>
            </Panel>
        );

        return(
            <div id="factory-wrapper">
                <h1>Root</h1>
                {factoriesList}
                <AddFactoryModal newFactory={this.addFactory} />
            </div>
        );
    }
}