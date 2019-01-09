//Import needed packages
import React, { Component } from 'react';
import { Form, FormGroup, Col, Button, FormControl, ControlLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Class that will display the 'Edit Factory Form'.
 */
export class EditFactoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.factory.name,
            lowerBound: this.props.factory.lower_bound,
            upperBound: this.props.factory.upper_bound
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
        this.props.editFactorySubmit(this.state.name, this.state.lowerBound, this.state.upperBound);
    }

    //Render the elements
    render() {
        return(
            <Form horizontal>
                <FormGroup controlId="formFactoryName">
                    <Col componentClass={ControlLabel} sm={4}>Name</Col>
                    <Col sm={8}>
                        <FormControl type="text" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formFactoryLowerBound">
                    <Col componentClass={ControlLabel} sm={4}>Lower Bound</Col>
                    <Col sm={8}>
                        <FormControl type="number" placeholder="Lower Bound" min={0} name="lowerBound" onChange={this.handleChange} value={this.state.lowerBound} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formFactoryUpperBound">
                    <Col componentClass={ControlLabel} sm={4}>Upper Bound</Col>
                    <Col sm={8}>
                        <FormControl type="number" placeholder="Upper Bound" min={0} name="upperBound" onChange={this.handleChange} value={this.state.upperBound} />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={10} sm={2}>
                        <Button type="submit" bsStyle="warning" onClick={this.handleSubmit}>Edit</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}