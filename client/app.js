const product = require('./product.js');

class ViewManager {

	connectEventHandlers() {
		//wire up event handler for form submit
		document.getElementById('form-numbers')
			.addEventListener(
		  		'submit',
			  	this.onSubmit.bind(this));

		document.getElementById('text-button')
			.addEventListener(
					'click',
					this.onClickNewFactor.bind(this));
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
	  let productNum = product(num1, num2);
		let listOfNewInputs = document.body.querySelectorAll('.new-factor');
		let inputCheck = 0;

		// counts forms of new factors
	  listOfNewInputs.forEach(inputs => {
	  	let currentInput = parseInt(inputs.value, 10);

	  	if (isNaN(currentInput)) {
	  		inputCheck = 1;
	  		return;
 	  	} else {
 	  		productNum = product(productNum, currentInput);	
 	  	}
	  });

	  if (inputCheck !== 1) {
			this.renderProduct(productNum);
	  }
	}

	renderProduct(productNum) {
		document.querySelector('.multiple').textContent = productNum;
	}

	onClickNewFactor(event) {
		event.preventDefault();
		this.insertNode();
	}

	insertNode() {
		let formnode = document.getElementById("form-numbers");
		let makediv = document.createElement("div");
		let inputNum = document.createElement('input');
		let refElement = document.querySelector('hr');

		inputNum = Object.assign( inputNum, {
			className: 'new-factor',
			id: 'input-num',
			type: "text",
		});

		makediv.appendChild(inputNum);
		formnode.insertBefore(makediv, refElement);
	
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
