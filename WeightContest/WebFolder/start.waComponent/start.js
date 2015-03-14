
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'start';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button1 = {};	// @Button
	// @endregion// @endlock

	// eventHandlers// @lock

	button1.action = function button1_action (event)// @startlock
	{// @endlock
		var name = $comp.widgets.name.value();
		var password = $comp.widgets.password.value();
		if(WAF.directory.loginByPassword(name, password)) {
			$$('component1').loadComponent('/me.waComponent');
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "action", button1.action, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
