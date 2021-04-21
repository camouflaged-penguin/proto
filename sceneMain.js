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
      this.basket = this.add.image(200, 250, 'basket').setInteractive();
      this.basket.scaleX=.5;
      this.basket.scaleY=.5;

      this.input.setDraggable(this.basket);

      //  The pointer has to move 16 pixels before it's considered as a drag
      this.input.dragDistanceThreshold = 16;

      this.input.on('dragstart', function (pointer, gameObject) {

         gameObject.setTint(0xff0000);

     });

      this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

         gameObject.x = dragX;
        // gameObject.y = dragY;

     });

      this.input.on('dragend', function (pointer, gameObject) {

         gameObject.clearTint();

     });



  }
  update() {
    // everything that is constantly checked
    //kommentar hier
  }
}
