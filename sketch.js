var myData, people = [];
function preload() {
    var localUrl = './assets/peopleinspace.json'
    myData = loadJSON(localUrl);
}
function setup() {
    createCanvas(500, 500);    

    for(var i=0; i < myData.people.length; i++) {
        var thisAstronaut = new Astronaut(myData.people[i].launchdate, myData.people[i].name, myData.people[i].title)
        people.push(thisAstronaut);
    }  
}
function draw() {
    background(15,15,76);
    for(var i=0; i < people.length; i++) {
        people[i].display();
        people[i].move();  
    }
}

function Astronaut(launchDate, name, title) {
    this.launchDate = Date.parse(launchDate);
    this.radius = floor( ((Date.now()-this.launchDate)/(1000*60*60*24))/2 );
    this.name = name;
    this.title = title;
    this.x = random(this.radius+1,width+1-this.radius);
    this.y = random(this.radius+1,height+1-this.radius); 
    this.display = function() {
      noStroke();
        if(this.title == 'Commander') {
            fill(16,153,71,200);
        } else {
            fill(161,161,226,200);
        }
        if(mouseX > this.x-this.radius && mouseX < this.x+this.radius && mouseY > this.y-this.radius && mouseY < this.y+this.radius) {
      
        fill(255,255,0);
         
        }
          
        ellipse(this.x,this.y,this.radius*2);
        if((mouseIsPressed == true)&&(mouseX > this.x-this.radius && mouseX < this.x+this.radius && mouseY > this.y-this.radius && mouseY < this.y+this.radius)) {
            push();
              fill(234,85,20);
            textSize(this.radius/2);
            textAlign(CENTER);
            text(this.name,this.x,this.y);
            pop();
          }else{
            fill(255,255,0);
          }
    
    }   
    this.increment = [1,1]  
    this.move = function() {
        this.x += this.increment[0];
        this.y += this.increment[1];
        
        if(this.x >= width - this.radius || this.x <= this.radius ) {
            this.increment[0] *= -1;
        }
        if(this.y >= height - this.radius || this.y <= this.radius ) {
            this.increment[1] *= -1;
        }
    }   
}
