var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');
var food = document.getElementById('food');
var apple = document.getElementById('apple');
var hunger = document.getElementById('hunger');
var huncon = document.getElementById('huncon');
var hunbar = document.getElementById('hunbar');
var height;


function setIntervalAndExecute(fn, t) {
    fn();
    return(setInterval(fn, t));
}

var date = new Date().toLocaleString();

window.onbeforeunload = function(){
  localStorage.setItem('date2', Date());
};

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

canvasMain = document.getElementById("canvas");

canvasMain.width = windowWidth * pixelRatio;   /// resolution of canvas
canvasMain.height = windowHeight * pixelRatio;

canvasMain.style.width = windowWidth + 'px';   /// CSS size of canvas
canvasMain.style.height = windowHeight + 'px';

//load images
var piece = new Image();
var floor = new Image();
var pad = new Image();
var tray = new Image();
var bread = new Image();
var hotdog = new Image();

piece.src = "images/piece2.png";
floor.src = "images/floor2.png"
pad.src = "images/pad3.png";
tray.src = "images/tray.png";
bread.src = "images/hunger2.png";
hotdog.src = "images/hotdog4.png";

//variables
var wid = window.innerWidth ;
var hei = window.innerHeight;
var paY = canvasMain.height / 1.69811320754717;
var fX = - 10;
var fY = canvas.height - 393; //canvasMain.height / 1.222410865874363;
var pX = canvas.width / 2 - 166;
var pY = paY - 276; //canvas.height / 2.162162162162162;
var tX = canvasMain.width / 128.5714;
var tY = canvasMain.height / 1.5631;
var paX = canvasMain.width / 2 - 353.5;
var paY = canvasMain.height / 1.69811320754717;
var bX = canvas.width / 13.91752577319588;
var bY = canvas.height / 33.90894819466248;
var hX = canvas.height / 5.940594059405941;
var hY = canvas.height - 81;
var foodw = 121 + "px";
var foo = true;
var item1 = false;
var height = 119.4;
var down = 0.00016;
var hei2 = hei - hei;
var date = new Date();

var d1 = new Date(); //"now"
var d2 = Date.parse(localStorage.date2);
var diff = Math.abs(d1-d2);  // difference in milliseconds
var finaldif = Math.floor(diff / 1000);


// on load
function draw() {
  // fixed canvas resolution
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

  canvasMain = document.getElementById("canvas");

  canvasMain.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvasMain.height = windowHeight * pixelRatio;

  canvasMain.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvasMain.style.height = windowHeight + 'px';


  localStorage.setItem('items', JSON.stringify(height));


  var food = document.getElementById('food');
  food.style.bottom = 29 + "px";
  food.style.marginLeft = wid / 39 + "px";

  var apple = document.getElementById('apple');
  apple.style.marginLeft = wid / 10.54 + "px";
  apple.style.bottom = 138 + "px";

  var huncon = document.getElementById('huncon');
  huncon.style.left = 475 / 3.068669527896996 + "px";
  huncon.style.top = 27 + "px";

  var hunbar = document.getElementById('hunbar');
  document.getElementById('hunbar').style.top = 119.4 + "px";

  ctx.drawImage(pad, paX, paY);
  ctx.drawImage(piece, pX, pY);
  ctx.drawImage(floor, fX, fY);
  ctx.drawImage(tray, tX, tY);
  ctx.drawImage(bread, bX, bY);
  ctx.drawImage(hotdog, hX, hY);

  requestAnimationFrame(draw, 10);
  requestAnimationFrame(foodpi, 10);
  setInterval(hungerStopping, 10);
  requestAnimationFrame(hungerGoingDown, 100);
}

function counter() {
    var i = 0;
    // This block will be executed 100 times.
    setInterval(function(){
        if (i == 100) clearInterval(this);
        else console.log( 'Currently at ' + (height.toFixed(3)));
    }, 1000);
} // End
counter()

// starting hunger bar height
function test() {
  if (localStorage.getItem('items')) {
    height = JSON.parse(localStorage.getItem('items')) - (finaldif * 0.0987);
    console.log("effeF");
  } else {
    height = 119.4;
    console.log("efeafq");
  }
  console.log(finaldif);
}
test()

function hungerGoingDown() {
  height = height - down;
  document.getElementById('hunbar').style.height = height + "px";
}

function hungerStopping() {
  if (height < 0) {
    height = 0;
    down = 0;
  }
  if (height > 119.4) {
    height = 119.4;
  }
}

function foch() {
  foo = !foo;
}

function foodpi() {
  if (foo === true) {
//    document.getElementById('food').style.backgroundImage = "url" + "('images/foodf.png')";
    document.getElementById('food').style.height = 76 + "px";
    document.getElementById('food').style.width = 121 + "px";
    item1 = false;
    document.getElementById('apple').style.bottom = -1000 + "px";
    tray.src = "images/tray.png";
    tY = canvasMain.height - 299;
    hY = 1000000;
  }

  if (foo === false) {
//    document.getElementById('food').style.backgroundImage = "url" + "('images/foods.png')";
    document.getElementById('food').style.height = 102 + "px";
    document.getElementById('food').style.width = 125 + "px";
    item1 = true;
    document.getElementById('apple').style.bottom = 138 + "px";
    tray.src = "images/trays2.png";
    tY = canvasMain.height - 299 - 64;
    hY = canvasMain.height / 1.305925030229746;
  }
}

function applef() {
  console.log("apple clicked");
  height = height + 20;
  down = 0.00016;
}

function foodclicked() {
  if (true) {

  }
}
