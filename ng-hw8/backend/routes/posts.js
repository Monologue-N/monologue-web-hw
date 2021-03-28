const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', function(req, res) {
    let url = "https://api.themoviedb.org/3/trending/movie/week?api_key=5cb255aabd11100bc162d4bd13d7359c";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://jsonplaceholder.typicode.com/posts/" + id;
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

module.exports = router;


// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3000
//
// app.get('/', (req, res) => res.send('Hello World!'))
//
// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
