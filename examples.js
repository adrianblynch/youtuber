var yt = require('./index.js');

// Tutorials on Android Studio development by Derek Banas
// yt.downloadVideosInList('PLGLfVvz_LVvSPjWpLPFEfOCbezi6vATIh', {saveDir: './downloads/android-tuts'}, function(err, videos) {
// 	console.log(err, videos);
// });

// Music Playlist - Random search result - Fails
// yt.downloadVideosInList('RD-e_3Cg9GZFU', {saveDir: './downloads/music'}, function(err, videos) {
// 	console.log(err);
// 	console.log(videos);
// });

// Fake the list
yt.downloadVideos(
	[{title: 'Pairing Isnt Just For Developers - Agile on the Beach 2014', url: 'https://www.youtube.com/watch?v=476TXt55v-A', downloaded: false}],
	{saveDir: './downloads/agile-tuts'},
	function(err, videos) {
		console.log(videos);
	}
);