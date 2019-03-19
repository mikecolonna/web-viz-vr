import React, { Component } from 'react';
import './app.css';
import Header from './Header.jsx';
import FileUploader from './FileUploader.jsx';
import VREntrance from './VREntrance.jsx';
import './App.css';

class App extends Component {

  render() {

    return (
        <div>
            <Header />
            <div className="App-container">
                <FileUploader />
                <VREntrance />
            </div>
        </div>
    );
  }
}

export default App;
