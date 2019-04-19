dist/index.js: shaderc.js shaderc.wasm index.1.js index.2.js index.3.js Makefile
	cat index.1.js > $@
	base64 -w0 shaderc.wasm >> $@
	cat index.2.js >> $@
	tail -c +50 shaderc.js >> $@
	cat index.3.js >> $@
