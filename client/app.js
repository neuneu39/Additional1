const product = require('./product.js');

class ViewManager {

	connectEventHandlers() {
		//wire up event handler for form submit
		document.getElementById('form-numbers')
			.addEventListener(
		  		'submit',
			  	this.onSubmit.bind(this));

	  	document.getElementById('form-additional-numbers')
	  		.addEventListener(
				'submit',
				this.onSubmitNewFactor.bind(this));
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
	  let numberOfInputs = document.getElementById("form-numbers").length; 
	  let inputCheck = 0;

	  //if more than 3 inputs
	  while(numberOfInputs > 3) {
 	  	let currentInput = document.getElementById(`input-num${numberOfInputs-1}`).value;
 	  	currentInput = parseInt(currentInput, 10);
 	  	if (isNaN(currentInput)) {
 	  		inputCheck = 1;
 	  		break;
 	  	}
 	  	productNum = product(productNum, currentInput);
 	  	numberOfInputs--;
	  }

	  //output
	  if (inputCheck !== 1) {
	  	//event.preventDefault();
			this.renderProduct(productNum);
	  }
	}

	renderProduct(productNum) {
		document.querySelector('.multiple').textContent = productNum;
	}

	onSubmitNewFactor(event) {
		event.preventDefault();
		//連番とする
		let num = document.getElementById("form-numbers").length;
		this.insertNode(num);
	}

	insertNode(nodeNum) {

		let formnode = document.getElementById("form-numbers");
		let makediv = document.createElement("div");
		let inputNum = document.createElement('input');
		let refElement = document.querySelector('hr');

		inputNum = Object.assign( inputNum, {
			id: `input-num${nodeNum}`,
			type: "text",
			autocomplete: "off"
		});

		makediv.appendChild(inputNum);
		formnode.insertBefore(makediv, refElement);
	
	}

}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
