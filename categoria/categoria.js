angular.module('IwN').controller('CategoriaCtrl',function($scope,$firebaseArray,$firebaseAuth,$state){
   
   var categorie = []; // puoi scrivere anche new Array()
   var ref = firebase.database().ref("UrlRss");
   var list = $firebaseArray(ref);
   $scope.list = list;

    /*globals alert */
    var auth = $firebaseAuth(); // importa firebaseauth
    

    // Funzione per aggiungere o rimuovere id selezionato
    $scope.selectCategoria = function(id) {
        var index = categorie.indexOf(id); // restituisce l'indice del id che gli ho passato
        if(index > -1){ // se l'indice è maggiore di -1, quindi esiste
            categorie.splice(index, 1); // rimuovi id dal array
            return;
        }
        categorie.push(id); // altrimenti aggiungi id ad array
    };

    // Funzione di visualizzazione se id è stato selezionato o no
    $scope.hasSelect = function(id) {
        var index = categorie.indexOf(id);
        if(index > -1) {
            return 'list-group-item-success';
        }
        return 'not-selected';
    };

    $scope.saveCategorie = function() {
        var ref = firebase.database().ref('RssUtente');
        var rssUsers = $firebaseArray(ref);
        var authData = auth.$getAuth(); 

        var rssUser = {
            IdUtente : authData.uid, // qui dobbiamo inserire l'id del utente loggato
            RssSelected: categorie
        }

        rssUsers.$add(rssUser)
            .then(function (ref) {
                $state.go('news'); // naviga in news
            }, function (error) {
                console.error("Error:", error);
                alert('Errore: Effettuare il login');
            });
    };
});