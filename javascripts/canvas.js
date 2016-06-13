function setup() { 
var centerx = (windowWidth - width) / 2;
 	 var centery = (windowHeight - height) / 2;
   var board = createBoard(380,380);
   boardx = (windowWidth - width) / 2;
   boardy = ((windowHeight - height) / 2) + 100;
   board.position(boardx, boardy);
};
