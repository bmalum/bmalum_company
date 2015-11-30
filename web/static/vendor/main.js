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


bmalumCompany.controller('ModalController', function($scope){

    $scope.consulting_modal = function() {
      console.log('Opening Modal Consulting');
      angular.element(consulting_modal).modal('show')
    }
    $scope.scalability_modal = function() {
      console.log('Opening Modal Consulting');
      angular.element(scalability_modal).modal('show')
    }
    $scope.storage_modal = function() {
      console.log('Opening Modal Consulting');
      angular.element(storage_modal).modal('show')
    }
    $scope.assistance_modal = function() {
      console.log('Opening Modal Consulting');
      angular.element(assistance_modal).modal('show')
    }
    $scope.development_modal = function() {
      console.log('Opening Modal Consulting');
      angular.element(development_modal).modal('show')
    }
    $scope.hosting_modal = function() {
      console.log('Opening Modal Consulting');
      angular.element(hosting_modal).modal('show')
    }
});

bmalumCompany.controller('FooterController', function($scope){
    $scope.agb_modal = function() {
      console.log('Opening Modal Consulting');
      angular.element(agb_modal).modal('show')
    }
    $scope.impressum_modal = function() {
      console.log('Opening Modal Consulting');
      angular.element(impressum_modal).modal('show')
    }
    $scope.disclaimer_modal = function() {
      console.log('Opening Modal Consulting');
      angular.element(disclaimer_modal).modal('show')
    }
});