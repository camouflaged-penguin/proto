var game;
window.onload=function()
{
  var config = {
        type: Phaser.AUTO,
        width: 1920,
        height: 1080,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        parent: 'phaser-game',
        scene: [SceneMain]
    };
     game = new Phaser.Game(config);
}
