class Dustbin{
	constructor(x,y){
        var options = {

            isStatic:false
        
        }
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
		
		this.image=loadImage("dustbingreen.png");
		this.log1=Bodies.rectangle(x, y,200,20, {isStatic:true});
		this.log2=Bodies.rectangle(x-200/2, y-213/2, 20, 213, {isStatic:true});
		this.log3=Bodies.rectangle(x+200/2,y-213/2, 20, 213, {isStatic:true});
		
		World.add(world, this.log1);
		World.add(world, this.log2);
		World.add(world, this.log3);

	}
	display(){
			var posB=this.log1.position;
			var posL=this.log2.position;
			var posR=this.log3.position;

			push();
			translate(posL.x, posL.y);
			rectMode(CENTER);
			angleMode(RADIANS);
			fill(255);
			rotate(this.angle)
            pop();

			push();
			translate(posR.x, posR.y);
			rectMode(CENTER);
			fill(255);
            angleMode(RADIANS);
			rotate(this.angle);
			pop();
			
			push();
			translate(posB.x, posB.y+10);
			rectMode(CENTER);
			angleMode(RADIANS);
			rotate(this.angle);
			fill(255);
			imageMode(CENTER);
			image(this.image, 0,-213/2,200, 213);
			pop();
			
	}

}