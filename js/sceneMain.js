class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }
  preload()
  {
    //load images or sounds
    //this.load.image("key","path")
    this.load.image('banana', 'assets/banana.png')
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude',
     'assets/dude.png',
     { frameWidth: 32, frameHeight: 48 });
  }
  create() {
    console.log("message");
      this.sky = this.add.image(400, 300, 'sky');
      this.banana = this.add.image(200,250, 'banana');
  }
  update() {
    // everything that is constantly checked
  }
}
