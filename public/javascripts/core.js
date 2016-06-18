(function ( angular ) {
	var app = angular.module( 'sampleApp', [
		'templateController', 'homeController', 'aboutController',     // controllers
    'sampleFactory',                            // providers
		'ui.router'] );

	app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
      // HOME STATES AND NESTED VIEWS ========================================
      .state('home', {
       	url: '/home',
        templateUrl: '/partials/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: '/partials/about.html'
      });
});

})( angular );