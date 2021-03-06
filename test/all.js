var expect = require('chai').expect;
var yt = require('../index.js');
var listId = 'PLGLfVvz_LVvSPjWpLPFEfOCbezi6vATIh';

describe('youtuber', function() {

	describe('getVideosInList', function() {

		it('should return videos in the list', function(done) {

			yt.getVideosInList(listId, function(err, videos) {

				expect(videos).to.be.an('array');
				expect(videos).to.not.be.empty;

				var video = videos[0];

				expect(video).to.include.keys('title', 'url', 'downloaded');
				expect(video.title).to.be.a('string');
				expect(video.url).to.be.a('string');

				done();

			});

		});

	});

});