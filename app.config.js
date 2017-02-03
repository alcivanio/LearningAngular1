
(function(){

    var app = angular.module('app-config', ['ngRoute']);

    app.config(function($routeProvider) {
        debugger;
        $routeProvider
        .when('/roda', {
            templateUrl: 'templates/footer/footer.view.html'
        })

        .otherwise({
            templateUrl: 'templates/footer/footer.view.html'
        });
        
        
    });

})();



