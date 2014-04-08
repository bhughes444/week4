'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
	describe('MyCtrl', function() {
		var scope = {}, ctrl;
		
		beforeEach(module('myApp'));
		
		beforeEach(inject(function($controller) {
			scope = {};
			ctrl = $controller('MyCtrl1', {$scope: scope})
		}));
		
		it('should exist', inject(function() {
			expect(ctrl).not.toBe(undefined);
		}));
		
		it('should have a car property', inject(function() {
			expect(scope.car).not.toBe(undefined);
		}));
		
		it('should have a car.make property', inject(function() {
			expect(scope.car.make).not.toBe(undefined);
		}));
		
		it('should have a car.model property', inject(function() {
			expect(scope.car.model).not.toBe(undefined);
		}));
		
		it('should have a car.year property', inject(function() {
			expect(scope.car.year).not.toBe(undefined);
		}));
		
		it('should have a car.price property', inject(function() {
			expect(scope.car.price).not.toBe(undefined);
		}));
		
		it('should be Honda for make', inject(function() {
			expect(scope.car.make).toBe('Honda');
		}));
		
		it('should be Civic for model', inject(function() {
			expect(scope.car.model).toBe('Civic');
		}));
	});
	
});

describe('controllers', function(){
	describe('MyCtr2', function() {
		var scope = {}, ctrl;
		
		beforeEach(module('myApp'));
		
		beforeEach(inject(function($controller) {
			scope = {};
			ctrl = $controller('MyCtrl2', {$scope: scope})
		}));
		
		it('should exist', inject(function() {
			expect(ctrl).not.toBe(undefined);
		}));
		
		it('should have a car property', inject(function() {
			expect(scope.cars).not.toBe(undefined);
		}));
		
		it('should have a car property', inject(function() {
			expect(scope.cars.length).toBe(4);
		}));
		
		it('should have a car property', inject(function() {
			var Length = scope.cars.length + 1
			scope.cars.push({make:'Honda', model:'Civic', year:2014, price:24000});
			expect(scope.cars.length).toBe(Length);
		}));
		
		it('should have a car property', inject(function() {
			var make = scope.cars[1].make;
			expect(make).toBe('Chevy');
		}));

	});
	
});
