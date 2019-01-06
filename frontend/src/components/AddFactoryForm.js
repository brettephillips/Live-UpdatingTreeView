//Import needed packages
import React, { Component } from 'react';
import { Form, FormGroup, Col, Button, FormControl, ControlLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Class that will display the 'Add Factory Form'.
 */
export class AddFactoryForm extends Component {
    //Render the elements
    render() {
        return(
            <Form horizontal>
                <FormGroup controlId="formFactoryName">
                    <Col componentClass={ControlLabel} sm={4}>Name</Col>
                    <Col sm={8}>
                        <FormControl type="text" placeholder="Name" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formFactoryLowerBound">
                    <Col componentClass={ControlLabel} sm={4}>Lower Bound</Col>
                    <Col sm={8}>
                        <FormControl type="text" placeholder="Lower Bound" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formFactoryUpperBound">
                    <Col componentClass={ControlLabel} sm={4}>Upper Bound</Col>
                    <Col sm={8}>
                        <FormControl type="text" placeholder="Upper Bound" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={10} sm={2}>
                        <Button type="submit">Add</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}