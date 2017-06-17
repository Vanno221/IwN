'use strict';

(function(){
	var newsFactory = function($http){
		var factory={}

		factory.getNews=function(category)
		{
			var promise=$http({
				url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.news.yahoo.com%2Frss%2F"+category+"%22&format=json&diagnostics=false&callback=JSON_CALLBACK",
				method: "JSONP" 
			})

			return promise;
		}

		return factory;
	};

	angular.module('IwN').factory('newsFactory', ['$http',newsFactory]);
}());