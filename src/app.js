const config = {
    type: Phaser.AUTO,
    width: parent.innerWidth,
    height: parent.innerHeight,
    transparent: true,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
    },
    parent: 'game',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var game = new Phaser.Game(config);
let player;
let cursors;

function preload() {
    this.load.image('player', 'assets/player.png');
}

function create() {
    player = this.physics.add.image(100, 100, 'player').setDisplaySize(50, 50);
    player.setCollideWorldBounds(true);
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } 
    else if (cursors.up.isDown) {
        player.setVelocityY(-160);
    }
    else if (cursors.down.isDown) {
        player.setVelocityY(160);
    }
    else {
        player.setVelocityX(0);
        player.setVelocityY(0);
    }
}