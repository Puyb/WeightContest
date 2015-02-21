
function getLatest(that) {
    return that.weights.orderBy('date desc').first();
}
model.Player.lastDate.onGet = function() {
    var latest = getLatest(this);
	return latest && latest.date;
};


model.Player.lastWeight.onGet = function() {
    var latest = getLatest(this);
	return latest && latest.weight;
};


model.Player.lastBMI.onGet = function() {
    var latest = getLatest(this);
	return latest && latest.BMI;
};


model.Player.lastProgress.onGet = function() {
    var latest = getLatest(this);
	return latest && latest.progress;
};


model.Player.points.onGet = function() {
	return 0;
};


model.Player.password.onGet = function() {
	return '******';
};


model.Player.password.onSet = function(value) {
	this.HA1key = directory.computeHA1(this.ID, value);
};
