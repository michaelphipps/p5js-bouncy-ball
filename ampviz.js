function Ampviz(){
    this.graph = [];
    this.time = 0;
    this.offset = height - 200;
    this.amplitude = new p5.Amplitude();

    this.update = function(){
        var level = this.amplitude.getLevel();
        var size = map(level, 0, 1, 0, 900);
        this.time = map(millis(),0,10000,0,width);
        this.graph[floor(this.time)] = floor(size);
    }

    this.show= function(){
        fill(255,200,0);
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowBlur = 25;
        drawingContext.shadowColor = "red";
        smooth();
        strokeCap(ROUND);
        stroke(255,128,0);
        beginShape();
        for(var x = 0; x < this.time; x++){
            vertex(x,this.offset-this.graph[x]);
        }
        vertex(x+1,this.offset);
        endShape(CLOSE);
    }
}