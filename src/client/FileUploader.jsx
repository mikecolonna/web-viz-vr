import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class FileUploader extends Component {

    uploadFile(e) {
        e.preventDefault();     // don't refresh
        console.log('uploading file!');
    }

    render() {
        return (
            <Form onSubmit={this.uploadFile.bind(this)}>
                <Form.Row>
                    <Form.Label>File</Form.Label>
                    <Form.Control type="file" accept=".vtk"/>
                    <Button id='submit-button' variant='primary' type='submit'>
                        Upload File
                    </Button>
                </Form.Row>
            </Form>
        );
    }
}

export default FileUploader;
