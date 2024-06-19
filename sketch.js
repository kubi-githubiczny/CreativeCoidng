let button;
let commentP;
let clickCount = 0;
const maxClicks = 10; 
const comments = [
  "CLICK IT!",
  "Just do it!",
  "It can't be that difficult...",
  "Do you even want to that???",
  "BIG PURPLE BUTTON.",
  "Please.......",
];


function setup() {
  createCanvas(windowWidth, windowHeight);


  button = createButton('UNSUBSCRIBE');
  button.position(random(windowWidth - 100), random(windowHeight - 50));
  button.mousePressed(moveButton);
  styleButton(button);
  button.style('font-family', 'Comic Sans MS, sans-serif');

  
  commentP = createP('');
  commentP.position(windowWidth/2, windowHeight/2);
  commentP.style('font-size', '20px');
  commentP.style('color', '255');
  commentP.style('font-family', 'Comic Sans MS, sans-serif');
  


  
}

function draw() {

  
}

function moveButton() {
  clickCount++;

  if (clickCount >= maxClicks) {
    nextAction();
  } else {
   
    button.position(random(windowWidth - button.width), random(windowHeight - button.height));

    // Wyświetlanie losowego komentarza
    const randomComment = random(comments);
    commentP.html(randomComment);
  }
}

function nextAction() {

  window.location.href = "https://pmaksymenko.github.io/errornazaliczenie/";
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  moveButton();
}

function styleButton(btn) {
  btn.style('padding', '10px 20px');
  btn.style('font-size', '16px');
  btn.style('background-color', 'rgb(135,55,255)');
  btn.style('color', 'white');
  btn.style('border', 'none');
  btn.style('border-radius', '5px');
  btn.style('cursor', 'pointer');
  btn.style('transition', 'background-color 0.3s');
  btn.mouseOver(() => btn.style('background-color', 'rgb(163,101,255)'));
  btn.mouseOut(() => btn.style('background-color', 'rgb(135,55,255)'));
}
