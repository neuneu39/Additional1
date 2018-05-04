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
			//	() => {
					this.onSubmitNewFactor.bind(this));
					//this.hasOwnProperty('count') ? this.count += 1 : this.count = 0;
			//	});
	/*			() => {
					this.onSubmitNewFactor;
					this.hasOwnProperty('count') ? this.count += 1 : this.count = 0;
				});
	*/
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
	  let i = document.getElementById("form-numbers").length; 
	  console.log(i);
	  
	  while(i > 3) {
 	  	let currentInput = document.getElementById(`input-num${i-1}`);console.log(currentInput);
 	  	console.log(currentInput);
 	  	if (isNaN(currentInput.value)) continue;
 	  	productNum = product(productNum, currentInput.value);
 	  	i--;
	  }

	  //output
	  this.renderProduct(productNum);
	}

	renderProduct(productNum) {
		document.querySelector('.sum').textContent = productNum;
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
		let classSum = document.querySelector('hr');

		inputNum.id = `input-num${nodeNum}`;		
		inputNum.type ="text";
		inputNum.autocomplete = "off";

//		inputNum.id = `input-num${this.count}`;


		makediv.appendChild(inputNum);

		formnode.insertBefore(makediv, classSum);
	
	}



}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
