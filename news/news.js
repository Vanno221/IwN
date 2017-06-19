angular.module('IwN').controller('NewsCtrl', function ($scope, newsFactory, $firebaseArray, $firebaseAuth, $state) {

	$scope.rssUtente = {};
	$scope.rssUrls  = [];

	firebase.database(); //ma qui non ci va  ;?

    /*globals alert */
    var auth = $firebaseAuth(); // importa firebaseauth

	$scope.init = function () {
				
		var authData = auth.$getAuth();
		var IdAuth; //Id utente

		if (authData) {
			IdAuth = authData.uid;  // e qui?
		} else {
			console.log("Signed out");
		}


		var ref = firebase.database().ref("RssUtente"); // Invece è corretto
		var list = $firebaseArray(ref);
		
		var refUrls = firebase.database().ref("UrlRss");
		var listUrls = $firebaseArray(refUrls);
		$scope.rssUrls = listUrls;


		// angular.forEach(list, function(value, key2) { // molto probabilmente non funziona questo, provalo comunque
		// 	if (idUtente === value.IdAuth) {
		// 		// non se sa va bene 
		// 	}
   		// });

		list.$loaded(function (res) { // carica tutte le configurazioni
			for (var i = 0; i < res.length; i++) { // ciclo le configurazioni
				console.debug(res[i]);

				if(res[i].idUtente == IdAuth) {
					$scope.rssUtente = res[i]; // qui hai l'oggetto che si trova sul db di firebase
					return;
				}
			}
		}, function (err) {
			console.error(err);
		});
	};

	$scope.getRssFeed = function(url) {

		for(var i = 0; i < $scope.rssUrls.length; i++) {

			if($scope.rssUrls[i].Id == url) {

				// restituisce rss
				return newsFactory
					.getNews($scope.category)
					.success(function (data, status, headers, config) {
						console.log("SUCCESS", data.query.results.item);
						return data.query.results.item;
					});
			}
		}

		return null;
	}
});