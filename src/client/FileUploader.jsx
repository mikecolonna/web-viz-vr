import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
// import { convertToOBJ } from '../server/vtkEntrance'
import $ from 'jquery';

class FileUploader extends Component {

    uploadFile(e) {
        e.preventDefault();     // don't refresh
        console.log('uploading file!');

        // grab file
        let form = e.target;
        const file = form['file'].files[0];

        // send to server in POST request
        let formData = new FormData();
        formData.append("userFile", file);      // may have to make it a blob
        $.ajax({
            method: "POST",
            data: formData,
            contentType: false,
            processData: false,
            url: '/upload',
            error: function(data) {
                console.log('error uploading file');
            },
            success: function(data) {
                console.log('success!');
            }
        });


        // this needs to take place after a POST request, called from inside the server, not here
        // convertToOBJ();
    }

    render() {
        return (
            <div className="FileUploader-container">
                <h3>Step 1</h3>
                <p>Upload a .vtk file, then click 'Upload File'.</p>
                <Form onSubmit={this.uploadFile.bind(this)} enctype="multipart/form-data">
                    <Form.Row>
                        <Form.Label>File</Form.Label>
                        <Form.Control name="file" type="file" accept=".vtk"/>
                        <Button id='submit-button' variant='primary' type='submit'>
                            Upload File
                        </Button>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}

export default FileUploader;
