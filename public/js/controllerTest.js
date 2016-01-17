(function() {
	"use strict";

	var app = angular.module("controllerTest", []);

	app.controller("CartController", function() {

        this.items = [];

        this.newItem = {
        	quantity: 1
        };
 

        this.addItem = function(cartForm) {

        	this.items.push(this.newItem);

        	this.newItem = {quantity: 1};

        	// setUntouched(cartForm);
        };

       	this.subTotal = function() {
       		
       	};


    });

})();