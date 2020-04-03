(function () {

	let loadingContainer = document.createElement('div');
	loadingContainer.id = 'loadingContainer';
	loadingContainer.style.cssText = `
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: #000000;
		z-index: 100000;
	`;
    document.getElementsByTagName('body')[0].appendChild(loadingContainer);

    function loadScript(url, callback) {

        let script = document.createElement('script')
        script.type = 'text/javascript';

        script.onload = callback;

        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    loadScript('//code.jquery.com/jquery-3.2.1.min.js', function () {
         jQuery('#loadingContainer').remove();
         jQuery('.toast').remove();
         jQuery('header').remove();
         jQuery('.header-content').remove();
         jQuery('.login-button-container').remove();
         jQuery('button:contains("Tweet")').remove()
         jQuery('.export-row button:contains("Open")').remove()
         jQuery('button:contains("Export")').on('click', function() {
             setTimeout(() => {
                jQuery('.export-row button:contains("Open")').remove()
            }, 50);
         });
         jQuery('footer').empty().html(`
         	created by <a style="color: #F8E81C" href="https://twitter.com/carbon_app">@carbon_app</a> and <a style="color: #F8E81C" href="https://beyondco.de">Beyond Code</a>
     	`)
    });


})();