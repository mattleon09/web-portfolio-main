var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);


myApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: '/app/views/home/home.html',
            controller: 'mainController'
        })
        .when('/education', {
            templateUrl: '/app/views/education/education.html',
            controller: 'educationController'
        })
        .when('/experience', {
            templateUrl: '/app/views/experience/experience.html',
            controller: 'experienceController'
        })
        .otherwise({ redirectTo: '/' });


});



myApp.controller('mainController', function ($scope, $route) {

    $scope.pageClass = 'page-home';
    $scope.isClicked = false;

    $scope.showMenu = function (button) {
        var elm = button;
        if ($scope.isClicked == false) {
              $('nav.navbar.navbar-default').addClass('grow');
            $('.hamburger').addClass('is-active');
          
            $scope.isClicked = true;
        } else {
                $('nav.navbar.navbar-default').removeClass('grow');
            $('.hamburger').removeClass('is-active');
        
            $scope.isClicked = false;
        }


    }

    $(document).ready(function () {
        $('ul.social > li.social-li > div.social-desc > section > a.social-a >  i, ul.social > li.social-li > div.social-desc > span').each(function (index) {
            //  $(this).addClass("fade-in");

            var t = $(this);
            setTimeout(function () {
                t.addClass('fade-in');
            }, (index + 1) * 175);
            $(this).removeClass("fade-out");
        });

    });
    // Current menu item
    $scope.isActive = function (path) {
        if ($route.current && $route.current.regexp) {
            return $route.current.regexp.test(path);
        }
        return false;
    };

});

myApp.controller('experienceController', function ($scope, $route) {

    $scope.pageClass = 'page-experience';
    $(document).ready(function () {
        $('ul.job-tech > li.lang-li > i, img:not(.header-img)').each(function (index) {
            //  $(this).addClass("fade-in");
            var t = $(this);
            setTimeout(function () {
                t.addClass('fade-in');
            }, (index + 1) * 150);
            $(this).removeClass("fade-out");
        });
    });
});

myApp.controller('educationController', function ($scope, $route) {

    $scope.pageClass = 'page-education';

    $(document).ready(function () {
        $('.header-img').addClass('fade-in');
    });
});