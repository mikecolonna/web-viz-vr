import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class VREntrance extends Component {

    initVR() {
        console.log('loading vr...');

        // this get request may not be necessary... just make obj source in React 360
        // point to file thats already in static assets
        $.ajax({
            method: "GET",
            url: "/load-model",
            success: function(data) {
                // get model filepath ?
            }
        });

        window.location.href = 'vr/index.html';
    }

    render() {
        return(
            <div className="VRButton-container">
                <h3>Step 2</h3>
                <p>Enter VR and view your data!</p>
                <Button onClick={this.initVR.bind(this)}>
                    Enter VR
                </Button>
            </div>
        );
    }
}

export default VREntrance;
