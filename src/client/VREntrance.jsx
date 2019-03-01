import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import './vr/VRInitializer.js';

class VREntrance extends Component {

    initVR() {
        console.log('loading vr...');
    }

    render() {
        return(
            <Button onClick={this.initVR.bind(this)} href='src/client/vr/index.html'>
                Enter VR
            </Button>
        );
    }
}

export default VREntrance;
