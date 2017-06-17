angular.module('IwN').controller('CategoriaCtrl',function($scope,$stateParams,newsFactory){

    	console.log($stateParams.category);

		$scope.category=$stateParams.category;

		newsFactory.getNews($scope.category)

        
		.success( function (data, status, headers, config){
				console.log("SUCCESS",data.query.results.item);
				$scope.news_list=data.query.results.item;
			});

});