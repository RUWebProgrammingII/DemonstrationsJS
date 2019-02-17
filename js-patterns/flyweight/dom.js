var stateManager = {
	fly: function() {
		var self = this;
		document.getElementById('container').addEventListener('click', function(event) {
			if (this.matches('a.toggle')) {
				self.handleClick(this);
			}
		});
	},
	handleClick: function(element) {
		element.innerHTML += 'I have been clicked!';
	}
};
