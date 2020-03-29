myApp.config(['$routeProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/views/login.html',
            controller: 'UserController',
            controllerAs: 'account'
        })
        .when('/dashboard', {
            templateUrl: '/views/allexpenses.html',
            controller: 'ExpenseController',
            controllerAs: 'expense'
        })
        .when('/addexpense', {
            templateUrl: '/views/addexpense.html',
            controller: 'AddController',
            controllerAs: 'add'
        })
        .when('/editexpense', {
            templateUrl: '/views/editexpense.html',
            controller: 'ExpenseController',
            controllerAs: 'expense'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);