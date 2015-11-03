var bmalumCompany = angular.module('bmalumCompany', ['ngAnimate', 'ui.router', 'duScroll']);

bmalumCompany.controller('ScrollController', function($scope){
	var intro = angular.element(document.getElementById('intro'));
    var home = angular.element(document.getElementById('home'));
    var services = angular.element(document.getElementById('services'));
    var consulting = angular.element(document.getElementById('consulting'));
    var about = angular.element(document.getElementById('about'));
    var partners = angular.element(document.getElementById('partners'));

    $scope.intro = function() {
      container.scrollTo(intro, 750, 1000);
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
