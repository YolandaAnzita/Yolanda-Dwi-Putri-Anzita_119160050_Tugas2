let zombies = [];
function setup() {
  createCanvas(900, 600);

  for (let a = 0; a < 30; a++) {
    zombies.push(new Mover());
  }
}

function draw() {
  background('#F9FF35');
  
  for (let a = 0; a < zombies.length; a++) {
    zombies[a].gerakCuy();
    zombies[a].tampil();
    zombies[a].cekBatas();
  }
}


class Mover {
  constructor(){
    this.lokasi = createVector(random(width),random(height));
    
    this.kecepatan = createVector(1,0);
    this.percepatan = createVector(0.01,-0.01);
    this.panjanglebar = random(15, 25);
  }
  
  tampil(){
    stroke('black');
    fill('#00F7FF');
    rect(this.lokasi.x, 
             this.lokasi.y, 
             this.panjanglebar, 
             this.panjanglebar, 20);
  }
  
  gerakCuy(){
    var mouse = createVector(mouseX, mouseY);
    
    var arahMouse = p5.Vector.sub(mouse, this.lokasi);
    var topSpeed = 6;
    arahMouse.normalize();
    arahMouse.mult(0.5); 
  
    
    this.kecepatan.add(this.percepatan);
    this.kecepatan.add(arahMouse);
    this.kecepatan.limit(topSpeed);
    this.lokasi.add(this.kecepatan);
  }
  
  cekUjung(){
    if ( this.lokasi.x > windowWidth ) {
      this.lokasi.x = 0;
    }
    else if (this.lokasi.x < 0){
      this.lokasiX.x = windowWidth;
    }
  
    if ( this.lokasi.y > windowHeight ) {
      this.lokasiY.y = 0;
    }
    else if (this.lokasi.y < 0){
      this.lokasiY.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.lokasi.x < 0 || this.lokasi.x > width){
      this.kecepatan.x = -1*this.kecepatan.x
    }
    else if (this.lokasi.y < 0 || this.lokasi.y > height){
      this.kecepatan.y = -1*this.kecepatan.y
    }
  }
}