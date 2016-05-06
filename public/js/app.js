/**
 * Created by Sunny on 16/5/2.
 */
var myApp = angular.module('myApp', ['ui.router', 'myApp.controllers', 'categories.controllers']);

//myApp.config(function($routeProvider) {
//    $routeProvider
//        .when('/home', {
//            templateUrl : 'templates/home.html',
//            controller  : 'homeCtrl'
//        })
//
//        .when('/categories',{
//            templateUrl : 'templates/categories.html',
//            controller : 'categoriesCtrl'
//        })
//
//        .when('/tips',{
//            templateUrl : 'templates/tips.html',
//            controller : 'tipsCtrl'
//        })
//
//        .otherwise({redirectTo: '/home'})
//});

myApp.config(['$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.when('', '/home');
    $stateProvider
        .state('home', {
            url:'/home',
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        })

        .state('categories', {
            url: '/categories',
            abstract: true,
            templateUrl: 'templates/categories.html'
        })

        .state('categories.large',{
            url: '',
            templateUrl: 'templates/large.html',
            controller: 'largeCatCtrl'
        })

        .state('categories.medium',{
            url: '/medium',
            templateUrl: 'templates/medium.html',
            controller: 'mediumCatCtrl'
        })

        .state('categories.small',{
            url: '/small',
            templateUrl: 'templates/small.html',
            controller: 'smallCatCtrl'
        })

        .state('tips', {
            url: '/tips',
            templateUrl: 'templates/tips.html',
            controller: 'tipsCtrl'
        })
}]);
