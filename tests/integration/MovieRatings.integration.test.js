var MovieRatings = require('../../src/MovieRatings');

describe('', function() {
    beforeEach(function() {

    });

    afterEach(function() {

    });

    it('should do something', function(done) {
        this.timeout(20000);
        MovieRatings.getRating('goonies', done);
    });
});