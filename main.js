var game;
window.onload=function()
{
  var config = {
        type: Phaser.AUTO,
        width: 1920,
        height: 1080,
        parent: 'phaser-game',
        scene: [SceneMain]
    };
     game = new Phaser.Game(config);
}
