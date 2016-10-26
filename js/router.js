angular.module('SPHSRobotics')
    .config(Router);

Router.$inject = ['$routeProvider'];
function Router($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'templates/home.html'
        })
        .otherwise({redirectTo: '/'});
}
