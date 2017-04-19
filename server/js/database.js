const dbUrl = process.env.MONGODB_URI
const mongo = require("mongodb").MongoClient;

(function(){

    module.exports = {

        insertNewSearch: function(str){
            module.exports.connect((collection) => {
                collection.insert({
                    date: new Date(),
                    search: str
                }, (err, result) => {
                    if (err) {
                        throw err;
                    } else {
                        console.log("Inserted " + result.insertedCount + " new document");
                    }
                });
            });
        },

        getRecentSearches: function(callback){
            module.exports.connect((collection) => {
                const cursor = collection.find().sort({
                    date: -1
                }).limit(24).toArray((err, arr) => {
                    if (err) {
                        throw err;
                    } else {
                        callback(JSON.stringify(arr));
                    }
                });
            });
        },

        connect: function(callback){
            mongo.connect(dbUrl, (err, db) => {
                if (err) {
                    throw err;
                } else {
                    db.collection("searches", (err, searches) => {
                        if (err) {
                            throw err;
                        } else {
                            callback(searches);
                        }
                    });
                }

                db.close();
            });
        }
        
    }

})();