

model.Player.entityMethods.validatePassword = function(password) {
	return this.HA1key === directory.computeHA1(this.ID, password);
};


model.Player.entityMethods.addWeight = function(weight, excuse) {
	var newWeight = new db.Weight({
		player: this,
		weight: weight,
		excuse: excuse
	});
	newWeight.save();
};
