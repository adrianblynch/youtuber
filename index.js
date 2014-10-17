var fs = require('fs');
var youtubedl = require('youtube-dl');
var request = require('request');
var self = this;

exports.getList = function(listId, callback) {

	var listJson = 'http://gdata.youtube.com/feeds/api/playlists/' + listId + '/?v=2&alt=json&feature=plcp';

	request(listJson, function (error, response, body) {

		if (error) {
			return callback(error);
		}

		if (response.statusCode !== 200) {
			return callback(new Error('Failed to get a 200 status code'));
		}

		return callback(null, JSON.parse(body));

	});

};

exports.getVideosInList = function(list, callback) {

	self.extractVideos(JSON.parse(body).feed.entry, function(err, videos) {

		//console.log(videos[0]);

		videos = videos.map(function(video, i) {
			return {
				title: video.title.$t,
				url: video.content.src
			};
		});

		return callback(null, videos);

	});

};

exports.extractVideos = function(feed, callback) {

	return callback(null, feed);

};

exports.downloadVideos = function(videos, options, callback) {

};