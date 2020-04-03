nativefier \
	https://carbon.now.sh \
	dest \
	--platform ${1:-osx} \
	--single-instance \
	--file-download-options '{"saveAs": true}' \
	--inject 'inject/app.js' \
	--inject 'inject/app.css' \
	--max-width 1027