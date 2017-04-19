(function(){

    const path = require("path");
    const express = require('express');
    const dbUrl = process.env.MONGODB_URI;
    const mongo = require("mongodb").MongoClient;
    const app = express();
    const search = require("./search");
    const db = require("./database");

    app.set('view engine', 'pug');
    app.set('views','server/templates/');
    app.set('port', (process.env.PORT || 5000));
    app.use('/favicon.ico', express.static("favicon.ico"));
    app.use(express.static('public/'));

    app.get('/', (req, res) => {
        res.render('index');
    });

    // API methods
    app.get('/api/search/:term', (req, res) => {
        const term = encodeURIComponent(req.params.term);
        let offset = req.query.offset;
        
        if (offset && !isNaN(offset)) {
            offset = Number(offset);
            search.searchQuery(term, offset, processResults.bind(res));
        } else {
            search.searchQuery(term, processResults.bind(res));
        }

        db.insertNewSearch(term);
    });

    app.get('/api/recent', (req, res) => {
        db.getRecentSearches((arr) => {
            res.json(JSON.parse(arr).map((val) => {
                return {
                    date: val.date,
                    search: val.search
                }
            }));
        });
    });

    // Start server
    app.listen(app.get('port'), () => {
        console.log("App is running", app.get('port'));
    });

    function processResults(results) {
        this.json(results.map((val) => {
            return {
                name: val.name,
                imageUrl: val.contentUrl,
                pageUrl: val.hostPageDisplayUrl,
                thumbnailUrl: val.thumbnailUrl
            };
        }));
    }

})();