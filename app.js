const add = require('./adder.js');

class ViewManager {

	connectEventHandlers() {
		//wire up event handler for form submit
		document.getElementById('form-number')
		  .addEventListener(
		  	'submit',
		  	this.onSubmit);
	}

	onSubmit(event) {
	  //block form from actually submitting
	  //(which would refresh the page)
	  event.preventDefault();

	  //grab the number values as strign
	  let num1 = document.getElementById(
	  	'input-num1').value;
	  let num2 = document.getElementById(
	  	'input-num2').value;

	  //cast the strings to ints
	  num1 = parseInt(num1, 10);
  	  num2 = parseInt(num2, 10);

	  //add the numbers
	  const sum = add(num1, num2);

	  //output
	  alert(sum + sum);
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
