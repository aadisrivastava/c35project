class Food{
    constructor(x,y){
      this.foodStock 
      this.lastFed 
      

    }
    getFoodStock(){
     
    


    }
    updateFoodStock(){


    }
    deductFood(){


    }
  display(){
    var x=80,  y=90;
    imageMode(CENTER);
    image(this.Img,420,20,70,70)
     if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
           if(i%10==0){
             x=80;
             y=y+50;
           }
           image(this.image,x,y,50,50);
           x=x+30
        }
      


     }

  }

    
}