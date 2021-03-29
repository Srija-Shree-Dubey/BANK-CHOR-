var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["45cb4bd0-9342-4af2-a010-2d6073e81d68","97209f3b-8e5d-4060-8951-e81730edd69b"],"propsByKey":{"45cb4bd0-9342-4af2-a010-2d6073e81d68":{"name":"coin","sourceUrl":null,"frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":12,"version":"Qks65Mq2_tHkpDBqa7yjG9tG7tCx0QOe","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/45cb4bd0-9342-4af2-a010-2d6073e81d68.png"},"97209f3b-8e5d-4060-8951-e81730edd69b":{"name":"diamond","sourceUrl":"assets/api/v1/animation-library/gamelab/wa81_Ik95NqJUJzWlrUAZU1P7HMPhR9o/category_obstacles/ore_diamond.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"wa81_Ik95NqJUJzWlrUAZU1P7HMPhR9o","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wa81_Ik95NqJUJzWlrUAZU1P7HMPhR9o/category_obstacles/ore_diamond.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

playSound("assets/bob.mp3",true);



var r1 = createSprite(200,186,350,330);
r1.shapeColor= ("#F4F4F4");

// GRASS
var grass_1 = createSprite(218,360,325,20);
grass_1.shapeColor = ("#91CD55");

var grass_2 = createSprite(218,365,10,10);
grass_2.shapeColor = ("#2CBE1C");

var grass_3 = createSprite(190,360,10,10);
grass_3.shapeColor = ("#4DF423");

var grass_4 = createSprite(162,365,10,10);
grass_4.shapeColor = ("#2CBE1C");

var grass_5 = createSprite(134,360,10,10);
grass_5.shapeColor = ("#2CBE1C");

var grass_6 = createSprite(106,365,10,10);
grass_6.shapeColor = ("#2CBE1C");

var grass_7 = createSprite(78,360,10,10);
grass_7.shapeColor = ("#4DF423");

var grass_8 = createSprite(246,360,10,10);
grass_8.shapeColor = ("#2CBE1C");

var grass_9 = createSprite(274,365,10,10);
grass_9.shapeColor = ("#2CBE1C");

var grass_10 = createSprite(302,360,10,10);
grass_10.shapeColor = ("#2CBE1C");

var grass_11 = createSprite(330,365,10,10);
grass_11.shapeColor = ("#4DF423");

var grass_12 = createSprite(358,360,10,10);
grass_12.shapeColor = ("#2CBE1C");




//WALL
var wall_1 = createSprite(25,185,5,330);
wall_1.shapeColor = ("#000000");

var wall_2 = createSprite(375,185,5,330);
wall_2.shapeColor = ("#000000");

var wall_3 = createSprite(200,23,350,5);
wall_3.shapeColor = ("#000000");

var wall_4 = createSprite(215,348,320,5);
wall_4.shapeColor = ("#000000");

var wall_5 = createSprite(200,75,5,110);
wall_5.shapeColor = ("#000000");

var wall_6 = createSprite(310,128,130,5);
wall_6.shapeColor = ("#000000");

var wall_7 = createSprite(310,128,130,5);
wall_7.shapeColor = ("#000000");

var wall_8 = createSprite(138,175,5,100);
wall_8.shapeColor = ("#000000");

var wall_9 = createSprite(180,128,80,5);
wall_9.shapeColor = ("#000000");

var wall_10 = createSprite(235,225,200,5);
wall_10.shapeColor = ("#000000");

var wall_11 = createSprite(60,200,75,5);
wall_11.shapeColor = ("#000000");

var wall_12 = createSprite(200,263,5,80);
wall_12.shapeColor = ("#000000");

var wall_13 = createSprite(200,340,5,10);
wall_13.shapeColor = ("#000000");

var wall_14 = createSprite(54,360,5,25);
wall_14.shapeColor = ("#000000");

var wall_15 = createSprite(25,371,5,50);
wall_15.shapeColor = ("#000000");



//CUPBOARD
var cupboard_1 = createSprite(88,33,125,17);
cupboard_1.shapeColor = ("#4F1B1B");

var cupboard_2 = createSprite(35,60,17,65);
cupboard_2.shapeColor = ("#4F1B1B");

var cupboard_3 = createSprite(173,138,65,17);
cupboard_3.shapeColor = ("#4F1B1B");

var cupboard_4 = createSprite(148,150,17,30);
cupboard_4.shapeColor = ("#4F1B1B");

var cupboard_5 = createSprite(298,338,150,17);
cupboard_5.shapeColor = ("#4F1B1B");

var cupboard_6 = createSprite(365,320,17,30);
cupboard_6.shapeColor = ("#4F1B1B");

var cupboard_7 = createSprite(365,100,17,50);
cupboard_7.shapeColor = ("#4F1B1B");

var cupboard_8 = createSprite(239,32,75,17);
cupboard_8.shapeColor = ("#4F1B1B");




//COINS
var coin_1 = createSprite(65,65,5,5);
coin_1.setAnimation("coin");
coin_1.scale = 0.5;

var coin_2 = createSprite(200,200,5,5);
coin_2.setAnimation("coin");
coin_2.scale = 0.5;

var coin_3 = createSprite(300,300,5,5);
coin_3.setAnimation("coin");
coin_3.scale = 0.5;

var coin_4 = createSprite(300,100,5,5);
coin_4.setAnimation("coin");
coin_4.scale = 0.5;

var coin_5 = createSprite(50,300,5,5);
coin_5.setAnimation("coin");
coin_5.scale = 0.5;



//LASERS
var laser1 = createSprite(100,321,200,5);
laser1.shapeColor = ("red");

var laser2 = createSprite(318,43,200,5);
laser2.shapeColor =( "red");

//OTHERS
var thief = createSprite(350,385,20,20);
thief.shapeColor = ("black");

var d_replacement = createSprite(350,40,5,5);

var diamond = createSprite(350,40,5,5);
diamond.setAnimation("diamond");
diamond.scale = 0.5;






laser1.velocityX = 0;
laser1.velocityY = -1;

laser2.velocityX = 0;
laser2.velocityY = 1;



function draw(){
  
background("#B8A99D");

thief.velocityX = 0;
thief.velocityY = 0;

diamond.velocityX = 0;
diamond.velocityY = 0;



if (keyDown(RIGHT_ARROW||keyDown("d"))) {
thief.velocityX = 3;
thief.velocityY = 0;
}

if (keyDown(LEFT_ARROW)||keyDown("a")) {
thief.velocityX = -3;
thief.velocityY =0;
}

if (keyDown(UP_ARROW)||keyDown("w")) {
thief.velocityX = 0;
thief.velocityY = -3;
}

if (keyDown(DOWN_ARROW)||keyDown("s")) {
thief.velocityX = 0;
thief.velocityY = 3;
}



createEdgeSprites();
laser1.bounceOff(edges);
laser2.bounceOff(edges);
thief.bounceOff(edges);
thief.bounceOff(grass_1);
thief.bounceOff(cupboard_1);
thief.bounceOff(cupboard_2);
thief.bounceOff(cupboard_3);
thief.bounceOff(cupboard_4);
thief.bounceOff(cupboard_5);
thief.bounceOff(cupboard_6);
thief.bounceOff(cupboard_7);
thief.bounceOff(cupboard_8);


//destroying
if (thief.isTouching(coin_1))
{
  coin_1.destroy();

}

if (thief.isTouching(coin_2))
{
  coin_2.destroy();

}

if (thief.isTouching(coin_3))
{
  coin_3.destroy();

}

if (thief.isTouching(coin_4))
{
  coin_4.destroy();

}

if (thief.isTouching(coin_5))
{
  coin_5.destroy();

}

if(thief.isTouching(diamond))
{
 diamond.destroy();
 
}
 

//WALL RETURNING

if
(
  thief.isTouching(wall_1)||thief.isTouching(wall_2)||thief.isTouching(wall_3)||
  thief.isTouching(wall_4)||thief.isTouching(wall_5)||thief.isTouching(wall_6)||
  thief.isTouching(wall_7)||thief.isTouching(wall_8)||thief.isTouching(wall_9)||
  thief.isTouching(wall_10)||thief.isTouching(wall_11)||thief.isTouching(wall_12)||
  thief.isTouching(wall_13)||thief.isTouching(wall_14)||thief.isTouching(wall_15)
  )
{

  
  thief.x= 350;
  thief.y= 385;
  
   playSound("assets/default.mp3", false);
  
}





 if (laser1.isTouching(thief)|| laser2.isTouching(thief))
{

 fill("#B86565");
 textSize(30);
 textFont("Agency FB");
 text("THIEF IS CAUGHT",150,395);
 laser1.setVelocity(0,0);
 laser2.setVelocity(0,0);
 thief.setVelocity(0,0);
}

if(thief.isTouching(d_replacement))
{
 
 fill("#54ECF6");
 textSize(30);
 textFont("Agency FB");
 text("!!YOU WON!!",150,395);
 laser1.setVelocity(0,0);
 laser2.setVelocity(0,0);
 thief.setVelocity(0,0);
  
}
 

drawSprites();

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
