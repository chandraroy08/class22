class Cannon{
    constructor(x,y,width,height){

        var options={
            isStatic: true
        }
    this.body= Bodies.rectangle(x,y,width,height,options)
    this.width= width
    this.height= height
    this.x=x
    this.y=y
    World.add(world,this.body)

    this.cannonimage= loadImage("./assets/cannonBase.png")
    this.cannonimg= loadImage("./assets/canon.png")
}

display(){
    var pos= this.body.position
     rectMode(CENTER)
     push ()
    image(this.cannonimage,pos.x,pos.y,this.width,this.height)
    image(this.cannonimg,pos.x,pos.y,this.width,this.height)
    pop()
    

}





}