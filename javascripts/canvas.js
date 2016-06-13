var x = document.createElement("CANVAS");
var x = document.getElementById("myCanvas");
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
</canvas>
var board = createBoard(380,380);
   boardx = (windowWidth - width) / 2;
   boardy = ((windowHeight - height) / 2) + 100;
   board.position(boardx, boardy);
