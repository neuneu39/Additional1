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
	  const sum = product(num1, num2);

	  //output
	  this.renderSum(sum);
	}

	renderSum(sum) {
		document.querySelector('.sum').textContent = sum;
	}

	onSubmitNewFactor(event) {
		event.preventDefault();

		this.insertNode(1);
	}

	insertNode(nodeNum) {
		let formnode = document.getElementById("form-numbers");
		let makediv = document.createElement("div");
		let inputNum = document.createElement('input');
		let classSum = document.querySelector('hr');
		inputNum.type ="text"
		inputNum.id = `input-num${nodeNum}`;

		makediv.appendChild(inputNum);

		formnode.insertBefore(makediv, classSum);
		//formnode.appendChild(makediv);
		//inputNum = formnode.appendChild(inputNum);
	}

}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
