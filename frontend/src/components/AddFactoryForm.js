//Import needed packages
import React, { Component } from 'react';
import { Form, FormGroup, Col, Button, FormControl, ControlLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Class that will display the 'Add Factory Form'.
 */
export class AddFactoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lowerBound: 0,
            upperBound: 0
        };

        //Bind events
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Function that will handle the changes in the
     * inputs from the form.
     * 
     * @param {*} event 
     */
    handleChange(event) {
        const target = event.target;
        
        //Change state
        this.setState( {
            [target.name]: target.value,
        });
    }

    /**
     * Function to pass data from the form to
     * the parent.
     * 
     * @param {*} event 
     */
    handleSubmit(event) {
        event.preventDefault();
        this.props.addFactorySubmit(this.state.name, this.state.lowerBound, this.state.upperBound);
    }

    //Render the elements
    render() {
        return(
            <Form horizontal>
                <FormGroup controlId="formFactoryName">
                    <Col componentClass={ControlLabel} sm={4}>Name</Col>
                    <Col sm={8}>
                        <FormControl type="text" placeholder="Name" name="name" onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formFactoryLowerBound">
                    <Col componentClass={ControlLabel} sm={4}>Lower Bound</Col>
                    <Col sm={8}>
                        <FormControl type="number" placeholder="Lower Bound" min={0} name="lowerBound" onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formFactoryUpperBound">
                    <Col componentClass={ControlLabel} sm={4}>Upper Bound</Col>
                    <Col sm={8}>
                        <FormControl type="number" placeholder="Upper Bound" min={0} name="upperBound" onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={10} sm={2}>
                        <Button type="submit" onClick={this.handleSubmit}>Add</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}