$.fn.calculatorPlugin = function() {

	var calculator = {
			input: '',


			init: function() {
				this.cacheDom();
				this.bindEvents();
				this.render();
			},

			cacheDom: function() {
				this.$el = $('#calculator');
				this.$userInput = $('#user-input')
				this.$button0 = this.$el.find('#0')
				this.$button1 = this.$el.find('#1')
				this.$button2 = this.$el.find('#2')
				this.$button3 = this.$el.find('#3')
				this.$button4 = this.$el.find('#4')
				this.$button5 = this.$el.find('#5')
				this.$button6 = this.$el.find('#6')
				this.$button7 = this.$el.find('#7')
				this.$button8 = this.$el.find('#8')
				this.$button9 = this.$el.find('#9')
				this.$buttonC = this.$el.find('#c')
				this.$buttonCE = this.$el.find('#ce')
				this.$buttonDecimal = this.$el.find('#decimal')
				this.$buttonAdd = this.$el.find('#add')
				this.$buttonSubtract = this.$el.find('#subtract')
				this.$buttonMultiply = this.$el.find('#multiply')
				this.$buttonDivide = this.$el.find('#divide')
				this.$buttonCalculate = this.$el.find('#calculate')
			},

			bindEvents: function() {
				this.$button0.on('click', this.button0.bind(this));
				this.$button1.on('click', this.button1.bind(this));
				this.$button2.on('click', this.button2.bind(this));
				this.$button3.on('click', this.button3.bind(this));
				this.$button4.on('click', this.button4.bind(this));
				this.$button5.on('click', this.button5.bind(this));
				this.$button6.on('click', this.button6.bind(this));
				this.$button7.on('click', this.button7.bind(this));
				this.$button8.on('click', this.button8.bind(this));
				this.$button9.on('click', this.button9.bind(this));
				this.$buttonC.on('click', this.buttonC.bind(this));
				this.$buttonCE.on('click', this.buttonCE.bind(this));
				this.$buttonDecimal.on('click', this.buttonDecimal.bind(this));
				this.$buttonAdd.on('click', this.buttonAdd.bind(this));
				this.$buttonMultiply.on('click', this.buttonMultiply.bind(this));
				this.$buttonSubtract.on('click', this.buttonSubtract.bind(this));
				this.$buttonDivide.on('click', this.buttonDivide.bind(this));
				this.$buttonCalculate.on('click', this.calculate.bind(this));
				
			},

			button0: function() {
				this.input += '0';
				this.render();
				
			},

			button1: function() {
				this.input += '1';
				this.render();
			},


			button2: function() {
				this.input += '2';
				this.render();
			},


			button3: function() {
				this.input += '3';
				this.render();
			},

			button4: function() {
				this.input += '4';
				this.render();
				
			},

			button5: function() {
				this.input += '5';
				this.render();
			},


			button6: function() {
				this.input += '6';
				this.render();
			},


			button7: function() {
				this.input += '7';
				this.render();
			},

			button8: function() {
				this.input += '8';
				this.render();
			},


			button9: function() {
				this.input += '9';
				this.render();
			},

			buttonC: function() {
				this.input = '0';
				this.render();
			},

			buttonCE: function() {
				this.input = this.input.toString().substring(0, this.input.length -1);
				this.render();
			},

			buttonDecimal: function() {
				this.input += '.';
				this.render();
			},

			buttonAdd: function() {
				this.input += '+';
				this.render();
			},

			buttonMultiply: function() {
				this.input += '*';
				this.render();
			},

			buttonSubtract: function() {
				this.input += '-';
				this.render();
			},

			buttonDivide: function() {
				this.input += '/';
				this.render();
			},

	
			render: function() {
				this.$userInput.val(this.input);
			},

			calculate: function() {
				this.input = eval(this.input);
				this.render();
				this.input = '';

			}

		}
		calculator.init();
	return this;
}