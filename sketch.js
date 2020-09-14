//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;
var feedButton,addFood;
var foodObj;
var fedTime,lastFed;

function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  dogImage2=loadImage("images/dogImg1.png");
  milkImage=loadImage("images/Milk.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(200,200,20,20);
  dog.addImage(dogImage);
  dog.scale=0.2;
  foodObj=new Food();
  foodObj.addImage(milkImage);
  database=firebase.database();
  
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  stroke("yellow");
  feedButton =  createButton("Feed The Dog");
  feedButton.position(700,95);
  feedButton.mousePressed(feedDog);
  
  addFood=createButton("Add button");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {  
  background(46,139,87);
 
  if (keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(dogImage2)
  }
 
    foodObj.display();



   
  drawSprites();
  text("Note:Press UP_Arrow key to feed DRAGO" ,120,10)
  text("FOOD REMAINING:",180,120);
  
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
  Food:x
})
}
 function readStock(data){
  foodS=data.val();

 }
function feedDog(){
dog.addImage(dogImage2);
foodObj.updateFoodStock(foodObj.getFoodStock()-1);
database.ref('/').update({
  Food:foodObj.getFoodStock(),
  feedTime:hour()
})


}
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })


}
