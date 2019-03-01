import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Header extends Component {

    render() {
        return (
            <Jumbotron>
                <h1>WebVizVR</h1>
                <p>Data visualization on the Web!</p>
            </Jumbotron>
        );
    }

}

export default Header;
