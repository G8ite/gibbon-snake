const config = {
    type: Phaser.AUTO,
    width: parent.innerWidth,
    height: parent.innerHeight,
    transparent: true,
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

function preload() {
    
}

function create() {
   
}

function update() {

}