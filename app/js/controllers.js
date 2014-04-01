'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {

	$scope.car = {make:'Honda', model:'Civic', year:2014, price:24000};
  
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

	$scope.cars = [
		{make:'Ford', model:'Mustang', year:2014, price:65000},
		{make:'Chevy', model:'Cruz', year:2011, price:10000},
		{make:'Nissan', model:'Maxima', year:2012, price:20000},
		{make:'Toyota', model:'Supra', year:2010, price:45000}];
  
  }]);