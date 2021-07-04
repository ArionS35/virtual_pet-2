//Create variables here
var food;
function preload()
{
	//load images here
  dogHappy= loadImage("images/dogImg1.png")
  dogSad= loadImage("images/dogImg.png")
  food1= loadImage("images/food1.png")
}

function setup() {
	createCanvas(800, 700);
  
  database= firebase.database()

  database.ref('food').on("value", readPosition)

  ground= createSprite(400,600,800,400)
  ground.shapeColor='green';

  dog= createSprite(700,400,50,50)
  dog.addImage(dogSad)
  dog.scale= 0.2

  food1= new Food()
  food1.getfeedTime()

}


function draw() {  
 background("rgb(50,150,200)")
  drawSprites();
  //add styles here
  fill ("white")
  textSize(20)
  text("fedtime : " +food1.feedtime,200,50)

  if(food===0){
    dog.addImage(dogHappy)
    dog.scale= 0.2
    foods.scale= 0.001
  }

  food1.buttons()
  food1.foodImg()
}

function readPosition(data){
  food = data.val()
}

function writeStock(data){
  database.ref('/').set({
    food:data,
    feedtime:hour()
  })
}