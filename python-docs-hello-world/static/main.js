;(function () {
    // get all elements
    var oTrendingPic = document.getElementById("demo-pic"),
        oTrendingTitle = document.getElementById("demo"),
        oTvPic = document.getElementById("tv-pic"),
        oTvTitle = document.getElementById("tv-title"),
        oHomeBtn =  document.getElementById("home-btn"),
        oSearchBtn = document.getElementById("search-btn"),
        oTabHeaders = document.getElementsByClassName("tab-btn"),
        oTabContents = document.getElementsByClassName("tab-content"),
        oSearchFormBtn = document.getElementById("search-form-btn"),
        oClearBtn = document.getElementById("clear-btn"),

        trendingMovies = [],
        tvShows = [],
        searchResults = [],
        genres = [],
        genresMovieList = [],
        genresTVList = [],
        movieDetails = {},
        tvDetails = {},
        credits = [],
        reviews = [],
        testArray = [],
        btnId,
        btnNo,
        btnType,
        len = 0,
        intervalId,
        isHome = true,
        isShowed = false,
        isLoaded = false;


    function init() {
        loadHomePage();
        bindEvent();
        getMovieGenres();
        getTVGenres();
    }

    function bindEvent() {
        oHomeBtn.addEventListener('click', function (){loadHomePage()}, {once: false});
        oSearchBtn.addEventListener('click', function(){
            // removeElements();
            loadSearchPage()}, {once: false});
        oSearchFormBtn.addEventListener('click', function(){showResults()}, {once: false});
        oClearBtn.addEventListener('click', function(){clearFields()}, {once: false});
    }

    function getTrending() {
        // return new Promise(function(resolve, reject) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    for (var i = 0; i < 5; i++) {
                        trendingMovies.push({});
                        trendingMovies[i].title = data.results[i].title;
                        trendingMovies[i].backdrop_path = data.results[i].backdrop_path;
                        trendingMovies[i].release_date = data.results[i].release_date;
                        trendingMovies[i].year = parseInt(trendingMovies[i].release_date);
                    }
                    var trendingShowName = trendingMovies[0].title === undefined ? "N/A" : trendingMovies[0].title,
                        trendingShowYear = trendingMovies[0].year === undefined ? "N/A" : trendingMovies[0].year;
                    console.log(trendingShowName);
                    console.log(trendingShowYear);
                    oTrendingTitle.innerHTML = `${trendingShowName} (${trendingShowYear})`;
                    oTrendingPic.innerHTML = trendingMovies[0].backdrop_path == null ? `<img src="https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg" alt="">` : `<img src="https://image.tmdb.org/t/p/w780/${trendingMovies[0].backdrop_path}" alt="">`;
                    // resolve();
                }
            };
            xhttp.open("GET", "https://mono-csci570-python.azurewebsites.net/trending", true);
            xhttp.send();
        // });
    }

    function getTVShows() {
        // return new Promise(function(resolve, reject) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    for (var i = 0; i < 5; i++) {
                        tvShows.push({});
                        tvShows[i].name = data.results[i].name;
                        tvShows[i].backdrop_path = data.results[i].backdrop_path;
                        tvShows[i].first_air_date = data.results[i].first_air_date;
                        tvShows[i].year = parseInt(tvShows[i].first_air_date);
                    }
                    oTvPic.innerHTML = tvShows[0].backdrop_path == null ? `<img src="https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg" alt="">` : `<img src="https://image.tmdb.org/t/p/w780/${tvShows[0].backdrop_path}" alt="">`;
                    var tvShowName = tvShows[0].name === undefined ? "N/A" : tvShows[0].name,
                        tvShowYear = tvShows[0].year === undefined ? "N/A" : tvShows[0].year;
                    oTvTitle.innerHTML = `${tvShowName} (${tvShowYear})`;
                    // resolve();
                }
            };
            xhttp.open("GET", "https://mono-csci570-python.azurewebsites.net/tvshows", true);
            xhttp.send();
        // });
    }

    var x = 1;
    function displayNextTrending() {
        x = (x === trendingMovies.length - 1) ? 0 : x + 1;
        oTrendingPic.innerHTML = trendingMovies[x].backdrop_path == null ? `<img src="https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg" alt="">` :  `<img src="https://image.tmdb.org/t/p/w780/${trendingMovies[x].backdrop_path}" alt="">`;
        var trendingShowName = trendingMovies[x].name === undefined ? "N/A" : trendingMovies[x].name,
            trendingShowYear = trendingMovies[x].year === undefined ? "N/A" : trendingMovies[x].year;
        oTvTitle.innerHTML = `${trendingShowName} (${trendingShowYear})`;
        oTrendingTitle.innerHTML = `${trendingMovies[x].title} (${trendingMovies[x].year})`;
        oTvPic.innerHTML = tvShows[x].backdrop_path == null ? `<img src="https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg" alt="">` :  `<img src="https://image.tmdb.org/t/p/w780/${tvShows[x].backdrop_path}" alt="">`;
        var tvShowName = tvShows[x].name === undefined ? "N/A" : tvShows[x].name,
            tvShowYear = tvShows[x].year === undefined ? "N/A" : tvShows[x].year;
        oTvTitle.innerHTML = `${tvShowName} (${tvShowYear})`;
    }

    function setTimer() {
        setInterval(displayNextTrending, 3000);
    }

    function searchKeyword() {
        return new Promise(function(resolve, reject) {
            var keyword = document.getElementsByName("keyword")[0].value;
            var category = document.getElementsByName("category")[0].value;
            clearResults();
            if (keyword == "" || category == "") {
                alert("Please fill out this field");
            } else {
                var xttp = new XMLHttpRequest();
                xttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        var data = JSON.parse(this.responseText);

                        console.log("data" + data[0]);
                        if (!data || data.length === 0 || data === undefined) {
                            var errMsg = document.createElement("div");
                            errMsg.innerHTML = "No result found";
                            errMsg.id = "err-msg";
                            console.log("err!");
                            document.getElementById("result-list").appendChild(errMsg);
                        } else {
                            if (searchResults.length != 0) searchResults = [];
                            var len = Math.min(data.results.length, 10);
                            for (var i = 0; i < len; i++) {
                                searchResults.push({});
                                searchResults[i].id = data.results[i].id;
                                // add media_type
                                switch (category) {
                                    case 'movies':
                                        searchResults[i].media_type = "movie";
                                        break;
                                    case 'tv-shows':
                                        searchResults[i].media_type = "tv";
                                        break;
                                    case 'movies-tv-shows':
                                        searchResults[i].media_type = data.results[i].media_type;
                                        break;
                                }
                                // console.log("data's media_type of No." + i + " is: " + data.results[i].media_type);

                                switch (searchResults[i].media_type) {
                                    case 'movie':
                                        searchResults[i].title = data.results[i].title;
                                        searchResults[i].release_date = data.results[i].release_date;
                                        break;
                                    case 'tv':
                                        searchResults[i].title = data.results[i].name;
                                        searchResults[i].release_date = data.results[i].first_air_date;
                                        break;
                                }
                                searchResults[i].overview = data.results[i].overview;
                                searchResults[i].poster_path = data.results[i].poster_path;
                                searchResults[i].vote_average = data.results[i].vote_average;
                                searchResults[i].vote_count = (data.results[i].vote_count === undefined) ? 0 : data.results[i].vote_count;
                                searchResults[i].genre_ids = (data.results[i].genre_ids === undefined) ? "none" : data.results[i].genre_ids;
                                // console.log("media_type of No." + i + " is: " + searchResults[i].media_type);
                                // console.log("title of No." + i + " is: " + searchResults[i].title);
                                // console.log("release_date of No." + i + " is: " + searchResults[i].release_date);
                                //
                                // console.log("genre_ids of No." + i + " is: " + searchResults[i].genre_ids);
                                // console.log("vote_count of No." + i + " is: " + searchResults[i].vote_count);

                                //get genres name
                                genres.push([]);
                                // console.log(searchResults[i].genre_ids);
                                for (var j = 0; j < searchResults[i].genre_ids.length; j++) {
                                    // console.log("Wanna find genre name of id# " + searchResults[i].genre_ids[j]);
                                    // console.log(genresMovieList);
                                    var genreExistsInMovies = genresMovieList.find(elem => elem.id === searchResults[i].genre_ids[j]);
                                    var genreExistsInTVs = genresTVList.find(elem => elem.id === searchResults[i].genre_ids[j]);
                                    var genreName;
                                    if (genreExistsInMovies != undefined) {
                                        genreName = genreExistsInMovies.name;
                                    } else if (genreExistsInTVs != undefined) {
                                        genreName = genreExistsInTVs.name;
                                    } else {
                                        genreName = "N/A";
                                    }
                                    if (searchResults[i].genre_ids.length === 0) {
                                        genres[i].push("N/A");
                                    } else {
                                        genres[i].push(genreName);
                                    }
                                }
                            }

                        }
                        resolve();
                        // showResults();
                    }
                };
                let cat;
                switch (category) {
                    case 'movies':
                        cat = 'movie';
                        break;
                    case 'tv-shows':
                        cat = 'tv';
                        break;
                    case 'movies-tv-shows':
                        cat = 'multi';
                        break;
                }
                keyword += "%20of";
                let url = "https://mono-csci570-python.azurewebsites.net/searchMovies" + '?keyword=' + keyword + '&category=' + cat;
                xttp.open('GET', url, true);
                xttp.send();
                // console.log(keyword);
                // console.log(category);
                // console.log("I am searching!");
            }
        });

    }

    function getMovieGenres() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                genresMovieList = data.genres;
            }
        };
        xhttp.open("GET", "https://mono-csci570-python.azurewebsites.net/getMovieGenres", true);
        xhttp.send();
    }

    function getTVGenres() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                genresTVList = data.genres;
            }
        };
        xhttp.open("GET", "https://mono-csci570-python.azurewebsites.net/getTVGenres", true);
        xhttp.send();
    }

    function getDetails() {
        return new Promise(function(resolve, reject) {
            let type = searchResults[btnNo].media_type.toString();
            let id = searchResults[btnNo].id.toString();
            var xttp = new XMLHttpRequest();
            xttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    // clear details storage
                    if (movieDetails.length != 0 || tvDetails.length != 0) {
                        movieDetails = {};
                        tvDetails = {};
                    }
                    // store new data
                    if (btnType == 'movie') {
                        movieDetails.id = data.id === undefined ? " " : data.id;
                        movieDetails.title = data.title === undefined ? "N/A" : data.title;
                        movieDetails.runtime = data.runtime === undefined ? "N/A" : data.runtime;
                        movieDetails.release_date = data.release_date === undefined ? "N/A" : data.release_date;

                        if (data.spoken_languages[0] != undefined) {
                            if (data.spoken_languages[0].english_name != undefined) {
                                movieDetails.spoken_languages = data.spoken_languages[0].english_name;
                            } else {
                                movieDetails.spoken_languages = "N/A";
                            }
                        } else {
                            movieDetails.spoken_languages = "N/A";
                        }

                        movieDetails.vote_average = data.vote_average === undefined ? "N/A" : data.vote_average;
                        movieDetails.vote_count = data.vote_count ;
                        movieDetails.poster_path = data.poster_path;
                        movieDetails.backdrop_path = data.backdrop_path;
                        movieDetails.genres = (data.genres === undefined || data.genres === []) ? "N/A" : data.genres;
                    } else {
                        tvDetails.backdrop_path = data.backdrop_path;
                        tvDetails.episode_run_time = data.episode_run_time[0] === undefined ? "N/A" : data.episode_run_time[0];
                        tvDetails.first_air_data = data.first_air_date === undefined ? "N/A" : data.first_air_date;
                        tvDetails.genres = (data.genres === undefined || data.genres === []) ? "N/A" : data.genres;
                        tvDetails.id = data.id === undefined ? " " : data.id;
                        tvDetails.name = data.name === undefined ? "N/A" : data.name;
                        // console.log("[tv details ]" + data.name);
                        tvDetails.number_of_seasons = data.number_of_seasons === undefined ? "N/A" : data.number_of_seasons;
                        tvDetails.overview = data.overview === undefined ? "N/A" : data.overview;
                        tvDetails.poster_path = data.poster_path;

                        if (data.spoken_languages[0] !== undefined) {
                            if (data.spoken_languages[0].english_name !== undefined) {
                                tvDetails.spoken_languages = data.spoken_languages[0].english_name;
                            } else {
                                tvDetails.spoken_languages = "N/A";
                            }
                        } else {
                            tvDetails.spoken_languages = "N/A";
                        }

                        tvDetails.vote_average = data.vote_average;
                        tvDetails.vote_count = data.vote_count;
                        // console.log("[tv details ]" + tvDetails.name);
                        // console.log("[tv details ]" + tvDetails.vote_count);
                    }
                    // showDetails();
                    resolve();
                }
            };

            let url_detail = "https://mono-csci570-python.azurewebsites.net/getDetails" + '?type=' + type + '&id=' + id;
            xttp.open('GET', url_detail, true);
            xttp.send();
        });
    }

    function getCredits() {
        return new Promise(function(resolve, reject) {
            var xttpCredits = new XMLHttpRequest();
            xttpCredits.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    // clear details storage
                    if (credits.length != 0) {
                        credits = [];
                    }
                    for (var i = 0; i < 8; i++) {
                       if (data.cast[i] != undefined) {
                           credits.push({});
                           credits[i].name = data.cast[i].name;
                           //console.log("[get credits ] " + credits[i].name);
                           credits[i].profile_path = data.cast[i].profile_path;
                           //console.log("[get credits ] " + credits[i].profile_path);
                           credits[i].character = data.cast[i].character;
                           //console.log("[get credits ] " + credits[i].character);
                       }
                    }
                    // showCredits();
                    resolve();
                }
            };
            let type2 = searchResults[btnNo].media_type;
            let id2 = searchResults[btnNo].id;
            let url_credit = "https://mono-csci570-python.azurewebsites.net/getCredits" + '?type=' + type2 + '&id=' + id2;
            xttpCredits.open('GET', url_credit, true);
            xttpCredits.send();
        });
    }

    function getReviews() {
        return new Promise(function (resolve, reject) {
            var xhttpReviews = new XMLHttpRequest();
            xhttpReviews.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    // if (data == undefined || data == []) console.log("data is undefined!");
                    // console.log(data);
                    // clear details storage
                    if (reviews.length != 0) {
                        reviews = [];
                    }
                    if (data.results != undefined) {
                        for (var i = 0; i < 5; i++) {
                            if (data.results[i] != undefined) {
                                reviews.push({});
                                reviews[i].username = data.results[i].author_details.username;
                                // console.log("[username] " + data.results[i].author_details.username);
                                reviews[i].content = data.results[i].content;
                                reviews[i].rating = data.results[i].author_details.rating;
                                reviews[i].created_at = data.results[i].created_at;
                            }
                        }
                    }
                    // showReviews();
                    resolve();
                }
            };
            let type = searchResults[btnNo].media_type;
            let id = searchResults[btnNo].id;
            let url_reviews = "https://mono-csci570-python.azurewebsites.net/getReviews" + '?type=' + type + '&id=' + id;
            xhttpReviews.open('GET', url_reviews, true);
            xhttpReviews.send();
        });
    }

    function getInfo() {
        // showDetails();
        // showCredits();
        showReviews();
    }

    async function showResults() {
        await searchKeyword();
        // hideFooter();
        oContainer = document.createElement("div");
        oContainer.id = "r-container";

        if (!isShowed && searchResults.length !== 0) {
           var oShowingResults = document.createElement("div");
           oShowingResults.id = "showing-result";
           oShowingResults.innerHTML = "Showing results...";
           // console.log("Again"+ oShowingResults);
           document.getElementById("result-list").appendChild(oShowingResults);
           document.getElementById("result-list").appendChild(oContainer);
           for (var i = 0; i < searchResults.length; i++) {
               // create elements
               var oList = document.createElement("div"),
                   oInfo = document.createElement("div"),
                   oId = document.createElement("div"),
                   oTitle = document.createElement("div"),
                   oOverview = document.createElement("div"),
                   oPosterPath = document.createElement("div"),
                   oReleaseDate = document.createElement("div"),
                   oReleaseYear = document.createElement("div"),
                   // oRatingStar = document.createElement("span"),
                   oVoteAverage = document.createElement("div"),
                   oVoteCount = document.createElement("div"),
                   oShowMore = document.createElement("button"),
                   oGenreIds = document.createElement("div");


               // assign results to elements
               oId.innerHTML = searchResults[i].id;
               oTitle.innerHTML = searchResults[i].title;
               oOverview.innerHTML = searchResults[i].overview;
               oPosterPath.innerHTML = (searchResults[i].poster_path == null) ? `<img src="https://cinemaone.net/images/movie_placeholder.png" alt=""/>` : `<img src="https://image.tmdb.org/t/p/w185/${searchResults[i].poster_path}" alt=""/>`;
               // oReleaseDate.innerHTML = searchResults[i].release_date;
               if (!genres[i] || genres[i].length === 0) {
                   oReleaseYear.innerHTML = parseInt(searchResults[i].release_date) + "   |  " + "N/A";
               } else {
                   oReleaseYear.innerHTML = parseInt(searchResults[i].release_date) + "   |  " + genres[i];
               }

               // oRatingStar.innerHTML = "\u2B51";
               var rating = (parseFloat(searchResults[i].vote_average) / 2.0),
                   ratingFloat = Number.isInteger(rating) ? rating.toString() + ".0" : rating.toString();
               oVoteAverage.innerHTML = "\u2B51 " + ratingFloat + "/5";
               oVoteCount.innerHTML =  searchResults[i].vote_count.toString() + " votes";
               oShowMore.innerHTML = "Show more";


               // oGenreIds.innerHTML = genres[i];
               // id and className
               oList.id = "r-list" + i.toString();
               oList.className = "r-list-class";
               oInfo.id = "r-info" + i.toString();
               oInfo.className = "r-info-class";
               oId.className = "r-id";
               oTitle.className = "r-title";
               oOverview.className = "r-overview";
               oPosterPath.className = "r-poster-path";
               // oReleaseDate.className = "r-release-date";
               oReleaseYear.className = "r-release-year";
               oVoteAverage.className = "r-vote-average";
               // oRatingStar.className = "r-rating-star";
               oVoteCount.className = "r-vote-count";
               oShowMore.className = "r-show-more";
               oShowMore.id = i.toString();
               // oGenreIds.className = "r-genre-ids";


               document.getElementById("r-container").appendChild(oList);
               document.getElementById("r-list" + i.toString()).appendChild(oPosterPath);
               document.getElementById("r-list" + i.toString()).appendChild(oInfo);
               document.getElementById("r-info" + i.toString()).appendChild(oTitle);
               // document.getElementById("r-info").appendChild(oId);
               document.getElementById("r-info" + i.toString()).appendChild(oReleaseYear);
               // document.getElementById("r-info" + i.toString()).appendChild(oRatingStar);
               document.getElementById("r-info" + i.toString()).appendChild(oVoteAverage);
               document.getElementById("r-info"+ i.toString()).appendChild(oVoteCount);
               // document.getElementById("r-info" + i.toString()).appendChild(oGenreIds);
               document.getElementById("r-info" + i.toString()).appendChild(oOverview);
               document.getElementById("r-info" + i.toString()).appendChild(oShowMore);
               oShowMore.addEventListener('click', function(){
                   btnType = searchResults[parseInt(this.id)].media_type.toString();
                   btnNo = parseInt(this.id);
                   getInfo();}, false);
               isShowed = true;
           }
       }
    }

    async function showDetails() {
        await getDetails();
        return new Promise(function (resolve, reject) {
            // make back fixed
            document.getElementById("background").style.position = "fixed";
            var dList = document.createElement("div"),
                dCard = document.createElement("div"),
                dOuterContainer = document.createElement("div"),
                dContainer = document.createElement("div"),
                dPosterPath = document.createElement("div"),
                dClose = document.createElement("div"),
                dInfo = document.createElement("div"),
                dTitle = document.createElement("div"),
                dMore = document.createElement("div"),
                dYear = document.createElement("div"),
                dVoteAverage = document.createElement("div"),
                dVoteCount = document.createElement("div"),
                dOverview = document.createElement("div"),
                dLanguage = document.createElement("div"),

                dCastList = document.createElement("div"),
                dCastTitle = document.createElement("div"),

                dReviewList = document.createElement("div"),
                dReviewTitle = document.createElement("div");
            // information list
            dList.id = "d-list";
            dCard.id = "d-card";
            dOuterContainer.id = "d-outer-container";
            dContainer.id = "d-container";
            dPosterPath.className = "d-poster-path";
            dClose.className = "d-close";
            dInfo.id = "d-list";
            dTitle.className = "d-title";
            dMore.className = "d-more";
            dYear.className = "d-year";
            dVoteAverage.className = "d-vote-average";
            dVoteCount.className = "d-vote-count";
            dOverview.className = "d-overview";
            dLanguage.className = "d-language";

            dCastList.id = "d-cast-list";
            dCastTitle.className = "d-cast-title";

            dReviewList.id = "d-review-list";
            dReviewTitle.className = "d-review-title";

            console.log("Its genres are: " + genres[btnNo]);

            if (btnType == 'movie') {
                dPosterPath.innerHTML = movieDetails.backdrop_path == null ? `<img src="https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg" alt="">` : `<img src="https://image.tmdb.org/t/p/w780/${movieDetails.backdrop_path}" alt="">`;
                dTitle.innerHTML = movieDetails.title;
                if (!genres[btnNo] || genres[btnNo].length === 0) {
                    dYear.innerHTML = parseInt(movieDetails.release_date) + "   |  " + "N/A";
                } else {
                    dYear.innerHTML = parseInt(movieDetails.release_date) + "   |  " + genres[btnNo];
                }
                var rating1 = (parseFloat(movieDetails.vote_average) / 2.0),
                    ratingFloat1 = Number.isInteger(rating1) ? rating1.toString() + ".0" : rating1.toString();
                dVoteAverage.innerHTML = "\u2B51 " + ratingFloat1 + "/5";
                dVoteCount.innerHTML =  movieDetails.vote_count.toString() + " votes";
                dOverview.innerHTML = searchResults[btnNo].overview;
                dLanguage.innerHTML = "Spoken languages: " + movieDetails.spoken_languages;
                console.log("Spoken languages: " + movieDetails.spoken_languages);
                // dInfo.innerHTML = `"https://www.themoviedb.org/movie/${movieDetails.id}"`;
                dMore.onclick = function openUrl() {window.open("http://themoviedb.org/movie/" + searchResults[btnNo].id);};
            } else {
                dPosterPath.innerHTML = tvDetails.backdrop_path == null ? `<img src="https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg" alt="">` : `<img src="https://image.tmdb.org/t/p/w780/${tvDetails.backdrop_path}" alt="">`;
                dTitle.innerHTML = tvDetails.name ;
                if (!genres[btnNo] || genres[btnNo].length === 0) {
                    dYear.innerHTML = parseInt(tvDetails.first_air_data) + "   |  " + "N/A";
                } else {
                    dYear.innerHTML = parseInt(tvDetails.first_air_data) + "   |  " + genres[btnNo];
                }
                var rating2 = (parseFloat(tvDetails.vote_average) / 2.0),
                    ratingFloat2 = Number.isInteger(rating2) ? rating2.toString() + ".0" : rating2.toString();
                dVoteAverage.innerHTML = "\u2B51 " + ratingFloat2 + "/5";
                dVoteCount.innerHTML =  tvDetails.vote_count.toString() + " votes";
                dOverview.innerHTML = searchResults[btnNo].overview;
                dLanguage.innerHTML = "Spoken languages: " + tvDetails.spoken_language;
                console.log("Spoken languages: " + tvDetails.spoken_language);
                dMore.onclick = function openUrl() {window.open("http://themoviedb.org/tv/" + searchResults[btnNo].id);};
                // dInfo.innerHTML = `"https://www.themoviedb.org/tv/${tvDetails.id}"`;
            }

            dMore.innerHTML = '\u24D8';
            dClose.innerHTML = '\u2716';
            dCastTitle.innerHTML = "Cast";
            dReviewTitle.innerHTML = "Reviews";

            // append information list
            document.getElementById("details-list").appendChild(dList);
            document.getElementById("d-list").appendChild(dCard);
            document.getElementById("d-card").appendChild(dOuterContainer);
            document.getElementById("d-outer-container").appendChild(dClose);
            dClose.addEventListener('click', function(){clearDetails()}, false);
            document.getElementById("d-outer-container").appendChild(dContainer);
            document.getElementById("d-container").appendChild(dPosterPath);
            document.getElementById("d-container").appendChild(dTitle);
            document.getElementById("d-container").appendChild(dMore);
            document.getElementById("d-container").appendChild(dYear);
            document.getElementById("d-container").appendChild(dVoteAverage);
            document.getElementById("d-container").appendChild(dVoteCount);
            document.getElementById("d-container").appendChild(dOverview);
            document.getElementById("d-container").appendChild(dLanguage);

            // append cast list
            document.getElementById("d-container").appendChild(dCastTitle);
            document.getElementById("d-container").appendChild(dCastList);
            // append review list
            document.getElementById("d-container").appendChild(dReviewTitle);
            document.getElementById("d-container").appendChild(dReviewList);

            resolve();
        })
    }

    async function showCredits() {
        await getCredits();
        await showDetails();

        return new Promise(function (resolve, reject) {
            // if (movieDetails != undefined) {
                for (var k = 0; k < 8; k++) {
                    if (credits[k] != undefined) {
                    var dCastCard = document.createElement("div"),
                        dCastProfile = document.createElement("div"),
                        dCastName = document.createElement("div"),
                        dCastAs = document.createElement("div"),
                        dCastCharacter = document.createElement("div");

                    dCastCard.id = "d-cast-card" + k.toString();
                    dCastProfile.className = "d-cast-profile";
                    dCastName.className = "d-cast-name";
                    dCastAs.className = "d-cast-as";
                    dCastCharacter.className = "d-cast-character";

                    dCastProfile.innerHTML = credits[k].profile_path == null ? `<img src="https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png" alt="">` : `<img src="https://image.tmdb.org/t/p/w185/${credits[k].profile_path}" alt="">`;
                    dCastName.innerHTML = credits[k].name === undefined ? "   " : credits[k].name;
                    dCastAs.innerHTML = "AS";
                    dCastCharacter.innerHTML = credits[k].character === undefined ? "   " : credits[k].character;

                    document.getElementById("d-cast-list").appendChild(dCastCard);
                    document.getElementById("d-cast-card" + k.toString()).appendChild(dCastProfile);
                    document.getElementById("d-cast-card" + k.toString()).appendChild(dCastName);
                    document.getElementById("d-cast-card" + k.toString()).appendChild(dCastAs);
                    document.getElementById("d-cast-card" + k.toString()).appendChild(dCastCharacter);
                }
            }
            resolve();
        });

    }

    async function showReviews() {
        await getReviews();
        await showCredits();

        for (var k = 0; k < 5; k++) {
           if (reviews[k] !== undefined) {
               var dReviewRow = document.createElement("div"),
                   dUsername = document.createElement("div"),
                   dCreatedAt = document.createElement("div"),
                   dThisRating = document.createElement("div"),
                   dContent = document.createElement("div"),
                   dRatingAlt = document.createElement("br"),
                   dHR = document.createElement("hr");
               dReviewRow.id = "d-review-row" + k.toString();
               dUsername.className = "d-username";
               dCreatedAt.className = "d-created-at";
               dThisRating.className = "d-this-rating";
               dContent.className = "d-content";
               dHR.className = 'd-hr';

               // console.log(reviews);
               dUsername.innerHTML = reviews[k].username;

               dCreatedAt.innerHTML = " on " + reviews[k].created_at;
               if (reviews[k].rating === undefined) {
                   dThisRating.innerHTML = "     ";
               } else {
                   console.log(reviews[k].rating);
                   var rating = parseFloat(reviews[k].rating) / 2.0,
                       ratingFloat = Number.isInteger(rating) ? rating.toString() + ".0" : rating.toString();
                   dThisRating.innerHTML = "\u2B51 " + ratingFloat  + "/5";
               }
               dContent.innerHTML = reviews[k].content;

               document.getElementById("d-review-list").appendChild(dReviewRow);
               document.getElementById("d-review-row" + k.toString()).appendChild(dUsername);
               document.getElementById("d-review-row" + k.toString()).appendChild(dCreatedAt);
               if (reviews[k].rating != null) {
                   document.getElementById("d-review-row" + k.toString()).appendChild(dThisRating);
               } else {
                   document.getElementById("d-review-row" + k.toString()).appendChild(dRatingAlt);
               }
               document.getElementById("d-review-row" + k.toString()).appendChild(dContent);
               document.getElementById("d-review-row" + k.toString()).appendChild(dHR);
           }
        }
    }

    function clearDetails() {
        document.getElementById("d-list").remove();
        document.getElementById("background").style.position = "static";
        movieDetails = {};
        tvDetails = {};
        credits = [];
        reviews = [];
    }

    function clearFields() {
        document.getElementsByName("keyword")[0].value = "";
        document.getElementsByName("category")[0].value = "";
        clearResults();
    }

    function clearResults() {
        var showingResults = document.getElementById("showing-result"),
            rContainer = document.getElementById('r-container'),
            errMsg = document.getElementById("err-msg");
        if (showingResults != null && rContainer != null) {
            showingResults.remove();
            rContainer.remove();
            searchResults = [];
            genres = [];
            movieDetails = [];
            tvDetails = [];
            credits = [];
            reviews = [];
            isShowed = false;
        }
        if (errMsg != null) errMsg.remove();
    }

    function activeBtn(btnId, contentId) {
        for (var i = 0; i < oTabHeaders.length; i++) {
            oTabHeaders[i].className = 'tab-btn';

        }
        for (var j = 0; j < oTabContents.length; j++) {
            oTabContents[j].className = 'tab-content';
        }
        var btn = document.getElementById(btnId),
            content = document.getElementById(contentId);
        btn.className += ' active';
        content.className += ' active';
    }

    function loadHomePage() {
        clearFields();
        activeBtn("home-btn", "home");
        if (oHomeBtn.className === 'tab-btn active') {
            if (!isLoaded) {
                getTrending();
                getTVShows();
                isLoaded = true;
                isHome = true;
                setTimer();
                // timer;
            }
        }
    }

    function removeElements() {
        oTrendingPic.innerHTML = " ";
        oTrendingTitle.innerHTML = " ";
        oTvPic.innerHTML = " ";
        oTvTitle.innerHTML = " ";
    }

    function loadSearchPage() {
        activeBtn("search-btn", "search");
        isHome = false;
        isLoaded = false;
    }

    init();

})()






