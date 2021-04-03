var express = require('express');
const cors = require('cors');
var posts = require('./routes/posts');

var app = express();
app.use(cors());

app.get('/', function(req, res) {
    res.send("Hello World!");
})

app.use('/posts', posts);

app.listen(8080, function() {
    // console.log("Backend App is listening at http://localhost.8080");
})

module.exports = app;

