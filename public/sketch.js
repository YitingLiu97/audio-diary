// This audio diary aims to record your thoughts and represent it visually
// Inspired by the social distancing experiences in 2020 Covid-19 pandemic 
// Created by Yiting Liu, NYU ITP 2021
// Blog link here: http://yitingliu97.wordpress.com/


//pastel color reference: https://bit.ly/2UIbKJL
let circles = [];
let count = 0;
let code;
// let input, button;

// mouse position changes the background color or just the time? 
//pastel color as bg: https://www.schemecolor.com/pastel-color-tones.php
let bgColor = ['#E0BBE4', '#957DAD', '#D291BC', '#FEC8D8', '#FFDFD3'];

let circleColor = ['#FFB5E8', '#FF9CEE', '#FFCCF9', '#FCC2FF', '#F6A6FF', '#B28DFF', '#C5A3FF', '#D5AAFF', '#ECD4FF', '#DCD3FF', '#A79AFF', '#B5B9FF', '#97A2FF', '#AFCBFF', '#AFF8DB', '#C4FAF8', '#85E3FF', '#ACE7FF', '#6EB5FF', '#BFFCC6', '#DBFFD6', '#F3FFE3', '#E7FFAC', '#FFC9DE', '#FFFFD1', '#FFABAB', '#FFBEBC', '#FFCBC1', '#FFF5BA', '#FBE4FF'];

let myRec = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
myRec.interimResults = true; // allow partial recognition (faster, less accurate)
myRec.continuous = true; // do continuous recognition

//externals 

// ability to change the font 
// change the shapes 
// save the image 
// post that on social media 

// font-family: 'Oswald', sans-serif;
// font-family: 'Liu Jian Mao Cao', cursive;
// font-family: 'Spicy Rice', cursive;
// font-family: 'Cairo', sans-serif;

//divide the part into four sections for change of font 
let size;
function changeFontfromMouse() {
  noStroke();
  size = windowWidth / 20;

  if (mouseX >= 0 && mouseX <= width / 2) {
    if (mouseY >= 0 && mouseY <= height / 2) {
      textFont('Oswald', size);
    } else if (mouseY > height / 2 && mouseY <= height) {
      textFont('Liu Jian Mao Cao', size);
    }
  }
  if (mouseX > width / 2 && mouseX <= width) {
    if (mouseY >= 0 && mouseY <= height / 2) {
      textFont('Spicy Rice', size);
    } else if (mouseY > height / 2 && mouseY <= height) {
      textFont('Cairo', size);
    }
  }

}
//ref: https://p5js.org/reference/#/p5/resizeCanvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
let cnv;
function setup() {
  cnv=createCanvas(windowWidth * 0.9, windowHeight * 0.9);
  cnv.parent('sketch-holder');
  // cnv.style('display','block');
  myRec.start();
  myRec.onResult = showResult; // bind callback function to trigger when speech is recognized

}

let userWords;

function showResult() {
  if (myRec.resultValue == true) {
    fill(255);
    textRec = myRec.resultString;
    print('textRec', textRec);
    text(textRec, width / 5, height / 3, width * 3 / 5, height * 2 / 3);
    //form an array of words 
    userWords = textRec.split(" ");
    count = userWords.length;
    print('userWords', userWords);
    wordstoLetters(userWords);
    print('code', code);

  }else {
    color(255);
    textFont('Libre Baskerville',30);
    textAlign(CENTER);
    let prompt="Say something."
    text(prompt,width/2,height/2);
  }

}

function wordstoLetters(arr) {
  for (let i = 0; i < arr.length; i++) {
    lastLettertoKeyCode(arr[i]);
  }

}

function lastLettertoKeyCode(letter) {

  //find out the last char in the word 
  let character = letter.charAt(letter.length - 1);

  //find out the keycode 
  let ChartoKeyCode = character.toUpperCase().charCodeAt(0);

  code = ChartoKeyCode;

  return ChartoKeyCode;
}


function draw() {
  modes();

}

let timer = 60; //60 seconds as the timer 
let delayTimer = 3;

let mode = "instruction";

function modes() {

  if (mode == "instruction") {
    instruction();
    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer--;

    }
    if (timer == 60 - delayTimer) {
      mode = "afterInstruction";
    }


  } else if (mode == "afterInstruction") {
   
    afterInstruction();
  }


}



let opening, slogan, branding, details;

function instruction() {
  opening = "Welcome to "
  branding = "Audio Diary";
  //details should be at footer 
  // links should be at footer as well - my github page and portfolio 

  details = "Arrow keys to change shapes. Move mouse to change fonts. Enter to save. "
  slogan="Thinking out loud."
  textAlign(CENTER);
  textFont('Libre Baskerville',40);
  text(`${opening}${branding}`, width / 2, height / 2);
  textFont('Georgia',20);
  text(`${slogan}`, width / 2, height / 1.8);

}


function afterInstruction() {
  background(bgColor[count % 5]);
  generateCircles();
  changeFontfromMouse();
  showResult();
  footerInstuction();
}

function footerInstuction() {
  if (windowWidth <= 800) {
    textSize(15);
  } else {
    textSize(size / 4);
  }
  textAlign(CENTER);
  textFont('Georgia');
  text(`${details}`, width / 2, height * 19 / 20);
  let credit = "Audio Diary Created by © Yiting Liu 2020.";
  text(credit, width / 2, height / 20);
}

function genearteBgColor() {
  let chosenBg = bgColor[code % 5];
  fill(chosenBg);
  rect(0, 0, windowWidth, windowHeight);

}

function generateCircles() {

  let chosenColor = circleColor[code % 30];
  print('chosenColor', code % 30);

  for (let i = 0; i < count; i++) {
    circles.push(new Circles(random(width), random(height), random(code / 2, code), chosenColor));
    circles[i].display(chosenColor);
    circles[i].expand(code % 10 * 10);
    circles[i].move();

  }
}

let formCircle = true;
let formRect = false;
let formLine = false;
let formArc = false;

function keyPressed() {
  // left 37 
  // up 38 
  // right 39 
  // down 40 
  // enter 13

  if (keyCode == 37) {
    print('keycode iis 37')

    formCircle = false;
    formRect = true;
    formLine = false;
    formArc = false;

  } else if (keyCode == 38) {
    formCircle = false;
    formRect = false;
    formLine = true;
    formArc = false;
  } else if (keyCode == 39) {
    formCircle = false;
    formRect = false;
    formLine = false;
    formArc = true;
  } else if (keyCode == 40) {
    formCircle = true;
    formRect = false;
    formLine = false;
    formArc = false;
  } else if (keyCode == 13) {
    save('AudioDiary_2020.jpg');

  }

}

class Circles {
  constructor(x, y, r, col) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = col;
    this.speed = 1;
  }

  move() {
    this.x = this.x + random(-this.speed, this.speed);
    this.y = this.y + random(-this.speed, this.speed);

  }

  display(col) {
    noStroke();
    fill(col);

    if (formCircle) {
      circle(this.x, this.y, this.r);
    } else if (formRect) {
      rect(this.x, this.y, (this.r + this.x) / 4, (this.r + this.y) / 4);

    } else if (formLine) {
      stroke(col);
      strokeWeight(2);
      line(this.x, this.y, this.r / 10, this.y);
    } else if (formArc) {
      ellipseMode(CENTER);
      arc(this.x, this.y, this.r, this.r / 2, 0, HALF_PI, PIE);

    }

  }

  expand(limit) {
    this.r = this.r + random(-this.speed, this.speed);
    if (this.r > limit) {
      this.speed = 0.7;
    } else {

      this.speed = 1;
    }
  }

}