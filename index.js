var fs = require('fs');
var youtubedl = require('youtube-dl');
var request = require('request');
var _ = require('underscore');
var sanitize = require('sanitize-filename');
var self = this;

// TODO: Add a status maybe to see what's happening with each video

exports.downloadVideosInList = function(listId, options, callback) {

	var defaults = _.extend({
		saveDir: '.'
	}, options);

	self.getVideosInList(listId, function(err, videos) {

		self.downloadVideos(videos, {saveDir: defaults.saveDir}, function(err, videos) {
			if (err) {
				return callback(err);
			}
			return videos;
		});

	});

};

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
				url: video.content.src,
				downloaded: false
			};
		});

		return callback(null, videos);

	});

};

exports.downloadVideos = function(videos, options, callback) {

	var defaults = _.extend({
		saveDir: '.'
	}, options);

	fs.mkdir(defaults.saveDir, function(err) {

		videos.forEach(function(video) {

			var videoDl = youtubedl(
				video.url,
				['--max-quality=18'], // '--write-srt', '--srt-lang=en'
				{cwd: __dirname}
			);

			videoDl.on('info', function(info) {
				// Maybe update the status of the video here
			});

			video.fileName = sanitize(video.title) + '.mp4';

			videoDl.pipe(fs.createWriteStream(defaults.saveDir + '/' + video.fileName));

			video.downloaded = true; // May not work

		});

		return callback(null, videos);

	});

};