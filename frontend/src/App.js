//Import needed packages
import React, { Component } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { Factory } from './components/Factory';
import './App.css';

/**
 * Class that will render the needed
 * components for the app itself.
 */
class App extends Component {
    //Render the elements
    render() {
        return (
            <React.Fragment>
                <NavigationBar />
                <Factory />
            </React.Fragment>
        );
    }
}

export default App;
