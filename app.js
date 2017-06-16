angular.module('IwN', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'firebase']);

angular.module('IwN').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'login/login.html'
    });
    $stateProvider.state('register', {
        url: '/register',
        templateUrl: 'register/register.html'
    });
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home/home.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('IwN')
    .config(function () {

        /*globals firebase, alert */

        var config = {
            apiKey: "AIzaSyCvzJ8gPdVy3xqsBBUSjdlN8h6VMysiPuw",
            authDomain: "webapp-iwn.firebaseapp.com",
            databaseURL: "https://webapp-iwn.firebaseio.com",
            projectId: "webapp-iwn",
            storageBucket: "webapp-iwn.appspot.com",
            messagingSenderId: "437139374699"
        };

        firebase.initializeApp(config);

    });

angular.module('IwN').run(function ($rootScope) {

    $rootScope.safeApply = function (fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof (fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
