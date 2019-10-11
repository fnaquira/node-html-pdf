const convertHTMLToPDF = require('pdf-puppeteer');
const fs = require('fs');

const callback = function(pdf) {
	// do something with the PDF like send it as the response
	fs.writeFile('test.pdf', pdf, () => {
		console.log('PDF creado');
	});
};

/**
 *    Usage
 *    @param html - This is the html to be converted to a pdf
 *    @param callback - Do something with the PDF
 *    @param [options] - Optional parameter to pass in Puppeteer PDF options
 *    @param [puppeteerArgs] - Optional parameter to pass in Puppeter arguments
 *    https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagepdfoptions
 *    @param [remoteContent] - Default true. Optional parameter to specify if there is no remote content. Performance will be opitmized for no remote content.
 */
fs.readFile(__dirname + '/template.html', 'utf8', (err, html) => {
	if (err) {
		console.error('Hubo un error al leer el archivo', err);
	}
	//convertHTMLToPDF(html, callback, options, puppeteerArgs, remoteContent);
	convertHTMLToPDF(html, callback);
});
