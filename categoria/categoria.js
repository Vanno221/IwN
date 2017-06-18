angular.module('IwN').controller('CategoriaCtrl',function($scope,$firebaseArray){
   
   var ref = firebase.database().ref();
   var list = $firebaseArray(ref);
   $scope.list = list;
  /*    $scope.setCategory = function() {
        console.log("Set category to: "+$scope.selectedCategory)
		$location.path('/home/'+$scope.selectedCategory);
    } */
});