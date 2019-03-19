const express = require('express');
const os = require('os');
const multer = require('multer');
const upload = multer({ dest: 'files/' });

const app = express();

app.use(express.static('dist'));
app.use(express.static('src/client'));

// routes
app.post('/upload', upload.single('userFile'), function(req, res) {
    console.log('received file!');
    console.log(req.file);

    // call C++ module from here
    // create filepath of obj file
});

app.get('/load-file', function(req, res) {
    // return model filepath from src/client/vr/static_assets
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
