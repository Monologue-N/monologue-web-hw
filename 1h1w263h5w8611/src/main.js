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
        btnId,
        btnNo,
        btnType,
        len = 0,
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
        oSearchBtn.addEventListener('click', function(){loadSearchPage()}, {once: false});
        oSearchFormBtn.addEventListener('click', function(){searchKeyword()}, {once: false});
        oClearBtn.addEventListener('click', function(){clearFields()}, {once: false});
    }

    function getTrending() {
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
                    oTrendingPic.innerHTML = `<img src="https://image.tmdb.org/t/p/w780/${trendingMovies[0].backdrop_path}" alt="">`;
                    oTrendingTitle.innerHTML = `${trendingMovies[0].title} (${trendingMovies[0].year})`;
                }
            };
            xhttp.open("GET", "http://127.0.0.1:5000/trending", true);
            xhttp.send();
    }

    function getTVShows() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data2 = JSON.parse(this.responseText);
                for (var i = 0; i < 5; i++) {
                    tvShows.push({});
                    tvShows[i].name = data2.results[i].name;
                    tvShows[i].backdrop_path = data2.results[i].backdrop_path;
                    tvShows[i].first_air_date = data2.results[i].first_air_date;
                    tvShows[i].year = parseInt(tvShows[i].first_air_date);
                }
                oTvPic.innerHTML = `<img src="https://image.tmdb.org/t/p/w780/${tvShows[0].backdrop_path}" alt="">`;
                oTvTitle.innerHTML = `${tvShows[0].name} (${tvShows[0].year})`;
            }
        };
        xhttp.open("GET", "http://127.0.0.1:5000/tvshows", true);
        xhttp.send();
    }

    var x = 1;
    function displayNextTrending() {
        x = (x === trendingMovies.length - 1) ? 0 : x + 1;
        oTrendingPic.innerHTML = `<img src="https://image.tmdb.org/t/p/w780/${trendingMovies[x].backdrop_path}" alt="">`;
        oTrendingTitle.innerHTML = `${trendingMovies[x].title} (${trendingMovies[x].year})`;
        oTvPic.innerHTML = `<img src="https://image.tmdb.org/t/p/w780/${tvShows[x].backdrop_path}" alt="">`;
        oTvTitle.innerHTML = `${tvShows[x].name} (${tvShows[x].year})`;
    }

    function setTimer() {
       if (isHome) {
           setInterval(displayNextTrending, 3000);
       } else {
           clearInterval(setInterval(displayNextTrending, 3000));
       }
    }

    function searchKeyword() {
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
                    if (searchResults.length != 0) searchResults = [];
                    len = searchResults.length;
                    for (var i = 0; i < data.results.length; i++) {
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
                        // console.log("id is " + searchResults[i].id);
                        // console.log("The title is " + searchResults[i].title);
                        searchResults[i].overview = data.results[i].overview;
                        searchResults[i].poster_path = data.results[i].poster_path;
                        searchResults[i].vote_average = data.results[i].vote_average;
                        searchResults[i].vote_count = data.results[i].vote_count;
                        searchResults[i].genre_ids = data.results[i].genre_ids;

                        //get genres name
                        genres.push([]);
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
                                genreName = "";
                            }
                            genres[i].push(genreName);
                        }
                    }
                    showResults();
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
            let url = "http://127.0.0.1:5000/searchMovies" + '?keyword=' + keyword + '&category=' + cat;
            xttp.open('GET', url, true);
            xttp.send();
            // console.log(keyword);
            // console.log(category);
            // console.log("I am searching!");
        }
    }

    function getMovieGenres() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                genresMovieList = data.genres;
            }
        };
        xhttp.open("GET", "http://127.0.0.1:5000/getMovieGenres", false);
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
        xhttp.open("GET", "http://127.0.0.1:5000/getTVGenres", false);
        xhttp.send();
    }

    function getDetails() {
        let type = searchResults[btnNo].media_type.toString();
        let id = searchResults[btnNo].id.toString();
        var xttp = new XMLHttpRequest();
        xttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data3 = JSON.parse(this.responseText);
                // clear details storage
                if (movieDetails.length != 0 || tvDetails.length != 0) {
                    movieDetails = {};
                    tvDetails = {};
                }
                // store new data
                if (btnType == 'movie') {
                    movieDetails.id = data3.id;
                    movieDetails.title = data3.title;
                    movieDetails.runtime = data3.runtime;
                    movieDetails.release_date = data3.release_date;
                    movieDetails.spoken_languages = data3.spoken_languages[0].english_name;
                    movieDetails.vote_average = data3.vote_average;
                    movieDetails.vote_count = data3.vote_count;
                    movieDetails.poster_path = data3.poster_path;
                    movieDetails.backdrop_path = data3.backdrop_path;
                    movieDetails.genres = data3.genres;
                } else {
                    tvDetails.backdrop_path = data3.backdrop_path;
                    tvDetails.episode_run_time = data3.episode_run_time[0];
                    tvDetails.first_air_data = data3.first_air_date;
                    tvDetails.genres = data3.genres;
                    tvDetails.id = data3.id;
                    tvDetails.name = data3.name;
                    // console.log("[tv details ]" + data3.name);
                    tvDetails.number_of_seasons = data3.number_of_seasons;
                    tvDetails.overview = data3.overview;
                    tvDetails.poster_path = data3.poster_path;
                    tvDetails.spoken_languages = data3.spoken_languages[0].english_name;
                    tvDetails.vote_average = data3.vote_average;
                    tvDetails.vote_count = data3.vote_count;
                    // console.log("[tv details ]" + tvDetails.name);
                    // console.log("[tv details ]" + tvDetails.vote_count);
                }
                showDetails();
            }
        };



        let url_detail = "http://127.0.0.1:5000/getDetails" + '?type=' + type + '&id=' + id;
        xttp.open('GET', url_detail, false);
        xttp.send();
    }

    function getCredits() {
        var xttpCredits = new XMLHttpRequest();
        xttpCredits.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data4 = JSON.parse(this.responseText);
                // clear details storage
                if (credits.length != 0) {
                    credits = [];
                }
                for (var i = 0; i < 8; i++) {
                    credits.push({});
                    credits[i].name = data4.cast[i].name;
                    //console.log("[get credits ] " + credits[i].name);
                    credits[i].profile_path = data4.cast[i].profile_path;
                    //console.log("[get credits ] " + credits[i].profile_path);
                    credits[i].character = data4.cast[i].character;
                    //console.log("[get credits ] " + credits[i].character);
                }
                showCredits();
            }
        };
        let type2 = searchResults[btnNo].media_type;
        let id2 = searchResults[btnNo].id;
        let url_credit = "http://127.0.0.1:5000/getCredits" + '?type=' + type2 + '&id=' + id2;
        xttpCredits.open('GET', url_credit, false);
        xttpCredits.send();
    }

    function getReviews() {
        var xhttpReviews = new XMLHttpRequest();
        xhttpReviews.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data5 = JSON.parse(this.responseText);
                if (data5 == undefined || data5 == []) console.log("data is undefined!");
                console.log(data5);
                // clear details storage
                // if (reviews.length != 0) {
                //     reviews = [];
                // }
                if (data5.results != undefined) {
                    for (var i = 0; i < 5; i++) {
                        if (data5.results[i] != undefined) {
                            reviews.push({});
                            reviews[i].username = data5.results[i].author_details.username;
                            console.log("[username] " + data5.results[i].author_details.username);
                            reviews[i].content = data5.results[i].content;
                            reviews[i].rating = data5.results[i].author_details.rating;
                            reviews[i].created_at = data5.results[i].created_at;
                        }
                    }
                }
                console.log(reviews);
               showReviews();
            }
        };
        let type = searchResults[btnNo].media_type;
        let id = searchResults[btnNo].id;
        let url_reviews = "http://127.0.0.1:5000/getReviews" + '?type=' + type + '&id=' + id;
        xhttpReviews.open('GET', url_reviews, false);
        xhttpReviews.send();
    }

    function getInfo() {
        getDetails();
        getCredits();
        getReviews();
    }

    function showResults() {
       if (!isShowed) {
           var oShowingResults = document.createElement("div"),
               oContainer = document.createElement("div");
           oShowingResults.id = "showing-result";
           oContainer.id = "r-container";
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
               oReleaseYear.innerHTML = parseInt(searchResults[i].release_date) + "   |  " + genres[i];
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

    function showDetails() {
        // make back fixed
        document.getElementById("back").style.position = "fixed";
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

        if (btnType == 'movie') {
            dPosterPath.innerHTML = `<img src="https://image.tmdb.org/t/p/w780/${movieDetails.backdrop_path}" alt="">`;
            dTitle.innerHTML = movieDetails.title;
            dYear.innerHTML = parseInt(movieDetails.release_date) + "   |  " + genres[btnNo];
            var rating1 = (parseFloat(movieDetails.vote_average) / 2.0),
                ratingFloat1 = Number.isInteger(rating1) ? rating1.toString() + ".0" : rating1.toString();
            dVoteAverage.innerHTML = "\u2B51 " + ratingFloat1 + "/5";
            dVoteCount.innerHTML =  movieDetails.vote_count.toString() + " votes";
            dOverview.innerHTML = searchResults[btnNo].overview;
            dLanguage.innerHTML = "Spoken languages: " + movieDetails.spoken_languages;
            // dInfo.innerHTML = `"https://www.themoviedb.org/movie/${movieDetails.id}"`;
        } else {
            dPosterPath.innerHTML = `<img src="https://image.tmdb.org/t/p/w780/${tvDetails.backdrop_path}" alt="">`;
            dTitle.innerHTML = tvDetails.name ;
            dYear.innerHTML = parseInt(tvDetails.first_air_data) + "   |  " + genres[btnNo];
            var rating2 = (parseFloat(tvDetails.vote_average) / 2.0),
                ratingFloat2 = Number.isInteger(rating2) ? rating2.toString() + ".0" : rating2.toString();
            dVoteAverage.innerHTML = "\u2B51 " + ratingFloat2 + "/5";
            dVoteCount.innerHTML =  tvDetails.vote_count.toString() + " votes";
            dOverview.innerHTML = searchResults[btnNo].overview;
            dLanguage.innerHTML = "Spoken languages: " + tvDetails.spoken_language;
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
    }

    function showCredits() {
        if (movieDetails != undefined) {
            for (var k = 0; k < 8; k++) {
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

                dCastProfile.innerHTML = `<img src="https://image.tmdb.org/t/p/w185/${credits[k].profile_path}" alt="">`;
                dCastName.innerHTML = credits[k].name;
                dCastAs.innerHTML = "AS";
                dCastCharacter.innerHTML = credits[k].character;

                document.getElementById("d-cast-list").appendChild(dCastCard);
                document.getElementById("d-cast-card" + k.toString()).appendChild(dCastProfile);
                document.getElementById("d-cast-card" + k.toString()).appendChild(dCastName);
                document.getElementById("d-cast-card" + k.toString()).appendChild(dCastAs);
                document.getElementById("d-cast-card" + k.toString()).appendChild(dCastCharacter);
            }
        }

    }

    function showReviews() {
        for (var k = 0; k < 5; k++) {
            var dReviewRow = document.createElement("div"),
                dUsername = document.createElement("div"),
                dCreatedAt = document.createElement("div"),
                dThisRating = document.createElement("div"),
                dContent = document.createElement("div"),
                dHR = document.createElement("hr");
            dReviewRow.id = "d-review-row" + k.toString();
            dUsername.className = "d-username";
            dCreatedAt.className = "d-created-at";
            dThisRating.className = "d-this-rating";
            dContent.className = "d-content";
            dHR.className = 'd-hr';

            console.log(reviews);
            dUsername.innerHTML = reviews[k].username;

            dCreatedAt.innerHTML = " on " + reviews[k].created_at;
            var rating = parseFloat(reviews[k].rating) / 2.0,
                ratingFloat = Number.isInteger(rating) ? rating.toString() + ".0" : rating.toString();
            dThisRating.innerHTML = "\u2B51 " + ratingFloat  + "/5";
            dContent.innerHTML = reviews[k].content;

            document.getElementById("d-review-list").appendChild(dReviewRow);
            document.getElementById("d-review-row" + k.toString()).appendChild(dUsername);
            document.getElementById("d-review-row" + k.toString()).appendChild(dCreatedAt);
            if (reviews[k].rating != null) document.getElementById("d-review-row" + k.toString()).appendChild(dThisRating);
            document.getElementById("d-review-row" + k.toString()).appendChild(dContent);
            document.getElementById("d-review-row" + k.toString()).appendChild(dHR);
        }
    }

    function clearDetails() {
        document.getElementById("d-list").remove();
        document.getElementById("back").style.position = "static";
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
            rContainer = document.getElementById('r-container');
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
        // console.log("btn: "+ btnId + " " + btn.className + " content: " + content.className);
    }

    function loadHomePage() {
        activeBtn("home-btn", "home");
        isHome = true;
        if (oHomeBtn.className === 'tab-btn active') {
            if (!isLoaded) {
                getTrending();
                getTVShows();
                isLoaded = true;
                setTimer();
            }
        }
    }

    function loadSearchPage() {
        activeBtn("search-btn", "search");
        isHome = false;
    }

    init();

})()






