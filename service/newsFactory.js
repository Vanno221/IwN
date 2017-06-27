angular.module('IwN').factory('newsFactory', function ($http) {
    var factory = {};

    factory.getNews = function (url) {
        var query = "select * from rss where url='" + url + "'";
        var promise = $http({
            url: "http://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(query) + "&format=json&diagnostics=false&callback=JSON_CALLBACK",
            method: "JSONP"
        });

        return promise;
    };

    return factory;
});