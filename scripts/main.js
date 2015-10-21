'use strict';

var age = document.getElementById('age');
var outcome = document.getElementById('outcome');
var button = document.getElementById('button');

button.addEventListener("click", function(e) {
	e.preventDefault();
	if(!parseInt(age.value)) {
		outcome.innerHTML = "please enter a valid age";
	} 
	else {
		parseInt(age.value) >= 16 ? outcome.innerHTML = "Yes. You are old enough to drive." : outcome.innerHTML = "No. You are too young to drive";
	}
})