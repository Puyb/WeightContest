
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'me';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button1 = {};	// @Button
	// @endregion// @endlock

	// eventHandlers// @lock
	var input = this.widgets.textInput1;
	$(input.node).prop('type', 'number');

	button1.action = function button1_action (event)// @startlock
	{// @endlock
		var weight = parseFloat(input.value());
		if (isNaN(weight)) {
			alert('Incorrect Weight');
		}
		var excuse = null;
		if (weight >= $comp.source.player.lastWeight + .2) {
			excuse = prompt("You gain weight !!! What's your excuse ?");
		}
		
		var e = ds.Weight.newEntity();
		e.player.setValue($comp.source.player.getCurrentElement());
		e.weight.setValue(weight);
		e.date.setValue(new Date());
		e.excuse.setValue(excuse);
		e.save(function() {
			$comp.source.player.serverRefresh();
			input).value('');
		});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "action", button1.action, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
