(function ( angular ) {
	var app = angular.module( 'sampleApp', [
		'templateController', 'homeController',     // controllers
    'sampleFactory',                            // providers
		'ui.router'] );

	app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
      // HOME STATES AND NESTED VIEWS ========================================
      .state('home', {
       	url: '/home',
        templateUrl: '/partials/home.html'
      });
  });

  app.directive('tooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});



})( angular );