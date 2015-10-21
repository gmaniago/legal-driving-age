(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var age = document.getElementById('age');
var outcome = document.getElementById('outcome');
var button = document.getElementById('button');

button.addEventListener("click", function (e) {
	e.preventDefault();
	if (!parseInt(age.value)) {
		outcome.innerHTML = "please enter a valid age";
	} else {
		parseInt(age.value) >= 16 ? outcome.innerHTML = "Yes. You are old enough to drive." : outcome.innerHTML = "No. You are too young to drive";
	}
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map