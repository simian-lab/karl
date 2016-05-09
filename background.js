chrome.app.runtime.onLaunched.addListener(
function() {
	chrome.app.window.create('/dist/index.html', {
  	id              : 'karl-window',
  	minWidth        : 800,
  	minHeight       : 600
  });
});