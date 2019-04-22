let mercury=0;
let venus=0;
let earth=0;
let mars=0;
let jupiter=0;
let saturn=0;
let planet=0;
function setup() {
  createCanvas(1400,900);
  
}


function draw() {
  background(70);
  translate(700,450);
  //Sun
  fill(255, 189, 51);
  ellipse(0,0,100,100);
  //Saturn
  rotate(saturn);
  fill(255, 220, 128);
  ellipse(440,0,50,50);
  ellipse(440,0,60,20);
  saturn+=0.006;
   
  //Jupiter
  rotate(jupiter);
  fill(255, 220, 183);
  ellipse(350,0,60,60);
  jupiter+=0.007;
  //Mars
  rotate(mars);
  fill(178, 75, 20);
  ellipse(250,0,29,29);
  mars+=0.013;
  //Earth
  rotate(earth);
  fill(51, 255, 141);
  ellipse(200,0,38,38);
  earth+=0.015;
  //Venus
  
  rotate(venus);
  fill(255, 141, 51);
  ellipse(150,0,35,35);
  venus+=0.01;
   //Mercury
  rotate(mercury);
  fill(198, 215, 255);
  ellipse(100,0,25,25);
  mercury+=0.025;

}