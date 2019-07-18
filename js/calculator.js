( function ( $ ) {


	$.fn.felipa_calculator = function() {

		/*** html will be rendered by the init() function ***/
		
			const html = '\
						<div class="row">\
						<input type="input" id="user-input" disabled>\
						</div>\
						<div class="row">\
							<button class="col-3 col-sm-6" data-func="clear" id="c">C</button>\
							<button class="col-3 col-sm-6" data-func="backspace" id="ce">CE</button>\
						</div>\
						<div class="row">\
							<button class="col-9 col-sm-9" data-func="keyboard" id="keydownSwitch">Keyboard Is Off<small><br>Press Space</small></button>\
							<button class="arithmetic-operations col-3 col-sm-3" data-operator="%">%</button>\
						</div>\
						<div class="row">\
							<button class="digits col-3 col-sm-3" data-digit="7">7</button>\
							<button class="digits col-3 col-sm-3" data-digit="8">8</button>\
							<button class="digits col-3 col-sm-3" data-digit="9">9</button>\
							<button class="arithmetic-operations col-sm-3" data-operator="/" id="divide">/</button>\
						</div>\
						<div class="row">\
							<button class="digits col-3 col-sm-3" data-digit="4">4</button>\
							<button class="digits col-3 col-sm-3" data-digit="5">5</button>\
							<button class="digits col-3 col-sm-3" data-digit="6">6</button>\
							<button class="arithmetic-operations col-sm-3" data-operator="*" id="multiply">*</button>\
						</div>\
						<div class="row">\
							<button class="digits col-3 col-sm-3" data-digit="1">1</button>\
							<button class="digits col-3 col-sm-3" data-digit="2">2</button>\
							<button class="digits col-3 col-sm-3" data-digit="3">3</button>\
							<button class="arithmetic-operations col-sm-3" data-operator="-" id="subtract">-</button>\
						</div>\
						<div class="row">\
							<button class="digits col-3 col-sm-3" data-decimal="." id="decimal">.</button>\
							<button class="digits col-3 col-sm-3" data-digit="0">0</button>\
							<button class="col-3 col-sm-3" id="calculate" data-calc="=">=</button>\
							<button class="arithmetic-operations col-3 col-sm-3" data-operator="+" id="add">+</button>\
						</div>\
						</div>';

		const container = $(this);
		let input = "";
		const maxlength = 22;
		let answered = false;
		let digitAdded = false;
		let decimalAdded = false;
		let keydownSwitch = false;
		let deleted;

		// init will be called as soon as our script is loaded
		function init() {
			createDomElements();
		}

		// When createDomElements is called, our html in the html variable will be appended to our container
		function createDomElements() {
			return $(container).append(html);
		}

		

		function processOnClickValue(value) {

		// Will check what value has been returned to us and call its corresponding function
		
			if (value.attr('data-digit')) {
				insertDigit(value.attr('data-digit'));
			}

			if (value.attr('data-operator')) {
				insertOperator(value.attr('data-operator'));
			}

			if (value.attr('data-decimal')) {
				insertDecimal(value.attr('data-decimal'));
			}

			if (value.attr('data-func') === 'clear') {
				clear();
			}

			if (value.attr('data-func') === 'backspace') {
				backspace();
			}

			if (value.attr('data-func') === 'keyboard') {
				keyboardSwitch('#keydownSwitch');
			}


			if (value.data('calc')) {
				calc();
			}
			
		}
		
		/*** Insert Values ***/

		function insertDigit(digit) {
			if (answered === true) { // I've added this condition to check if we've recieved an answer. If it's set to true, we'll call the clear input when the user tries to add a digit
				clear();
			}

			input += digit;
			digitAdded = true; // For each digit added, digitAdded will be set to true, This is so we could prevent our user from adding operators at start, avoid repetitive operators or test other conditions
			render()

		}

		function insertDecimal(decimal) {
			// When called, if no decimal has been added, will add one and set decimalAdded to true. We've done this so we could prevent our user from adding repeitive decimals

			if (decimalAdded === false) {
				input += decimal;
				decimalAdded = true;
				render();
			}

		}

		function insertOperator(operator) {
			// When our user has added a digit, digitAdded would equal to true, allowing our user to add an operator, will then set digitAdded to false preventing our user from adding another operator right after. Will also set decimalAdded to false allowing our user to add another decimal if they wish. 
			answered = false; // 

			if (digitAdded === true) {
				input += operator;
				digitAdded = false;
				decimalAdded = false;
				render();
			}
		}
			// This function is in charge of turning on our keyboard, it's off by default,

		function keyboardSwitch(btn) {
			if (keydownSwitch === false) {
				keydownSwitch = true;
				$(btn).html('Keyboard Is On<small><br>Press Space</small>');
				$(btn).css('background-color', '#FF5130');
			}

			else if (keydownSwitch === true) {
				keydownSwitch = false;
				$(btn).html('Keyboard Is Off<small><br>Press Space</small>');
				$(btn).css('background-color', '#03403F')
			}
		}


			// This function is in charge of evaluting our input
		function calc() {
			if (input.length > 0) {
				const answer = eval(input);
				$('#user-input').val(answer)
				input = answer;
				answered = true;
			}

		}

		function backspace() {
			if (input !== "") {
				digitAdded = true;
				deleted = input.substring(input.length, input.length - 1); // Will store deleted value into a varible to test it
				input = input.substring(0, input.length - 1); // last value will be removed
				checkBackspaceDeletion();
				render();
			}

		}
			// When this function is called, it will check if the deleted value was a decimal, if it was, decimalAdded will be set to false,
			// I added this piece of code because i was having problems when backspacing decimals. WHenever i backspaced a decimal my decimalAdded would still be set to true preventing me from readding decimals, This function resolved the issue.

		function checkBackspaceDeletion() {
			if (deleted === '.') {
				decimalAdded = false;
			}
		}

			// Clear will reset values to their default state
		function clear() {
			if (input !== "") {
				answered = false;
				digitAdded = false;
				decimalAdded = false;
				input = '0';
				render();
				input = "";
			}

		}
			// Aslong as input.length is not equal to maxlength which is set to 22 we'll render our input
		function render() {
			if (input.length <= maxlength) {
				$('#user-input').val(input);
			}

		}
			// Each key will call its corresponding function 
		function keypress(e) {
			const digitKeys = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]; 
			const validOperators = ["*", "+", "-", "/", "%"];
			const unpressedShiftKey = e.shiftKey === false;

			/* Digits */
			if (digitKeys.includes(e.keyCode) && unpressedShiftKey) {
				insertDigit(e.key)
			}

			/* Operators */
			if (validOperators.includes(e.key)) {
				insertOperator(e.key);
			}

			/* Calculate */
			if (e.keyCode === 13 || e.keyCode === 187 && unpressedShiftKey) {
				calc();
			}
			/* Clear */

			if (e.keyCode === 27 && unpressedShiftKey) {
				clear();
			}
			/* Backspace */
			if (e.keyCode === 8 && unpressedShiftKey) {
				backspace();
			}
			/* Insert Decimal */
			if (e.keyCode === 190 && unpressedShiftKey) {
				insertDecimal('.');
			}
		}


		init(); // createElements will be called


		// When any button on our calculator is clicked, will call the processOnClickValue function

		$('button').click(function() {
			processOnClickValue($(this));
			$(this).blur();
		})
 

		$(document).on('keydown', function(e) {
			if (keydownSwitch === true) { // If keydownSwitch is true, we'll allow access to the keypress function
				keypress(e);
			} 
			if (e.keyCode === 32) { // If keyCode 32 which is the space key is pressed, keyboardSwitch will be called which will set keydownSwitch to true allowing access to the keypress function, 
				keyboardSwitch('#keydownSwitch');
			}
		})



	}




} ( jQuery ) );
 
