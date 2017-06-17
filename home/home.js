angular.module('IwN').controller('HomeCtrl',function($scope,$location){
   
    $scope.categories = [
        'business',
        'sports',
        'entertainment'
    ];

    $scope.setCategory = function() {
        console.log("Set category to: "+$scope.selectedCategory)
		$location.path('/home/'+$scope.selectedCategory);
    }

});