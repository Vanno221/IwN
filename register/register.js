angular.module('IwN').controller('RegisterCtrl', function ($scope, $firebaseAuth, $state) {
    var firebase = $firebaseAuth();

    $scope.SignUp = function () {

        firebase.$createUserWithEmailAndPassword($scope.username, $scope.password)
            .then(function (firebaseUser) {
                alert("Registrato con successo");
            }).catch(function (error) {
                alert("Utente già registrato");
            }); 
    };

});