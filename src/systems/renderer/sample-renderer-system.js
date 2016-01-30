"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("sampleRendererSystem", ["camera", "position", "size"]);
	ecs.addEach(function(entity) { // eslint-disable-line no-unused-vars
		var position = game.entities.get(entity, "position");
		var size = game.entities.get(entity, "size");
		game.renderer.fillStyle = "black";
		game.renderer.fillRect(position.x, position.y, size.width, size.height);
	}, "sampleRendererSystem");
};
