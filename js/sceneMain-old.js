class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }
  preload()
  {
    //load images or sounds
    //this.load.image("key","path")
    this.load.image('sky', 'assets/sky.png');
    this.load.image('background', 'assets/background.jpg');
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
      this.background = this.add.image(0, 0, 'background');
      this.background.setOrigin(0,0);
    //  this.background = this.add.image(400, 300, 'background');
    //  this.banana = this.add.image(200, 250, 'banana');
      this.basket = this.add.image(200, 650, 'basket').setInteractive();
      this.basket.scaleX=.5;
      this.basket.scaleY=.5;
      this.basket.setDraggable();

      //  The pointer has to move 16 pixels before it's considered as a drag
      this.basket.dragDistanceThreshold = 16;
      this.basket.on('dragstart', function (pointer, this) {

         //gameObject.setTint(0xff0000);
         this.basket.alpha=.5;

     });

      this.input.on('drag', function (pointer, this, dragX, dragY) {

        this.basket.x = dragX;
        // gameObject.y = dragY;

     });

      this.basket.on('dragend', function (pointer, this) {

         //gameObject.clearTint();
         this.basket.alpha=1;

     });



  }
  update() {
    // everything that is constantly checked
    //kommentar hier
  }
}
