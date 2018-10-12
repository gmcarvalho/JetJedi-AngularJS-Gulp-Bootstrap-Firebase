angular.module('app').config([
    '$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/dashboard.html'
        }).state('listaJedi', {
            url: '/listaJedi',
            templateUrl: 'listaJedi/tabs.html'
        })

        $urlRouterProvider.otherwise('dashboard');
    }
])