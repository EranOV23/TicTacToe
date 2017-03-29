var $board = document.querySelector(".board");
var ticTacToe = new TicTacToe($board);

function TicTacToe() {
    var board = [];
    var BOARD_SIZE = 3;

    this.start = function () {
        for (var i=0; i<BOARD_SIZE; i++) {
            var rowArr = new Array(BOARD_SIZE);
            rowArr.fill(0);
            board.push(rowArr);
        }

        for(var i=0; i<BOARD_SIZE; i++){
			createRow(i)
		}
    }

    function createRow(i){
    	var $row = document.createElement("div");
		$row.setAttribute("id", "row" + i);
		$row.setAttribute("class", "row");
		$board.appendChild($row);

		for(var j=0; j<BOARD_SIZE; j++){
			createCell(j, $row, i);
		}
    }

    function createCell(j, $row, i){
    	var $cell = document.createElement("div");
		$cell.setAttribute("id", "c" + i + j);
		$cell.setAttribute("class", "cell");

   		$cell.onclick = function(){
			ticTacToe.play(i ,j); 			
   		}

		$row.appendChild($cell);
    }

   	var counter = 0;
    this.play = function(x,y) {
    	while(!isWin){

	    	if (board[x][y] !== 0){
	    		alert("this cell is already taken!");
	    		return;
	    	}

	    	else if(counter%2 == 0){
		    	board[x][y] = "X";
		    	document.querySelector("#c"+x+y).innerHTML = "X";
	    	}

	    	else{
		    	board[x][y] = "O";
		    	document.querySelector("#c"+x+y).innerHTML = "O";

	    	}

	    	if(counter >= 4){

		        var wins = [
		            [{x:0 , y:0},{x:1 , y:0},{x:2 , y:0}],
		            [{x:0 , y:1},{x:1 , y:1},{x:2 , y:1}],
		            [{x:0 , y:2},{x:1 , y:2},{x:2 , y:2}],
		            [{x:0 , y:0},{x:0 , y:1},{x:0 , y:2}],
		            [{x:1 , y:0},{x:1 , y:1},{x:1 , y:2}],
		            [{x:2 , y:0},{x:2 , y:1},{x:2 , y:2}],
		            [{x:0 , y:0},{x:1 , y:1},{x:2 , y:2}],
		            [{x:2 , y:0},{x:1 , y:1},{x:0 , y:2}],
		        ];

		        for(var i=0; i<8; i++){
		        	checkWin(wins[i]);
		        }

	    	}

	    	return counter++;
		    console.log(board);

	    }


    }

    var isWin = false;
    function checkWin(cells) {
        
        var cell1 = board[cells[0].x][cells[0].y];
        var cell2 = board[cells[1].x][cells[1].y];
        var cell3 = board[cells[2].x][cells[2].y];


        if (cell1 === cell2 && cell2 === cell3 && cell1 !== 0) {
            alert(cell1 + "wins");
			ticTacToe.printBoard();
            return isWin = true;
        }

    }

    this.printBoard = function () {
        var result = "";
        
        for (var row of board) {
            for (var cell of row) {
                result += cell; 
            }
            result += "\n";
        }

        console.log(result)
    }
}

ticTacToe.start();