var request = require('request');

module.exports = {
    getRating: getRating
};

function getRating(searchTerm, done) {
    searchMovies(searchTerm, function(err, results) {
        console.log(results.length + ' results returned');
        if (results.length > 0) {
            var topResultId = results[0].id;
            getFilmDetails(topResultId, function(err, details) {
                console.log(details);
                console.log('Rating is', details.rate);
                done(err, details.rate);
            });
        } else {
            done(new Error('No results found for search term of ' + searchTerm));
        }
    });
}

function getFilmDetails(id, done) {
    // https://moviesapi.com/m.php?i=0089218&type=movie&r=json
    var url = 'https://moviesapi.com/m.php?i=' + id + '&y=&type=movie&r=json';
    console.log(url);
    request(url, function (error, response, body) {
        done(error, JSON.parse(body));
    });
}

function searchMovies(searchTerm, done) {
    var url = 'https://moviesapi.com/m.php?t=' + searchTerm + '&y=&type=movie&r=json';
    console.log(url);
    request(url, function (error, response, body) {
        if (error) {
            console.log('error:', error);
        }
        done(error, JSON.parse(body));
    });
}
