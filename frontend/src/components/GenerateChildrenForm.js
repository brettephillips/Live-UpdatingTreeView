//Import needed packages
import React, { Component } from 'react';
import { Form, FormGroup, Col, Button, FormControl, ControlLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Class that will display the 'Generate Children Form'.
 */
export class GenerateChildrenForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
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

    handleSubmit(event) {
        event.preventDefault();
    }

    //Render the elements
    render() {
        return(
            <Form horizontal>
                <FormGroup controlId="formFactoryChildren">
                    <Col componentClass={ControlLabel} sm={4}>Upper Bound</Col>
                    <Col sm={8}>
                        <FormControl type="number" placeholder="How Many Children? (1-15)" min={1} max={15} name="upperBound" onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={9} sm={3}>
                        <Button type="submit" onClick={this.handleSubmit}>Generate</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}