var yt = require('./index.js');

// Tutorials on Android Studio development by Derek Banas
yt.downloadVideosInList('PLGLfVvz_LVvSPjWpLPFEfOCbezi6vATIh', {saveDir: './downloads/android-tuts'}, function(err, videos) {
	console.log(err, videos);
});

// Music Playlist - Random search result - Fails
// yt.downloadVideosInList('RD-e_3Cg9GZFU', {saveDir: './downloads/music'}, function(err, videos) {
// 	console.log(err);
// 	console.log(videos);
// });