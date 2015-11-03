var bmalumCompany = angular.module('bmalumCompany', ['ngAnimate', 'ui.router', 'duScroll']);

bmalumCompany.controller('MyCtrl', function($scope){
	var container = angular.element(document.getElementById('top'));
    var home = angular.element(document.getElementById('home'));
    var services = angular.element(document.getElementById('services'));
    var consulting = angular.element(document.getElementById('consulting'));
    var about = angular.element(document.getElementById('about'));
    var partners = angular.element(document.getElementById('partners'));

    $scope.toTheTop = function() {
      container.scrollTop(0, 5000);
    }
    $scope.services = function() {
      container.scrollTo(services, 750, 1000);
    }
    $scope.consulting = function() {
      container.scrollTo(services, 750, 1000);
    }
    $scope.about = function() {
      container.scrollTo(services, 750, 1000);
    }
    $scope.partners = function() {
      container.scrollTo(services, 750, 1000);
    }
});
