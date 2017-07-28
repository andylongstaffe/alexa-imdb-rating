var request = require('request');

module.exports = {
    getRating: getRating
};

function getRating(searchTerm, done) {
    searchMovies(searchTerm, done);
}

function searchMovies(searchTerm, done) {
    var searchTerm = 'goonies';
    var url = 'https://moviesapi.com/m.php?t=' + searchTerm + '&y=&type=movie&r=json';
    console.log(url);
    request.get(url)
        .on('response', function(response) {
            console.log('status code is', response.statusCode);
            console.log('body is', response.body);
            done('It worked');
        })
        .on('error', function(err) {
            console.log(err)
        });
}
