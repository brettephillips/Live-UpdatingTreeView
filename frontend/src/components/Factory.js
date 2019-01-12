//Import needed packages
import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Child } from './Child';
import { GenerateChildrenModal } from './GenerateChildrenModal';
import { EditFactoryModal } from './EditFactoryModal';
import { RemoveFactoryButton } from './RemoveFactoryButton';
import { Bound } from './Bound';
import { AddFactoryModal } from './AddFactoryModal';
import socket from 'socket.io-client';
import axios from 'axios';
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
            factories: [],
            socket: socket("http://localhost:3001")
        };

        //Create reference to child component
        this.child = React.createRef();
    }

    //When the component mounts fetch data from the api
    componentDidMount = () => {
        this.getData();

        //Set the socket up for listening when to refresh
        this.state.socket.on('refresh', (msg) => {
            //If we are removing children, then we need to set the
            //factories to empty first
            if(msg === "removeChildren") {
                this.setState( {
                    factories: []
                });
            }

            //Get all the data
            this.getData();
        });
    }

    /**
     * Function that will use the socket and send
     * a refresh message to server, so that all clients
     * get notified of a change.
     * 
     * @param {*} msg 
     */
    sendRefresh = (msg) => {
        this.state.socket.emit('refresh', msg);
    }

    /**
     * Function that will get all of the data, both
     * factories and children.
     */
    getData = () => {
        axios.get('http://localhost:3001/api/factories')
            .then(response => {
                if(response.status === 200) {
                    //Set the state of the factories array
                    this.setState( {
                        factories: response.data
                    });
                }
            })
            .catch(error => {
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
        lowerBound = parseInt(lowerBound);
        upperBound = parseInt(upperBound);

        axios.post('http://localhost:3001/api/factories', {
                name: factoryName,
                lower_bound: lowerBound,
                upper_bound: upperBound
            })
            .then(response => {
                if(response.status === 200) {
                    //Add a child property to the json obj returned
                    response.data.Children = [];
                    //Create a new array and push the new data onto it
                    var newArray = this.state.factories.slice();
                    newArray.push(response.data);

                    //Change the state
                    this.setState( {
                        factories: newArray
                    });

                    //Notify other clients of the change
                    this.sendRefresh();
                }
            })
            .catch(error => {
            });
    }

    /**
     * Factory that will delete a factory.
     * 
     * @param {*} event 
     */
    deleteFactory = (event) => {
        var factId = event.target.id;

        axios.delete('http://localhost:3001/api/factories/'+parseInt(factId))
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

                        //Notify other clients of the change
                        this.sendRefresh();
                    }
                }
            })
            .catch(error => {
            });
    }

    /**
     * Function that will reference the Child component
     * in order to successfully remove/generate new
     * children for the chosen factory.
     */
    removeChildren = (number, factId) => {
        var factory;

        //Loop and get the factory that is being edited
        for(var i = 0; i < this.state.factories.length; i++) {
            if(this.state.factories[i].id == factId) {
                factory = this.state.factories[i];
            }
        }

        //Call the child function
        this.child.current.removeChildren(parseInt(number), parseInt(factId), parseInt(factory.lower_bound), parseInt(factory.upper_bound), () => {
            //Clear the state, then update the UI with the new data
            this.setState( {
                factories: []
            });

            this.getData();
            
            //Notify other clients of the change
            this.sendRefresh("removeChildren");    
        });
    }

    /**
     * Function that will update the properties
     * of a specific factory.
     * 
     * @param {*} factId
     * @param {*} name 
     * @param {*} lowerBound 
     * @param {*} upperBound 
     */
    editFactory = (factId, name, lowerBound, upperBound) => {
        factId = parseInt(factId);
        lowerBound = parseInt(lowerBound);
        upperBound = parseInt(upperBound);

        axios.put('http://localhost:3001/api/factories/'+factId, {
                name: name,
                lower_bound: lowerBound,
                upper_bound: upperBound
            })
            .then(response => {
                //If a successfull response, then update the UI
                if(response.status === 200) {
                    //Create an object to replace the existing one
                    var obj = {
                        id: factId,
                        name: name,
                        lower_bound: lowerBound,
                        upper_bound: upperBound,
                        Children: []
                    };

                    //Get the index of the factory
                    for(var i = 0; i < this.state.factories.length; i++) {
                        //Update the state
                        if(this.state.factories[i]["id"] == factId) {
                            this.state.factories[i] = obj;
                            var newArray = this.state.factories;

                            this.removeChildren(0, factId);
                        }
                    }
                }
            })
            .catch(error => {
            });
    }

    //Render the elements
    render() {
        //Loop through each factory
        let factoriesList = this.state.factories.map(factory =>
            <Panel key={factory.id}>
                <Panel.Heading>
                    <RemoveFactoryButton deleteFactory={this.deleteFactory} factoryID={factory.id} />
                    <EditFactoryModal factory={factory} editFactory={this.editFactory} />
                    <GenerateChildrenModal removeChildren={this.removeChildren} childFactoryID={factory.id} />
                    <Panel.Title toggle>{factory.name}</Panel.Title>
                    <Bound lowerBound={factory.lower_bound} upperBound={factory.upper_bound} />
                </Panel.Heading>
                <Panel.Collapse>
                    <Child children={factory.Children} ref={this.child} />
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