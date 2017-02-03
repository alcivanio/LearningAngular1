(function() {
    var app = angular.module('news-footer', []);
    app.controller('FooterController', footerController);
    app.directive('newsFooter', footerDirective);

    function footerController() {

    }

    function footerDirective() {
        let directive = {
            restrict: 'E',
            templateUrl: 'templates/footer/footer.view.html',
        };
        return directive; 
    }

})();