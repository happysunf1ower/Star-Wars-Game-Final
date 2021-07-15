//First list out all the variable or items that wil be in your game. 
//Jedi
var lukeSkywalker, LSImage;
var leiaOrgana, LOImage;
//Sith 
var darthVader, DVImage;
//Extra
var kyberCrystal, KC1Image;
var kyberCrystal2, KC2Image;
var kyberCrystal3, KC3Image;
var kyberCrystal4, KC4Image;
var kyberCrystal5, KC5Image;

var deathStar, deathStarImage1;
var deathStarImage2;
var deathStarImage3;
var AlliesImage;
var JediTempleImage;
var pew, pewImage;
//Other Variables
var gameState = "start";
var score;
var startButton;
var startButtonImage;


//Now, load all the images.
function preload()
{
  //Jedi
  LSImage = loadImage("images/lukeSkywalker.png");
  LOImage = loadImage("images/leiaOrgana.png");

  //Sith
  DVImage = loadImage("images/darthVader.png");

  //Extra
  KC1Image = loadImage("images/kyberCrystalBlue.png");
  KC2Image = loadImage("images/kyberCrystalGreen.png");
  KC3Image = loadImage("images/kyberCrystalOrange.png");
  KC4Image = loadImage("images/kyberCrystalPurple.png");
  KC5Image = loadImage("images/kyberCrystalRed.png");
  
  //Other
  deathStarImage1 = loadImage("images/deathStarHall.jpeg");
  deathStarImage2 = loadImage("images/deathStarLandingPad.png");
  deathStarImage3 = loadImage("images/deathStarRoom.jpeg");
  AlliesImage = loadImage("images/allies.png");
  JediTempleImage = loadImage("images/jediTemple.jpg");
  startButtonImage = loadImage("images/startButton.png");
}



function setup() 
{
  //Create the sprites and assign images
  createCanvas(1300,800);

  //Jedi and Allies
  lukeSkywalker = createSprite(500,625,5,5);
  lukeSkywalker.addImage(LSImage);
  lukeSkywalker.scale = 0.6;

  //Sith
  darthVader = createSprite(10,10,5,5);
  darthVader.addImage(DVImage);
  darthVader.scale = 0.25;

  //Extra
  kyberCrystal = createSprite(30,400,5,5);
  kyberCrystal.addImage(KC1Image);
  kyberCrystal.scale = 0.1;

  kyberCrystal2 = createSprite(170,40,5,5);
  kyberCrystal2.addImage(KC2Image);
  kyberCrystal2.scale = 0.12;

  kyberCrystal3 = createSprite(500,700,5,5);
  kyberCrystal3.addImage(KC3Image);
  kyberCrystal3.scale = 0.12;

  kyberCrystal4 = createSprite(800,150,5,5);
  kyberCrystal4.addImage(KC4Image);
  kyberCrystal4.scale = 0.12;

  kyberCrystal5 = createSprite(1200,350,5,5);
  kyberCrystal5.addImage(KC5Image);
  kyberCrystal5.scale = 0.12;

  startButton = createSprite(670,330,50,50);
  startButton.addImage(startButtonImage);
  startButton.scale = 0.3;

  //adding leia at the end so that she overlaps the crystals
  leiaOrgana = createSprite(155,640,5,5);
  leiaOrgana.addImage(LOImage);
  leiaOrgana.scale = 0.6;

  score = 0;

 
}
  function draw() 
  {
    background(deathStarImage3); 

        //starting the game
        if(gameState === "start")
        {
          background(deathStarImage3);
          //everthing should be invisible
          lukeSkywalker.visible = false;
          leiaOrgana.visible = false;
          darthVader.visible = false;
          kyberCrystal.visible = false;
          kyberCrystal2.visible = false;
          kyberCrystal3.visible = false;
          kyberCrystal4.visible = false;
          kyberCrystal5.visible = false;
          //greet the player
          fill("white");
          textSize(15)
          text("Greetings! Luke Skywalker needs your help. While trying to corrupt the Sith government, he has gotten himself trapped on the Imperial Death Star.", 130, 100);
          text("Without him, the Force is unbalanced and the natural ways of the universe and shifting. You must learn to be a Jedi in order to save the New Galactic Republic.", 90, 130);
          text("Call on your Allies! Ignite your lightsaber! Only with supplies, stealth and sacrifice shall you bring the balance back to the Force!", 180, 160);
        }

      //starting game
      if(mousePressedOver(startButton))
      {
        gameState = "play"
      }
      if(gameState === "play")
      {
        startStage2();
      }


      //begin to play game
      if(mousePressedOver(leiaOrgana))
      {
       gameState = "play2"
      }
      if (gameState === "play2")
      {
        leiaOrgana2();
      }
      
      //play game
      if(score > 20)
      {
        gameState = "battle"
      }
      if(gameState === "battle")
      {
        battleSith();
      }

      //end game
      if(score > 200)
      {
        gameState = "end"
      }
      if(gameState === "end")
      {
        End();
      }
      
      drawSprites();
  }



  function startStage2()
  {
    //showing roster
    clear()
    background(AlliesImage);
    startButton.destroy();
    leiaOrgana.visible = true;

    //text
    fill("white");
    textSize(25);
    text("Click on your character to start!", 520, 150)
  }


  function leiaOrgana2()
  {
    clear();
    
    //allowing player to move leia
    leiaOrgana.x = mouseX;
    leiaOrgana.y = mouseY;

    background(JediTempleImage);

    //instructions
    fill("red");
    textSize(20);
    text("Begin your training by collecing the kyber crystals to power your weapon. Your training requires you to collect 20 points!", 150, 100);
    textSize(20);
    text("Crystals Collected: " + score, 25, 775);
    
    //making the crystals visible
    kyberCrystal.visible = true;
    kyberCrystal2.visible = true;
    kyberCrystal3.visible = true;
    kyberCrystal4.visible = true;
    kyberCrystal5.visible = true;
    
    //giving points for collecting crystals
    if(mousePressedOver(kyberCrystal))
    {
      score = score + 1;
      kyberCrystal.destroy();
    }

    if(mousePressedOver(kyberCrystal2))
    {
      score = score + 1;
      kyberCrystal2.destroy();
    }

    if(mousePressedOver(kyberCrystal3))
    {
      score = score + 1;
      kyberCrystal3.destroy();
    }
    
    if(mousePressedOver(kyberCrystal4))
    {
      score = score + 1;
      kyberCrystal4.destroy();
    }
    
    if(mousePressedOver(kyberCrystal5))
    {
      score = score + 1;
      kyberCrystal5.destroy();
    }
  }



 function battleSith()
  {
    //destroy any remaining crystals
    kyberCrystal.destroy();
    kyberCrystal2.destroy();
    kyberCrystal3.destroy();
    kyberCrystal4.destroy();
    kyberCrystal5.destroy();
    
    //changing positions
    background(148, 148, 148);
    leiaOrgana.position.x = 1100;
    leiaOrgana.position.y = 640; 
    leiaOrgana.x = mouseX;
    leiaOrgana.y = mouseY;

    darthVader.visible = true;
    darthVader.position.x = 250;
    darthVader.position.y = 525;
    //ensuring that leia can actually hit vaderr, not some bubble
    darthVader.setCollider("circle",0,0,40);
    darthVader.debug = false;
    
    //battle text
    textSize(30);
    fill("black");
    text("Your Opponent is Darth Vader, Battle for Justice!", 300, 100);
    textSize(20);
    text("(Strike your oppnent by dragging your character to him)", 375, 140)
    text("Score: " + score, 20, 60);

    //scoring
    if(leiaOrgana.collide(darthVader))
    {
      score++
    }

    
  }



  function End()
  {
    //setting up the background for the end part of the game
    clear();
    background(deathStarImage2)
    darthVader.destroy();
    lukeSkywalker.visible = true;
    leiaOrgana.position.x = 900;
    leiaOrgana.position.y = 640;

    //text at end
    textSize(20);
    fill("white");
    text("Congratulations! You have saved Luke Skywalker...and the Galaxy!", 375, 250);
    text(" On behalf of the galactic Empire, we would like to thank you for your bravery and strength.", 300, 280);
    text("Farewell fellow Jedi!", 625, 310);
  }

  


  