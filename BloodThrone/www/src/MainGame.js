// GH: Player?

/* jshint browser:true */
// create BasicGame Class
MainGame = {

};

// create Game function in BasicGame
MainGame.Game = function (game) {
    this.game = game;
};



MainGame.Game.prototype.keyLeft = {};
MainGame.Game.prototype.keyRight = {};


// set Game function prototype
MainGame.Game.prototype = {

    init: function () {
        // set up input max pointers
        this.input.maxPointers = 1;
        // set up stage disable visibility change
        this.stage.disableVisibilityChange = true;
        // Set up the scaling method used by the ScaleManager
        // Valid values for scaleMode are:
        // * EXACT_FIT
        // * NO_SCALE
        // * SHOW_ALL
        // * RESIZE
        // See http://docs.phaser.io/Phaser.ScaleManager.html for full document
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // If you wish to align your game in the middle of the page then you can
        // set this value to true. It will place a re-calculated margin-left
        // pixel value onto the canvas element which is updated on orientation /
        // resizing events. It doesn't care about any other DOM element that may
        // be on the page, it literally just sets the margin.
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        // Force the orientation in landscape or portrait.
        // * Set first to true to force landscape. 
        // * Set second to true to force portrait.
        this.scale.forceOrientation(false, true);
        // Sets the callback that will be called when the window resize event
        // occurs, or if set the parent container changes dimensions. Use this 
        // to handle responsive game layout options. Note that the callback will
        // only be called if the ScaleManager.scaleMode is set to RESIZE.
        this.scale.setResizeCallback(this.gameResized, this);
        // Set screen size automatically based on the scaleMode. This is only
        // needed if ScaleMode is not set to RESIZE.
        this.scale.updateLayout(true);
        // Re-calculate scale mode and update screen size. This only applies if
        // ScaleMode is not set to RESIZE.
        this.scale.refresh();
     
        
    },

    update : function()
    {
        if(this.game.input.keyboard.isDown(Phaser.Keyboard.A))
        {
           this.player.body.velocity.x -= 10;
        }
    },

    preload: function () {

        // Here we load the assets required for our preloader (in this case a 
        // background and a loading bar)
        this.load.image('barbarian', 'asset/barbarian_b.png');
        this.load.image('bkg', 'asset/blood_sky.png');
    },

    create: function () {
        // Add logo to the center of the stage
    
        
         this.bkg = this.add.sprite(
            this.world.centerX, // (centerX, centerY) is the center coordination
            this.world.centerY,
            'bkg');
        // Set the anchor to the center of the sprite
        this.bkg.anchor.setTo(0.5, 0.5);
        
        
        this.player = this.add.sprite(this.world.centerX, this.world.height -100 , 'barbarian');
        
        this.player.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(this.player);
        // Set the anchor to the center of the sprite
        //this.logo.anchor.setTo(0.5, 0.5);
      //  this.player.anchor.setTo(0.5. 0);
        this.player.body.collideWorldBounds = true;
        this.player.body.bounce.y = 0.2;
        this.player.body.gravity.y = 200;
        
        this.game.input.enabled = true;
        this.keyLeft = this.game.input.keyboard.addKey(Phaser.Key.A);
        this.keyRight = this.game.input.keyboard.addKey(Phaser.Key.D);
        
        //this.keyLeft.onDown.add(moveLeft, this);
     },

    gameResized: function (width, height) {

        // This could be handy if you need to do any extra processing if the 
        // game resizes. A resize could happen if for example swapping 
        // orientation on a device or resizing the browser window. Note that 
        // this callback is only really useful if you use a ScaleMode of RESIZE 
        // and place it inside your main game state.

    }

};