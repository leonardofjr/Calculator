$.fn.calculatorPlugin = function() {

	var calculator = {
			input: '',


			init: function() {
				this.cacheDom();
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
				this.$buttonDecimal = this.$el.find('#decimal')
				this.$buttonAdd = this.$el.find('#add')
				this.$buttonSubtract = this.$el.find('#subtract')
				this.$buttonMultiply = this.$el.find('#multiply')
				this.$buttonDivide = this.$el.find('#divide')
				this.$buttonCalculate = this.$el.find('#calculate')
			},

		}
		calculator.init();
	return this;
}