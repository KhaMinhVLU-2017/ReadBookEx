chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({colorDark: 'black',colorJudas: '#08ff08',colorRomantic: '#ff9dae'}, function() {
		console.log("The color is start");
	});
	// chrome.storage.sync.set({}, function() {
	// 	console.log("The color is green.");
	// });

});
	