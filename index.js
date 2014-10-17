var fs = require('fs');
var youtubedl = require('youtube-dl');
var request = require('request');
var self = this;

exports.getVideosInList = function(listId, callback) {

	var url = 'http://gdata.youtube.com/feeds/api/playlists/' + listId + '/?v=2&alt=json&feature=plcp';

	request(url, function(error, response, body) {

		if (error) {
			return callback(error);
		}

		if (response.statusCode !== 200) {
			return callback(new Error('Failed to get a 200 status code'));
		}

		var videos = JSON.parse(body).feed.entry.map(function(video, i) {
			return {
				title: video.title.$t,
				url: video.content.src
			};
		});

		return callback(null, videos);

	});

};

exports.downloadVideos = function(videos, options, callback) {

};