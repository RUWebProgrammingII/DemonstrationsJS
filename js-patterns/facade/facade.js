var addEvent = function(element, event, fn) {
	if (element.addEventListener) {
		element.addEventListener(event, fn, false);
	} else if (element.attachEvent) {
		element.attachEvent('on' + event, fn);
	} else {
		el['on' + event] = fn;
	}
};
