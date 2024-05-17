const gameState = {
	score: 0
}

function preload () {
	x = 1
}

function create () {

	//Draw Checkers Board
	for (let y = 0; y < 8; y ++) {
		for (let x = 0; x < 8; x += 2) {
			if (y % 2 === 0) {
				this.add.rectangle((x * 100), (y * 100), 100, 100, 0x000000).setOrigin(0,0)
				this.add.rectangle((x * 100) + 100, (y * 100), 100, 100, 0xffffff).setOrigin(0,0)
			} else {
				this.add.rectangle((x * 100), (y * 100), 100, 100, 0xffffff).setOrigin(0,0)
				this.add.rectangle((x * 100) + 100, (y * 100), 100, 100, 0x000000).setOrigin(0,0)
			}
		}
	}

	//Draw Pucks
	for (x=150; x < 1000; x += 200) {
		this.add.circle(x, 50, 40, 0x0000ff)
	}
	for (x=50; x < 1000; x += 200) {
		this.add.circle(x, 150, 40, 0x0000ff)
	}
	for (x=150; x < 1000; x += 200) {
		this.add.circle(x, 250, 40, 0x0000ff)
	}

	for (x=150; x < 1000; x += 200) {
		this.add.circle(x, 550, 40, 0xff0000)
	}
	for (x=50; x < 1000; x += 200) {
		this.add.circle(x, 650, 40, 0xff0000)
	}
	for (x=150; x < 1000; x += 200) {
		this.add.circle(x, 750, 40, 0xff0000)
	}
}

function update () {

}

const config = {
  type: Phaser.AUTO,
  width: 800,
	height: 800,
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
