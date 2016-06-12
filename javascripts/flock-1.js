void setup(){
  var board = createBoard(380,380);
   boardx = (windowWidth - width) / 2;
   boardy = ((windowHeight - height) / 2) + 100;
   board.position(boardx, boardy);

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
