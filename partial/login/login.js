angular.module('IwN').controller('LoginCtrl', function ($scope, $firebaseAuth, $state) {

    /*globals alert */
    var firebase = $firebaseAuth();

    $scope.SignIn = function () {

        firebase.$signInWithEmailAndPassword($scope.username, $scope.password).then(function (firebaseUser) {
            $state.go('home');
        }).catch(function (error) {
            alert('Error: username o psw errati');
        });
    };

    

});