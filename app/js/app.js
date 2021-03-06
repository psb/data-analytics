'use strict';

// Declare app level module which depends on filters, and services
angular.module('McApp', ['McApp.capacityServices', 'McApp.filters', 'headcountFilters'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/home', {templateUrl: 'partials/home.html', controller: HomeCtrl})
      .when('/headcount', {templateUrl: 'partials/headcount.html', controller: HeadCountCtrl})
      .when('/capacity', {templateUrl: 'partials/capacity.html', controller: CapacityCtrl})
      .when('/colleagues', {templateUrl: 'partials/colleagues.html', controller: ColleaguesCtrl})
      .when('/cost', {templateUrl: 'partials/cost.html', controller: CostCtrl})
      .when('/operations_costs', {templateUrl: 'partials/operations-costs.html', controller: OperationCostsCtrl})
      .otherwise({redirectTo: '/home'});
}]);


function HomeFragmentController($scope) {
    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
          $scope.transitionState = "blah"
    });
}
