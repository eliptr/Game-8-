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

//load images
var piece = new Image();
var floor = new Image();
var pad = new Image();

piece.src = "images/piece.png";
floor.src = "images/floor.png"
pad.src = "images/pad2.png";

//variables
var wid = window.innerWidth ;
var hei = window.innerHeight;
var fX = -10;
var fY = hei - 156;
var pX = wid / 2 - 59;
var pY = hei / 2;
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
  var wid = window.innerWidth ;
  var hei = window.innerHeight;
  ctx.canvas.width = wid;
  ctx.canvas.height = hei;

  localStorage.setItem('items', JSON.stringify(height));

  var pX = wid / 2 - 59;
  var pY = hei / 2;
  var paX = wid / 2 - 145.5;
  var paY = hei / 2 + 89;

  var food = document.getElementById('food');
  food.style.bottom = 29 + "px";
  food.style.marginLeft = wid / 39 + "px";

  var apple = document.getElementById('apple');
  apple.style.marginLeft = wid / 10.54 + "px";
  apple.style.bottom = 138 + "px";

  var hunger = document.getElementById('hunger');
  hunger.style.marginLeft = wid / 39 + "px";
  hunger.style.top = 20 + "px";

  var huncon = document.getElementById('huncon');
  huncon.style.marginLeft = wid / 39 + 135 + "px";
  huncon.style.bottom = hei2 + 20 + "px";

  var hunbar = document.getElementById('hunbar');
  document.getElementById('hunbar').style.top = 119.4 + "px";

  ctx.drawImage(pad, paX, paY);
  ctx.drawImage(piece, pX, pY);
  ctx.drawImage(floor, fX, fY);

  requestAnimationFrame(draw, 10);
  requestAnimationFrame(foodpi, 10);
//  setIntervalAndExecute(hungerGoingDown, 1000);
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

function test() {
  if (localStorage.getItem('items')) {
    height = JSON.parse(localStorage.getItem('items')) - (finaldif * 0.095);
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
    document.getElementById('food').style.backgroundImage = "url" + "('images/foodf.png')";
    document.getElementById('food').style.height = 76 + "px";
    document.getElementById('food').style.width = 121 + "px";
    item1 = false;
    document.getElementById('apple').style.bottom = -1000 + "px";
  }

  if (foo === false) {
    document.getElementById('food').style.backgroundImage = "url" + "('images/foods.png')";
    document.getElementById('food').style.height = 102 + "px";
    document.getElementById('food').style.width = 125 + "px";
    item1 = true;
    document.getElementById('apple').style.bottom = 138 + "px";
  }
}

function applef() {
  console.log("apple clicked");
  height = height + 20;
  down = 0.00016;
}
