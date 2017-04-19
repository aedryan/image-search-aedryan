(function(){
    
    module.exports = {

        props: {
            images: [],
            apiPath: '',
            searchField: null,
            offsetField: null,
            searchButton: null,
            resultsTable: null,
            recentsTable: null
        },

        init: function(apiPath){
            
            this.props.apiPath = apiPath;
            this.props.searchField = document.getElementById('search-input');
            this.props.offsetField = document.getElementById('offset-input');
            this.props.searchButton = document.getElementById('search-button');
            this.props.resultsTable = document.getElementById('results-table');
            this.props.recentsTable = document.getElementById('recents-table');
            this.bindEvents();
            this.render();
        },

        bindEvents: function() {

            this.props.searchButton.onclick = () => {
                const term = this.props.searchField.value;
                const offsetVal = this.props.offsetField.value;
                const offset = offsetVal ? offsetVal : 0;

                this.getImages(term, offset);
            };

            document.onclick = (e) => {
                if (e && e.target && e.target.classList && e.target.classList.contains("recent-search")) {
                    this.getImages(e.target.text, 0);
                }
            }

        },

        render: function(){
            this.props.recentsTable.innerHTML = '<tr class="loader-container"><td><div class="loader"></div></td></tr>';
            this.getData(this.props.apiPath + "/api/recent", (data) => {
                if (data.length > 0) {
                    this.props.recentsTable.innerHTML = data.reduce((acc, val) => { 
                        return acc += '\
                            <tr>\
                                <td><a class="recent-search" href="javascript:void(0)">' + decodeURIComponent(val.search) + '</a></td>\
                            </tr>\
                        '; 
                    }, '');
                } else {
                    this.props.recentsTable.innerHTML = '';
                }
            });

            if (this.props.images.length > 0) {
                this.props.resultsTable.innerHTML = this.props.images.reduce((acc, val) => {
                    return acc += '\
                        <tr>\
                            <td><img src="' + val.thumbnailUrl + '" /></td>\
                            <td><a target="_blank" href="' + val.imageUrl + '">' + val.name + '</a></td>\
                        </tr>\
                    ';
                }, '');
            } else {
                this.props.resultsTable.innerHTML = '';
            }

        },

        getData: function(url, callback) {
            const xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    callback(JSON.parse(xhttp.response));
                }
            }
            xhttp.open('GET', url, true);
            xhttp.send();
        },

        getImages: function(term, offset) {
            this.props.resultsTable.innerHTML = '<tr class="loader-container"><td><div class="loader"></div></td></tr>';
            this.getData(this.props.apiPath + "/api/search/" + term + "?offset=" + offset, (data) => {
                this.props.images = data;
                this.render();
            });
        }

    }

})();