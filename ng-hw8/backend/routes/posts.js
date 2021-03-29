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

router.get('/popularMovies', function(req, res) {
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/topRatedMovies', function(req, res) {
    let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/trendingMovies', function(req, res) {
    let url = "https://api.themoviedb.org/3/trending/movie/day?api_key=5cb255aabd11100bc162d4bd13d7359c";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/popularTvShows', function(req, res) {
    let url = "https://api.themoviedb.org/3/tv/popular?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/topRatedTvShows', function(req, res) {
    let url = "https://api.themoviedb.org/3/tv/top_rated?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/trendingTvShows', function(req, res) {
    let url = "https://api.themoviedb.org/3/trending/tv/day?api_key=5cb255aabd11100bc162d4bd13d7359c";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/movieDetails/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/movieVideos/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('tvshowDetails/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/tv/"+ id + "?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('tvshowVideos/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/tv/" + id + "/videos?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

module.exports = router;

