class Paper{

constructor(x,y,radius)
 
	{
		
		var options={
			isStatic:false,     	
			restitution:0.3,
			friction:0.5,
			density:0.5,		
			}
		
		this.body = Bodies.circle(x,y,radius,options);
		this.radius = radius
		this.image = loadImage("paper.png")
		World.add(world,this.body);

	}
	display()

	{
		
		imageMode(CENTER);
        

		fill("green");


		image(this.image,this.body.position.x , this.body.position.y ,2*this.radius,2*this.radius);

			
			
	}

}
