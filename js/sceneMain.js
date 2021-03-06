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
      //wold bounds
      //this.matter.world.setBounds(0, 0, game.config.width, game.config.height);

      this.background = this.add.image(0, 0, 'background');
      this.background.setOrigin(0,0);

      var bananaGroup = this.physics.add.group({
        key: 'banana',
        repeat: 1,
        setXY: { x: (Phaser.Math.Between(150, 800)), y: 0, stepX: 70 }
      });

    //  this.background = this.add.image(400, 300, 'background');
    //  this.banana = this.add.image(200, 250, 'banana');
      //player = this.physics.add.sprite(100, 450, 'dude');
      //this.basket = this.add.image(200, 650, 'basket').setInteractive();
      this.basket = this.physics.add.image(200, 650, 'basket').setInteractive();
      this.basket.scaleX=.5;
      this.basket.scaleY=.5;
      this.basket.setCollideWorldBounds(true);
      this.input.setDraggable(this.basket);

      //  The pointer has to move 16 pixels before it's considered as a drag
      this.input.dragDistanceThreshold = 16;
      this.input.on('dragstart', function (pointer, gameObject) {

         //gameObject.setTint(0xff0000);
         gameObject.alpha=.5;

     });

      this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

         gameObject.x = dragX;
        // gameObject.y = dragY;

     });

      this.input.on('dragend', function (pointer, gameObject) {

         //gameObject.clearTint();
         gameObject.alpha=1;

     });

      this.physics.add.collider(bananaGroup, this.basket, this.hitBasket);



  }
  update() {
    // everything that is constantly checked
    //kommentar hier
  }

    hitBasket()
    {

    this.physics.pause();

    this.basket.setTint(0xff0000);
    console.log("stop")


    };




}

// function hitBomb (player, bomb)
// {
//   this.physics.pause();
//
//   player.setTint(0xff0000);
//
//   player.anims.play('turn');
//
//   gameOver = true;
// }
