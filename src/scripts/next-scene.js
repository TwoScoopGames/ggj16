"use strict";

var games = [
	"crack-eggs",
	"feed-cat"
];

function randomItem(array) {
	var i = Math.floor(Math.random() * array.length);
	return array[i];
}

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	var failure = game.entities.find("failure").length > 0;
	console.log(failure ? "failure" : "success");
	var scene = randomItem(games);
	console.log(scene);
	game.switchScene(scene);
};
