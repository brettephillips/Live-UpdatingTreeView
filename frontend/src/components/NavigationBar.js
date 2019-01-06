import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NavigationBar.css';

export class NavigationBar extends Component {
    render() {
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}