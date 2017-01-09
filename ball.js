function Ball(){
    this.mass = 50;
    this.position = createVector(width/2, 0);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.gravity = createVector(0,90);
    this.bouncestrength = 0.95;
    this.volume = 1.00;

    this.update = function(){
        this.applyForce(this.gravity);// apply Gravity
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    this.applyForce = function(force) {
       var f =  p5.Vector.div(force,this.mass);
       this.acceleration.add(f);
    }

    this.edges = function(){
        if (this.position.y > height- this.mass/2 ){ 
           if (this.volume >= 0.001 ){
                this.volume *= 0.87;
                
                if (this.volume > 0){
                    bounceSound.play(0,1,this.volume); //time, rate, amp
                } 

            }else{
                this.volume = 0;
            }
            this.velocity.y *= -this.bouncestrength;
            this.position.y = height - this.mass/2;
        }
    }

    this.show = function (){
        noStroke();
        fill(255);
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowBlur = 25;
        drawingContext.shadowColor = "cyan";
        translate(0,0);
        ellipse(this.position.x,this.position.y,this.mass,this.mass);
    }
}