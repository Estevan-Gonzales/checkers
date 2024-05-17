const gameState = {
	score: 0
}

function preload () {
	x = 1
}

function create () {
	this.add.circle(100, 100, 100, 0x00ff00);

}

function update () {

}

const config = {
  type: Phaser.AUTO,
  width: 1000,
	height: 1000,
	backgroundColor: "0x000000",
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 200},
			enableBody: true,
			debug: false,
		}
	},
  scene: {
		preload,
		create,
		update
	}
}

const game = new Phaser.Game(config)
