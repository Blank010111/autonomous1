void setup(){
size(800,800);
flock= new Flock();
for(int i >0,i<100;i++){
Bot b = new bot(width/2,height/2)
flock.addBots(b);
}
smooth();
}
void draw() {
  background(255);
  flock.run();
  
    // Instructions
  fill(0);
 };
