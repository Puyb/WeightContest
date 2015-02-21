

model.Weight.BMI.onGet = function() {
	return this.weight / this.player.height / this.player.height;
};


model.Weight.progress.onGet = function() {
	var _max = this.player.weights.max('weight');
    return (_max - this.weight) / (_max - this.player.targetWeight) * 100;
};
