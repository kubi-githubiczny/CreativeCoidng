let button;
let commentP;
const comments = [
  "Kliknij!",
  "Po prostu kliknij!",
  "To nie może być aż tak skomplikowane...",
  "Ty chcesz to anulować w ogóle???",
  "Niebieski przycisk... Duży niebieski przycisk."
];


function setup() {
  createCanvas(windowWidth, windowHeight);


  button = createButton('ZREZYGNUJ');
  button.position(random(windowWidth - 100), random(windowHeight - 50));
  button.mousePressed(moveButton);
  styleButton(button);

  
  commentP = createP('');
  commentP.position(windowWidth/2, windowHeight/2);
  commentP.style('font-size', '20px');
  commentP.style('color', '255');
  commentP.style('font-family', 'Arial, sans-serif');
  
}

function draw() {
 
}

function moveButton() {
 
  button.position(random(windowWidth - button.width), random(windowHeight - button.height));

  
  const randomComment = random(comments);
  commentP.html(randomComment);
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
