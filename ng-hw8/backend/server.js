const express = require('express');
const path = require('path');
const cors = require('cors');
const posts = require('./routes/posts');

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'ng-usc-films')));

app.use('/apis/posts', posts);

app.use('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/ng-usc-films/index.html'));
});

app.listen(8080, function() {
    // console.log("Backend App is listening at http://localhost.8080");
})

module.exports = app;

