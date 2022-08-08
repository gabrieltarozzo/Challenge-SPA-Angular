app.config(function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
        templateUrl: 'app/views/search.html',
        controller: 'SearchCtrl',
    })

    .when('/pull', {
        templateUrl: 'app/views/pull.html',
        controller: 'PullCtrl',
    })

    .when('/issues', {
        templateUrl: 'app/views/issues.html',
        controller: 'IssuesCtrl',
    })

    .otherwise({ redirectTo: '/' });
});