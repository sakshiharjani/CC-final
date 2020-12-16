let soundtrack;
let font;
let arrow;
let xloc = 300;
let yloc = 300
let xWidth = 200
let rings;
let speed;
let dartY;
let dartsscore = 0;
let numberofRings = 7
let game = 0
let zero = 0
let one = 1
let two = 2
let three = 3
let four = 4
let five = 5
let redballoon;
let balloonscore = 0
let needle;
let balloons = [];
let v0;
let v1;
let holes = []
let hammer;
let molespeed = .5
let molescore = 0
let timePassed = 0 
let timeSinceStart = 0 
let maxTime = 30000
let theta = 0
let loading = true


function soundLoaded(song) {
  soundtrack = song
  soundtrack.stop()
  loading = false
}

function imageLoaded(image){
  arrow = image
  hammer = image
  loading = false 
  
}



function preload() {
  font = loadFont('MinecraftTen-VGORe.ttf')
  //font source https://www.fontspace.com/minecraft-ten-font-f40317
  
}

function restartGame() {
  timePassed = 0
  game = 0
  dartsscore = 0
  balloonscore = 0
  molescore = 0
  xWidth = 200
  xloc = 300
  yloc = 300
}

function setup() {
  createCanvas(900, 600);
  speed = 5
  soundtrack = loadSound('forestgame.mp3', soundLoaded)
  arrow = loadImage('arrow.png')
  //image source http://clipart-library.com/clipart/8iEjzrn8T.htm
  hammer = loadImage('hammer.png')
  //image source https://www.clipartmax.com/max/m2i8K9i8m2H7d3d3/
   // //sound source https://freesound.org/people/Baltiyar13/sounds/516916/
  
  for (let b = 0; b < 50; b++) {
    balloons.push({
      clr: color(random(135), random(0), random(245)),
      x: random(50, width-50),
      y: random(200, height-200),
      size: 50
    })
  }
  
  for (let h = 0; h<13; h++) {
    holes[h] = new Character(); 
  } 
}


function draw() {
    if (loading) {
    background(200, 200, 250)
    textFont(font, 15)
    text('loading', width/2, height/2)
    drawTarget(xloc, yloc+ 100, xWidth, numberofRings)
    xloc += speed
  } else {
  if(game === 0){
    drawMenu()
  }else if (game === one) {
    drawInstructions()
  } else if (game === two) {
    drawGame1()
  } else if (game === three) {
    drawGame2()
  } else if (game === four){
    drawGame3()
  } else if (game === five) {
    drawGame4()
  }
   if (game === two || game === three || game === four) {
    timePassed = millis() - timeSinceStart
   
    noFill()
    stroke(0, 0, 0)
    strokeWeight(100)
    rect(0, -20, width, height)


    noStroke()
    fill(100, 200, 100)
    rect(width/2, height-60, 10, 50)
    fill(255, 0, 0)
    ellipse(width/2 + 5, height-60, 30)

    fill(0, 0, 255)
    ellipse(width/2 + 90, height-40, 40)
    fill(200, 0, 255)
    ellipse(width/2 - 90, height-40, 40)
   }
  }
}

function drawMenu() {
  
  background(250, 150, 150)

  textFont(font, 40)
  textAlign(CENTER)
  text('Click anywhere to begin!', width-247, height - 10)
  
  
  fill(200, 200, 250, 70)
  quad(50, 120, 850, 120, 880, 500, 20, 500)

  
  for (let c=1; c<4; c++) {
    rectMode(CENTER)
    fill(0,0,0)
    strokeWeight(4)
    rect((200 * c) + 50, 200, 100, 50)
    line(200 * c, 220, 210, 300)
    line(300, 220, 290, 300)
    line(210, 300, 200, 350)
    line(290, 300, 300, 350)
    
    line(402, 220, 410, 300)
    line(498, 220, 490, 300)
    line(410, 300, 402, 350)
    line(490, 300, 498, 350)
    
    line(602, 220, 610, 300)
    line(698, 220, 690, 300)
    line(610, 300, 602, 350)
    line(690, 300, 698, 350)
    rect((200*c) + 50, 400, 100, 100)
    
    fill(0, 0, 0, 50)
    noStroke()
    quad(850, 350, 820, 350, 750, 450, 850, 450)
    quad(50, 350, 80, 350, 150, 450, 50, 450)
    
    noStroke()
    fill(100, 200, 100)
    rect((200*c) + 50, height/2+30, 10, 50)
    fill(255, 0, 0)
    ellipse((200*c) + 50, height/2 + 20, 30)
    fill(0, 0, 255)
    ellipse((200*c) + 80, height/2 + 70, 20)
    fill(200, 0, 255)
    ellipse((200*c) +20, height/2+70, 20)
  }
  
  fill('purple')
  textFont(font, 100)
  text("SAKSHI'S ARCADE", 450, 100)
  
  fill(120, 100, 200)
  quad(200, 225, 300, 225, 290, 300, 210, 300)
  fill(135, 220, 245)
  textFont(font, 15)
  text('DartMania!', 250, 260)
  textSize(9)
  text('1000 Points to Win', 250, 280)
  
  fill(220, 200, 100)
  quad(402, 225, 497, 225, 490, 300, 410, 300)
  fill('red')
  textFont(font, 15)
  text('Bubble Pop!', 450, 260)
  textSize(10)
  text('30 Points to Win', 450, 280)
  
  fill(220, 250, 100)
  quad(601, 225, 697, 225, 690, 300, 610, 300)
  fill('blue')
  textFont(font, 10)
  text('Whack-A-Mole!', 650, 260)
  text('35 Points to Win', 650, 280)
}

function drawInstructions() {
  background(130, 100, 240)
  textFont(font, 40)
  textAlign(CENTER)
  text("You will play 3 games.", width/2, height/2 -150)
  fill(255, 255, 255)
  text("Instructions will appear on the screen.", width/2, height/2 - 50)
  fill(255, 100, 100)
  text("Each game will last 30 seconds.", width/2, height/2+50)
  textSize(30)
  fill(255, 90, 200)
  text('Advance to games.', width-200, height - 140)
  text('Click anywhere to continue!', width-247, height - 100)
  textFont(font, 20)
  text('Press v to play/pause music.', 150, height- 10)
}


function drawGame1() {
  background(120, 100, 200);
  // let x = 850
  // let y = 50
   let timeLeft = ((maxTime - timePassed) / 1000).toFixed(0)
  timeLeft = max(timeLeft, 0)
  if (timeLeft <= 30){
  textAlign(CENTER)
  fill(200, 100, 150)
  textFont(font, 40)
  text(('time: ' + timeLeft), 130, 150)
}
  fill(200, 100, 200)
  text(dartsscore, width-100, 150)
  
  // theta += .5
  drawTarget(xloc, yloc, xWidth, numberofRings)
  xloc += speed
  // yloc += sin(theta)
  yloc = map(sin(theta), -1, 1, 200, 500)
  if (xloc >= width + 100) {
    xloc = 0
    xWidth -= 2
  }
  // drawTarget(x, y, xWidth, numberofRings)
  
  
  image(arrow, mouseX - 50, mouseY)
  arrow.resize(100, 100)
  let v0 = createVector(width/2, 590)
  let v1 = createVector(mouseX, mouseY)
  drawAim(v0, v1, 'black')
  
  
  drawTarget(760, 80, 100, numberofRings)
  textFont(font, 9)
  text('10', 760, 37)
  text('15', 760, 45)
  text('20', 760, 53)
  fill(135, 220, 245)
  text('25', 760, 60)
  text('30', 760, 67)
  text('40', 760, 75)
  text('50', 760, 83)
  
  fill(200, 200, 250)
  textFont(font, 50)
  textAlign(CENTER)
  text("Click to throw dart", width/2, 100)
  drawSprites();
  
  timeLeft = max(timeLeft, 0)
  
  if (timeLeft === 0) {
    textSize(50)
    textAlign(CENTER)
    fill(0, 0, 0)
    text("Advance to next game!", width / 2, height / 2 + 75)
    text("Press the right key.", width / 2, height / 2 + 120)
  }
 
 
}

function drawTarget(xloc, yloc, xWidth, numberofRings) {
  let color = 255 / numberofRings *3 
  rings = xWidth / numberofRings
  for (let i = 0; i < numberofRings; i++) {
    fill(i * color, 200, 250)
    strokeWeight(1)
    stroke(0, 0, 0)
    ellipse(xloc, yloc, xWidth - i*rings, xWidth - i*rings)
    // print(i, xWidth, rings, xWidth - i*rings)
  
  }
}


function drawAim(base, vector, color) {
  push()
  stroke(color)
  strokeWeight(1)
  fill(color)
  line(width/2, 590, vector.x, vector.y)
  rotate(vector.heading())
  pop()
}

function drawGame2() {
   background(220, 200, 100);
  
  let timeLeft = ((maxTime - timePassed) / 1000).toFixed(0)
  timeLeft = max(timeLeft, 0)
  if (timeLeft <= 30){
  textAlign(CENTER)
  fill(200, 100, 150)
  textFont(font, 40)
  text(('time: ' + timeLeft), 130, 150)
}
  
  for (let balloon of balloons) {
    noStroke()
    fill(balloon.clr)
    ellipse(balloon.x, balloon.y, balloon.size/2, balloon.size - 10)
    let d = dist(mouseX, mouseY, balloon.x, balloon.y)
    
    if (d < balloon.size/2.5 && mouseIsPressed && timeLeft > 0) {
      balloon.size += 2
    }
  
    if (balloon.size === 300 && timeLeft > 0){
      balloons.dead = true
      balloon.x = random(0, width)
      balloon.y = random(200, height)
      balloon.size = 50
      balloonscore += 1
    
    }
  }
   v0 = createVector(width/2, 590)
   v1 = createVector(mouseX, mouseY)
  drawAim(v0, v1, 'black')
  
  fill(250, 250, 250)
  textFont(font, 40)
  textAlign(CENTER)
  text("Hold down mouse to inflate bubble", width/2, 100)
  drawSprites();
  
  text(balloonscore, width - 200, 150)
  
  timeLeft = max(timeLeft, 0)
  if (timeLeft === 0) {
    textSize(50)
    textAlign(CENTER)
    fill(0, 0, 0)
    text("Advance to next game! >", width / 2, height / 2 + 75)
    text("Press the right key.", width / 2, height / 2 + 120)
  }
 
}

function drawGame3() {
  background(220, 250, 100);
  
  
  let timeLeft = ((maxTime - timePassed) / 1000).toFixed(0)
  timeLeft = max(timeLeft, 0)
  if (timeLeft <= 30){
  textAlign(CENTER)
  fill(200, 100, 150)
  textFont(font, 40)
  text(('time: ' + timeLeft), 130, 150)
}
  
  for (let h = 0; h<holes.length; h++) {
    holes[h].view()
    holes[h].move()
  }
  
  image(hammer, mouseX, mouseY)
  hammer.resize(100, 100)
  
  fill(250, 100, 255)
  textSize(40)
  text(molescore, width-200, 150)
  text("Click the holes to whack", width/2, 100 )
  
   
  timeLeft = max(timeLeft, 0)
  
  if (timeLeft === 0) {
    textSize(50)
    textAlign(CENTER)
    fill(0, 0, 0)
    text("Press the right key! >", width / 2, height / 2 + 75)
  }
  
}

class Character {
  constructor () {
    this.x = random(100, 800)
    this.y = random (200, 600)
    this.r = 100
  }
  view () {
    fill(0, 0, 0)
    ellipse(this.x, this.y, this.r*2, this.r)
    
    fill(250, 150, 0)
    noStroke()
    arc(this.x, this.y, 30, 100, PI, 0)
    fill(0, 0, 0)
    ellipse(this.x - 5, this.y - 30, 5)
    ellipse(this.x + 5, this.y - 30, 5)
    fill(205, 200, 250)
    strokeWeight(5)
    arc(this.x, this.y - 20, 10, 20, 0, PI)
  }
  move () {
    
  let timeLeft = ((maxTime - timePassed) / 1000).toFixed(0)
  timeLeft = max(timeLeft, 0)
    this.r -= molespeed
   if (dist(mouseX, mouseY, this.x, this.y - 10) < (this.r) && mouseIsPressed && timeLeft > 0) {
    holes.dead = true
    this.x = random(100, 800)
    this.y = random(200, 600)
    this.r = 60
    molescore += 1
 } else if (this.r === 0) {
    holes.dead = true
    this.x = random(100, 800)
    this.y = random(200, 600)
    this.r = 60
 }
  }
  }

function drawGame4() {
  // background(255, 255, 255)
  if (dartsscore >= 1000 && balloonscore >= 30 && molescore >= 35) {
  fill(200, 200, 200)
  textFont(font, 40)
  textAlign(CENTER)
  fill(0)
  text("Your score: ", 150, 100)
  text(dartsscore + balloonscore + molescore, 100, 150)
  text("You Win!", width/2, height/2 - 250)
  text("Pick your prize!", width/2, height/2 - 200)
  noStroke()
  fill('brown')
  ellipse(width/2, height/2, 100)
  ellipse(width/2-30, height/2-50, 50)
  ellipse(width/2+30, height/2-50, 50)
  ellipse(width/2, height/2+ 100, 100, 150)
  strokeWeight(10)
  stroke('brown')
  line(width/2-30, height/2+50, width/2-60, height/2+20)
  line(width/2+30, height/2+50, width/2+60, height/2+20)
  line(width/2-30, height/2+140, width/2-60, height/2+160)
  line(width/2+30, height/2+140, width/2+60, height/2+160)
    
 for (let i = 0; i<6; i++) {
    for(let v = 0; v<3; v++) {
      if(i%2===0){
      fill(i*200, v*200, 200)
      strokeWeight(1)
      stroke(0)
      rect(i*20+50, v*50 +300, 50, 50)
      }
    }
  }
    
  fill('orange')
  ellipse(750, 350, 100)
  noFill()
  strokeWeight(3)
  arc(740, 355, 117, 80, PI + QUARTER_PI, TWO_PI);
  arc(730, 390, 95, 80, PI + QUARTER_PI, TWO_PI);
  arc(770, 330, 65, 130, QUARTER_PI, QUARTER_PI+PI);
    
    
  } else {
  fill(200, 200, 200)
  textFont(font, 40)
  textAlign(CENTER)
  fill(0)
  text("Your score: ", 150, 100)
  text(dartsscore + balloonscore + molescore, 100, 150)
  text("You Didn't Get Enough Points", width/2, height/2 - 50)
  text("Try Again!", width/2, height/2)
  text("Press the right arrow to restart!", width/2, height/2 + 50)
  }
}


function mousePressed() {
  let timeLeft = ((maxTime - timePassed) / 1000).toFixed(0)
  timeLeft = max(timeLeft, 0)
  
  if(game === zero) {
    game = one
    
  } else if (game === one) {
    game = two
    timeSinceStart = millis()
  } else if (game === two) {
  theta += .01
  let dartWidth = 10
  let dartspeed = 5
  let dart = createSprite(mouseX, mouseY, dartWidth, 10)
  
  dart.velocity.x += dartspeed
  dart.velocity.y += 0
  // dart.velocity.y += map(sin(theta), -1, 1, 200, 500)
  
    
  if (dist(mouseX, mouseY, xloc, yloc) < ((xWidth-(6*rings))/2) && timeLeft > 0) {
    dartsscore += 50
   } else if (dist(mouseX, mouseY, xloc, yloc) < ((xWidth-(5*rings))/2) && timeLeft > 0) {
    dartsscore += 40
  } else if(dist(mouseX, mouseY, xloc, yloc) <  ((xWidth-(4*rings))/2) && timeLeft > 0) {
    dartsscore += 30
  } else if(dist(mouseX, mouseY, xloc, yloc) < ((xWidth-(3*rings))/2) && timeLeft > 0) {
    dartsscore += 25
  } else if(dist(mouseX, mouseY, xloc, yloc) < ((xWidth-(2*rings))/2) && timeLeft > 0) {
    dartsscore += 20
  } else if (dist(mouseX, mouseY, xloc, yloc) < ((xWidth-(1*rings))/2) && timeLeft > 0) {
    dartsscore += 15
  } else if (dist(mouseX, mouseY, xloc, yloc) < ((xWidth-(0*rings))/2) && timeLeft > 0) {
    dartsscore += 10
  }
  } else if (game === five && dartsscore >= 1000 && balloonscore >= 30 && molescore >= 35) {
   background(255, 255, 255)
    if (mouseX > 0 && mouseX<300) {
      textFont(font, 50)
      fill(0, 0, 0)
      textAlign(CENTER)
      text("You picked the Rubik's Cube!", width/2, 200)
      text("Press the right arrow to restart!", width/2, height-20)
    } else if (mouseX>350 && mouseX< 600 && mouseY > height/2) {
      textFont(font, 50)
      textAlign(CENTER)
      text("You picked the Teddy Bear!", width/2, 200)
      text("Press the right arrow to restart!", width/2, height-20)
    } else if (mouseX>600 && mouseY > height/2) {
      textFont(font, 50)
      textAlign(CENTER)
      text("You picked the Basketball!", width/2, 200)
      text("Press the right arrow to restart!", width/2, height-20)
      }
    }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
   if (game === two) {
    game = three
    timeSinceStart = millis()
  } else if (game === three) {
    game = four
    timeSinceStart = millis()
  } else if (game ===four) {
    game = five
    background(255, 255, 255)
  } else if (game=== five) {
    restartGame()
  }
  } else if (key === 'v') {
    if (soundtrack.isPlaying()) {
    soundtrack.stop();
  } else {
    soundtrack.play()
  }
  }
}