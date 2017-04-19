(function(){

    document.addEventListener('DOMContentLoaded', () => {

        const imageSearch = require("js/image-search");
        const bodyTmpl = require('views/body.pug');
        const exampleTmpl = require('views/example.pug');
        const hostName = window.location.protocol + "//" + window.location.hostname + (window.location.hostname === "localhost" ? (":" + window.location.port) : '');

        document.body.innerHTML = bodyTmpl() + exampleTmpl({ host: hostName });
        imageSearch.init(hostName);

    });

})();