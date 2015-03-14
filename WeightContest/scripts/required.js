function playerLogin(userName, password) {
	debugger;
	var player = ds.Player({name: userName});
	if(!player) {
		return false;
	}
	if(!player.validatePassword(password)) {
		return { error: 1024, errorMessage: 'Invalid login' };
	}
	return {
		ID: player.ID,
		name: player.name,
		fullName: player.name,
		belongsTo: [],
		storage: { time: new Date() }
	};
}
