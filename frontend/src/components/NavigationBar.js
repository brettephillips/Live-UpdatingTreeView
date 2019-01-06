//Import needed packages
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { AddFactoryModal } from './AddFactoryModal';
import 'bootstrap/dist/css/bootstrap.css';
import './NavigationBar.css';

/**
 * Class that will render the navigation bar.
 */
export class NavigationBar extends Component {
    //Render the elements
    render() {
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>Live-Updating Tree View</Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem>
                        <AddFactoryModal />
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}