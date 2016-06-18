(function ( angular ) {
  var mod = angular.module( 'sampleFactory', [] );

  mod.factory( 'SampleFactory', function ( ) {

  	return {
  		sample: function(){
  			console.log("sample");
  		}
  	}
  
  } );

})( angular );

