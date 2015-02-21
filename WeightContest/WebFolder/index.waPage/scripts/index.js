
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @Button
// @endregion// @endlock

// eventHandlers// @lock
$('#textInput1').prop('type', 'number');
	button1.action = function button1_action (event)// @startlock
	{// @endlock
		var weight = parseFloat($$('textInput1').value());
		if (isNaN(weight)) {
			alert('Incorrect Weight');
		}
		var excuse = null;
		if (weight >= source.player.lastWeight + .2) {
			excuse = prompt("You gain weight !!! What's your excuse ?");
		}
		
		var e = ds.Weight.newEntity();
		e.player.setValue(source.player.getCurrentElement());
		e.weight.setValue(weight);
		e.date.setValue(new Date());
		e.excuse.setValue(excuse);
		e.save(function() {
			source.player.serverRefresh();
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "action", button1.action, "WAF");
// @endregion
};// @endlock
