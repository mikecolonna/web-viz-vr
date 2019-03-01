import React, { Component } from 'react';
import './app.css';
import Header from './Header.jsx';
import FileUploader from './FileUploader.jsx';
import VREntrance from './VREntrance.jsx';

class App extends Component {

  render() {

    return (
        <div>
            <Header />
            <FileUploader />
            <VREntrance />
        </div>
    );
  }
}

export default App;
