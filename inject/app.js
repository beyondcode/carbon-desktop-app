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

    loadScript('//code.jquery.com/jquery-3.2.1.min.js', jQuery(function ($) {
         $('#loadingContainer').remove();
         $('.toast').remove();
         $('header').remove();
         $('.header-content').remove();
         $('.login-button-container').remove();
         $('button:contains("Tweet")').remove()
         $('.export-row button:contains("Open")').remove()
         $('button:contains("Export")').on('click', function() {
             setTimeout(() => {
                $('.export-row button:contains("Open")').remove()
            }, 50);
         });
         $('footer').empty().html(`
         	created by <a style="color: #F8E81C" href="https://twitter.com/carbon_app">@carbon_app</a> and <a style="color: #F8E81C" href="https://beyondco.de">Beyond Code</a>
     	`)
    }));


})();
