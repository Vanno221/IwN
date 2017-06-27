angular.module('IwN').controller('NewsCategoryCtrl', function ($scope, $stateParams, $firebaseArray, $state, newsFactory, $uibModal) {

    function getRssFeed(rss) {
        newsFactory
            .getNews(rss.Url)
            .success(function (data, status, headers, config) {
                // console.log("SUCCESS", data.query.results.item);
                 $scope.rssList = data.query.results.item;
            });
    }

    $scope.init = function () {

        var newsId = $stateParams.id;

        if (!newsId) {
            $state.go('home');
        }


        var refUrls = firebase.database().ref("UrlRss");
        var listUrls = $firebaseArray(refUrls);
        $scope.rssUrls = listUrls;

        listUrls.$loaded(function (res) {
            for (var i = 0; i < res.length; i++) {
                console.debug(res[i]);

                if (res[i].Id == newsId) {
                    getRssFeed(res[i]);
                    return;
                }
            }
        }, function (err) {
            console.error(err);
        });
    };

    $scope.readNews = function (news) {
        $uibModal.open({
            templateUrl: 'partial\\modal\\read-news\\read-news.html',
            controller: 'ReadNewsCtrl',
            resolve: {
                news: function() {
                    return news;
                }
            }
        }).result.then(function (result) {
            //do something with the result
        });
    }
});