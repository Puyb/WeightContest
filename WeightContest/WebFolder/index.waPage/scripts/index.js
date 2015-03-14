
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @Button
// @endregion// @endlock

// eventHandlers// @lock

	button1.action = function button1_action (event)// @startlock
	{// @endlock

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "action", button1.action, "WAF");
// @endregion
};// @endlock
