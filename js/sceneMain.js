class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }
  preload()
  {
    //load images or sounds
    //this.load.image("key","path")
    this.load.image('sky', 'assets/sky.png');
    this.load.image('background', 'assets/background.png');
    this.load.image('banana', 'assets/banana.png')
    this.load.image('basket', 'assets/basket.png')
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
    //  this.background = this.add.image(400, 300, 'background');
    //  this.banana = this.add.image(200, 250, 'banana');
      this.basket = this.add.image(200, 250, 'basket')
  }
  update() {
    // everything that is constantly checked
    //kommentar hier
  }
}
