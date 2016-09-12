(function ( angular ) {
  var mod = angular.module( 'homeController', [] );

  mod.controller( 'HomeCtrl', function ( $scope, $log, SampleFactory, $http ) {
    $log.log( 'HomeCtrl invoked' );



    $scope.check = function(){
    	//var data = { "text" : "Hello world." };
    	var data = $scope.input;
        
			var config = {
                headers : {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            };

    	$http.post("http://localhost:8080/", data, config)
    	 	.then(function(response) {
         	$scope.res = response.data.res;
         	console.log($scope.res);
    	});
    };

    $scope.format = function(val){
    	return parseFloat(Math.round(val * 10000) / 10000).toFixed(4) + " %";
    };

    $scope.update = function(){
    	$log.log("changed");
    };

    $scope.classify = function(annotator){
    	if (annotator == 'quadrigram') return "blue";
    	if (annotator == 'trigram') 	 return "green";
    	if (annotator == 'bigram') 	 	 return "yellow";
    	if (annotator == 'unigram') 	 return "red";
    	return "grey"; 
    };
    
    $scope.input = "I went to school. I went in school. I thoughts you were right.";
    $scope.check();

  } );

})( angular );