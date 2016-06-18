(function ( angular ) {
  var mod = angular.module( 'homeController', [] );

  mod.controller( 'HomeCtrl', function ( $scope, $log, SampleFactory ) {
    $log.log( 'HomeCtrl invoked' );
    SampleFactory.sample();
    
  } );

})( angular );