const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', function(req, res) {
    let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
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

router.get('/movieCast/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/movieReviews/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/movie/" + id + "/reviews?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});


router.get('/recommendedMovies/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/movie/" + id + "/recommendations?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/similarMovies/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/movie/" + id + "/similar?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});


router.get('/tvshowDetails/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/tv/"+ id + "?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/tvshowVideos/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/tv/" + id + "/videos?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/tvshowCast/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/tv/" + id + "/credits?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/tvshowReviews/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/tv/" + id + "/reviews?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});


router.get('/recommendedTvShows/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/tv/" + id + "/recommendations?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/similarTvShows/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/tv/" + id + "/similar?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});


router.get('/search/:term', function(req, res) {
    let term = req.params.term;
    let url = "https://api.themoviedb.org/3/search/multi?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&query=" + term;
    axios.get(url).then(posts => {
        let formattedData = [];
        for (let i = 0; i < 7; i++) {
            let obj = posts.data.results[i];
            if (obj.media_type === 'movie') {
                formattedData.push({id: obj.id, 'title': obj.title, 'backdrop_path': 'https://image.tmdb.org/t/p/w500' + obj.backdrop_path, 'media_type': obj.media_type});
            } else if (obj.media_type === 'tv') {
                formattedData.push({id: obj.id, 'title': obj.name, 'backdrop_path': 'https://image.tmdb.org/t/p/w500' + obj.backdrop_path, 'media_type': obj.media_type})
            }
        }
        res.json(formattedData);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/castDetails/:person', function(req, res) {
    let person = req.params.person;
    let url = "https://api.themoviedb.org/3/person/" + person + "?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/castExternal/:person', function(req, res) {
    let person = req.params.person;
    let url = "https://api.themoviedb.org/3/person/" + person + "/external_ids?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&page=1";
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    })
});

module.exports = router;

