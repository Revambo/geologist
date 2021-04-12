class Iron{
	constructor(x,y,l,b)
	{  var options = {
		restitution : 0.8,
		friction: 3,
		density: 30
	}
	
		this.x=x;
		this.y=y;
        this.l=l;
        this.b=b;
		this.body=Bodies.rectangle(this.x, this.y,this.l, this.b, options)
		World.add(world, this.body);



	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("lightGrey");
			fill("lightGrey");
            rect(0,0,this.l,this.b)

			pop()
	}

}