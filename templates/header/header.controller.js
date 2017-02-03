(function(){

    var app = angular.module('news-header', []);
    
    app.controller('HeaderController', headerController);
    app.directive('newsHeader', newsHeader);
    

    var staticMenus = [
        {
            id: 1,
            title: "Menu 1",
            url: "http://google.com",
        },
        
        {
            id: 1,
            title: "Menu 1",
            url: "http://google.com",
        },
        
        {
            id: 1,
            title: "Menu 1",
            url: "http://google.com",
        },
    ];


    function headerController() {
        this.menus = staticMenus
        console.log(this.menus);
    }

    function newsHeader() {
        var directive = {
            restrict: 'E',
            templateUrl: 'templates/header/header.view.html',
        }

        return directive;
    }




})();

































