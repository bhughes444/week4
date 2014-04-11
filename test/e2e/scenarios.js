'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {
  
	var htmlElement;

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getAttribute('id')).
        toMatch(/frmEdit/);
    });
	
	it ('should have a "Make:" label', function () {
		htmlElement = element(by.id('lblMake'));
		expect(htmlElement).not.toBe(undefined);
		expect(htmlElement.getText()).toEqual('Make:');
	});
	
	it('should have a "Make" edit', function() {
		htmlElement = element(by.id('edMake'));
		expect(htmlElement).not.ToBe(undefined);
		expect(htmlElement.getAttribute('value')).toEqual('Honda');
	});
	
	it('should have a "Make" span', function() {
		htmlElement = element(by.id('sMake'));
		expect(htmlElement).not.ToBe(undefined);
		expect(htmlElement.getText()).toEqual('Honda');
	});
	
	it ('should match entered value to span', function () {
		htmlElement = element(by.id('edMake'));
		htmlElement.clear();
		htmlElement.sendKeys("TEST");
		expect(htmlElement).toBe('TEST');
		htmlElement = element(by.id('sMake'));
		expect(htmlElement).toBe('TEST');
	});
	
	it ('should have a "Model:" label', function () {
		htmlElement = element(by.id('lblModel'));
		expect(htmlElement).not.toBe(undefined);
		expect(htmlElement.getText()).toEqual('Model:');
	});
	
	it('should have a "Model" edit', function() {
		htmlElement = element(by.id('edModel'));
		expect(htmlElement).not.ToBe(undefined);
		expect(htmlElement.getAttribute('value')).toEqual('Civic');
	});
	
	it('should have a "Model" span', function() {
		htmlElement = element(by.id('sModel'));
		expect(htmlElement).not.ToBe(undefined);
		expect(htmlElement.getText()).toEqual('Civic:');
	});
	
	it ('should match entered value to span', function () {
		htmlElement = element(by.id('edModel'));
		htmlElement.clear();
		htmlElement.sendKeys("TEST2");
		expect(htmlElement).toBe('TEST2');
		htmlElement = element(by.id('sModel'));
		expect(htmlElement).toBe('TEST2');
	});
	
	it ('should have a "Year:" label', function () {
		htmlElement = element(by.id('lblYear'));
		expect(htmlElement).not.toBe(undefined);
		expect(htmlElement.getText()).toEqual('Year:');
	});
	
	it('should have a "Year" edit', function() {
		htmlElement = element(by.id('edYear'));
		expect(htmlElement).not.ToBe(undefined);
		expect(htmlElement.getAttribute('value')).toEqual('2014');
	});
	
	it('should have a "Year" span', function() {
		htmlElement = element(by.id('sYear'));
		expect(htmlElement).not.ToBe(undefined);
		expect(htmlElement.getText()).toEqual('2014');
	});
	
	it ('should match entered value to span', function () {
		htmlElement = element(by.id('edYear'));
		htmlElement.clear();
		htmlElement.sendKeys("2000");
		expect(htmlElement).toBe('2000');
		htmlElement = element(by.id('sYear'));
		expect(htmlElement).toBe('2000');
	});
	
	it ('should have a "Price:" label', function () {
		htmlElement = element(by.id('lblPrice'));
		expect(htmlElement).not.toBe(undefined);
		expect(htmlElement.getText()).toEqual('Price:');
	});
	
	it('should have a "Price" edit', function() {
		htmlElement = element(by.id('edPrice'));
		expect(htmlElement).not.ToBe(undefined);
		expect(htmlElement.getAttribute('value')).toEqual('24000');
	});
	
	it('should have a "Price" span', function() {
		htmlElement = element(by.id('sPrice'));
		expect(htmlElement).not.ToBe(undefined);
		expect(htmlElement.getText()).toEqual('24000');
	});
	
	it ('should match entered value to span', function () {
		htmlElement = element(by.id('edPrice'));
		htmlElement.clear();
		htmlElement.sendKeys("20000");
		expect(htmlElement).toBe('20000');
		htmlElement = element(by.id('sPrice'));
		expect(htmlElement).toBe('20000');
	});
	
	

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
