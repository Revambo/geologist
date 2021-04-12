class Stone{
	constructor(x,y,l,b)
	{  var options = {
		restitution : 0.8,
		friction: 0.9,
		density: 12
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
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("gray");
			fill("gray");
            rect(0,0,this.l,this.b)

			pop()
	}

}