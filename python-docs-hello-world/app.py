from flask import Flask, json, after_this_request, request, send_from_directory
import requests

app = Flask(__name__, static_url_path='', static_folder='static')

@app.route('/')
def root():
      return app.send_static_file('index.html')

@app.route('/trending', methods=['GET'])
def getInfo():
    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    # if request.method == 'GET':
    result = requests.get("https://api.themoviedb.org/3/trending/movie/week?api_key=5cb255aabd11100bc162d4bd13d7359c")
    return result.json()

@app.route('/tvshows', methods=['GET'])
def getTVShows(): 
    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    # if request.method == 'GET':
    result = requests.get("https://api.themoviedb.org/3/tv/airing_today?api_key=5cb255aabd11100bc162d4bd13d7359c")
    return result.json()

@app.route('/search', methods=['GET'])
def searchMovies(): 
    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    # if request.method == 'GET':
    keyword = request.args.get('keyword', type=str)
    category = request.args.get('category', type=str)
    info = {'api_key': '5cb255aabd11100bc162d4bd13d7359c', 'language': 'en-US', 'query': keyword, 'page': '1', 'include_adult': 'false'}
    result = requests.get("https://api.themoviedb.org/3/search/" + category, params=info)
    return result.json()


@app.route('/getMovieGenres', methods=['GET'])
def getMovieGenres(): 
    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    # if request.method == 'GET':
    # genres = request.args.get('genres')
    # info = {'api_key': '5cb255aabd11100bc162d4bd13d7359c', 'language': 'en-US'}
    result = requests.get("https://api.themoviedb.org/3/genre/movie/list?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US")
    return result.json()


@app.route('/getTVGenres', methods=['GET'])
def getTVGenres(): 
    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    # if request.method == 'GET':
    # genres = request.args.get('genres')
    # info = {'api_key': '5cb255aabd11100bc162d4bd13d7359c', 'language': 'en-US'}
    result = requests.get("https://api.themoviedb.org/3/genre/tv/list?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US")
    return result.json()

@app.route('/getDetails', methods=['GET'])
def getDetails(): 
    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    # if request.method == 'GET':
    itsType = request.args.get('type', type=str)
    id = request.args.get('id', type=str)
    info = {'api_key': '5cb255aabd11100bc162d4bd13d7359c', 'language': 'en-US'}
    #result = requests.get("https://api.themoviedb.org/3/search/movie?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&query=avengers&page=1&include_adult=false")
    result = requests.get("https://api.themoviedb.org/3/" + itsType + "/"+ id, params=info)
    return result.json()


@app.route('/getCredits', methods=['GET'])
def getCredits(): 
    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    # if request.method == 'GET':
    itsType = request.args.get('type', type=str)
    id = request.args.get('id', type=str)
    info = {'api_key': '5cb255aabd11100bc162d4bd13d7359c', 'language': 'en-US'}
    result = requests.get("https://api.themoviedb.org/3/" + itsType + "/"+ id + "/" + "credits", params=info)
    return result.json()

@app.route('/getReviews', methods=['GET'])
def getReviews(): 
    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    # if request.method == 'GET':
    itsType = request.args.get('type', type=str)
    id = request.args.get('id', type=str)
    info = {'api_key': '5cb255aabd11100bc162d4bd13d7359c', 'language': 'en-US', 'page': '1'}
    result = requests.get("https://api.themoviedb.org/3/" + itsType + "/"+ id + "/" + "reviews", params=info)
    return result.json()
