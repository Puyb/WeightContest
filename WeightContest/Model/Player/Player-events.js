
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
