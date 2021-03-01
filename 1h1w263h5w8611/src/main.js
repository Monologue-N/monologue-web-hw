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


        trendingMovies = [],
        tvShows = [],
        isLoaded = false;



   // document.getElementById("demo-pic").innerHTML = `<img src="https://homepages.cae.wisc.edu/~ece533/images/watch.png">`;
   //  var tabHeaders = document.querySelectorAll(".tabs .tab-header > div");
   //  var tabContents = document.querySelectorAll("tabs .content > div");
   //
   //  for (let i = 0; i < tabHeaders.length; i++) {
   //      tabHeaders[i].addEventListener("click", function() {
   //          document.querySelector(".tabs .tab-header > .active").classList.remove("active");
   //          tabHeaders[i].classList.add("active");
   //          document.querySelector(".tabs .content > .active").classList.remove("active");
   //          tabContents[i].classList.add("active");
   //      })
   //  }

    function init() {
        loadHomePage();
        bindEvent();
    }

    function bindEvent() {
        oHomeBtn.addEventListener('click', function (){loadHomePage()}, {once: false});
        oSearchBtn.addEventListener('click', function(){loadSearchPage()}, {once: false});

    }


    function getTrending() {
        var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // document.getElementById("demo").innerHTML = this.responseText;
                    // var jsonObj = JSON.parse(this.responseText);
                    // alert(jsonObj.results[0].backdrop_path);
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
                // document.getElementById("demo").innerHTML = this.responseText;
                // var jsonObj = JSON.parse(this.responseText);
                // alert(jsonObj.results[0].backdrop_path);
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
        setInterval(displayNextTrending, 3000);
        console.log("I am in Timer");
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
        console.log("btn: "+ btnId + " " + btn.className + " content: " + content.className);
    }

    function loadHomePage() {
        activeBtn("home-btn", "home");
        console.log("I am here");
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
        console.log("I am in Search");
    }

    init();

})()


// const myList = document.querySelector('ul');
// const myRequest = new Request('products.json');
//
// fetch(myRequest)
//     .then(response => response.json())
//     .then(data => {
//         for (const product of data.products) {
//             let listItem = document.createElement('li');
//             listItem.appendChild(
//                 document.createElement('strong')
//             ).textContent = product.Name;
//             listItem.append(
//                 ` can be found in ${
//                     product.Location
//                 }. Cost: `
//             );
//             listItem.appendChild(
//                 document.createElement('strong')
//             ).textContent = `£${product.Price}`;
//             myList.appendChild(listItem);
//         }
//     })
//     .catch(console.error);

//
// function reqListener () {
//     console.log(this.responseText);
// }
//
// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://www.example.org/example.txt");
// oReq.send();


// var demo = document.getElementById("demo");
//
// demo.innerHTML = "hello, mono";
//
// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("demo").innerHTML = this.responseText;
//         }
//     };
//     xhttp.open("GET", "ajax_info.txt", true);
//     xhttp.send();
// }

// const url = 'http://127.0.0.1:5000/'
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         // for (var i = 0; i < 5; i++) {
//         //     trendingMovies[i].title = data.results[i].title;
//         //     trendingMovies[i].backdrop_path = data.results[i].backdrop_path;
//         //     trendingMovies[i].release_date = data.results[i].release_date;
//         // }
//             trendingMovies[0].title = data.results[0].title;
//             trendingMovies[0].backdrop_path = data.results[0].backdrop_path;
//             trendingMovies[0].release_date = data.results[0].release_date;
//         document.getElementById("demo").innerHTML = trendingMovies[0].title;
//         document.getElementById("demo-pic").innerHTML = `<img src="${trendingMovies[0].backdrop_path} alt="">`;
//         document.getElementById("demo-date").innerHTML = trendingMovies[0].release_date;
//
//     })




