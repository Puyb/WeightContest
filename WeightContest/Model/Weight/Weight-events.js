

model.Weight.BMI.onGet = function() {
	return this.weight / this.player.height / this.player.height;
};


model.Weight.progress.onGet = function() {
	var _max = this.player.weights.max('weight');
    return (_max - this.weight) / (_max - this.player.targetWeight) * 100;
};


model.Weight.excuseVerdict.onGet = function() {
	var votes = { 'true': 0, 'false': 0 };
    this.excuseVotes.forEach(function(excuseVote) {
        votes[excuseVote.verdict]++;
    });
    return votes.true >= votes.false;
};


model.Weight.points.onGet = function() {
	var previous = this.player.weights.query('date < :1', this.date || new Date()).orderBy('date desc').first();
    if (!previous) {
        return 0;
    }
    delta = Math.ceil((previous.weight - this.weight) / 0.200);
    if(delta < 0) {
        return delta * 200;
    }
    return delta * 100;
};


model.Weight.endOfExcuseVote.onGet = function() {
	return new Date(this.date + 48 * 86400000);
};


model.Weight.date.events.init = function(event) {
	return new Date();
};
