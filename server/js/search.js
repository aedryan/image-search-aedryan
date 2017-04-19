const https = require("https");

(function(){

    module.exports = {

        finish: null,

        searchQuery: function() {
            if (arguments.length > 1 && typeof arguments[0] === 'string') {
                const queryString = String(arguments[0]).replace(/ /g, '+');
                let offset = '';
                let options = {
                    hostname: 'api.cognitive.microsoft.com',
                    headers: {
                        'Ocp-Apim-Subscription-Key': 'f5c09c7ac95b43b38b77ebc0afb3a393'
                    }
                };

                if (typeof arguments[1] === 'number' && typeof arguments[2] === 'function') {
                    offset = '&offset=' + arguments[1];
                    module.exports.finish = arguments[2];
                } else if (typeof arguments[1] === 'function') {
                    module.exports.finish = arguments[1];
                } else {
                    return console.error('Invalid arguments provided.', arguments);
                }
                
                options.path = '/bing/v5.0/images/search?q=' + encodeURIComponent(queryString) + '&mkt=en-US&count=20' + offset;
                https.get(options, this.processResults).on('error', (err) => {
                    console.error(`Problem with request ${err.message}`);  
                });
            } else {
                console.error('Invalid arguments provided.', arguments);
            }
        },

        processResults: function(result) {
            let imageJSON = '';

            result.on("data", (data) => {
                imageJSON += data.toString();
            });

            result.on("error", (err) => {
                console.error(`Problem with result: ${err.message}`);
            });

            result.on("end", () => {
                module.exports.finish(JSON.parse(imageJSON).value);
            });
        }

    }

})();