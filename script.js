var startBoard = [2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//var startBoard = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 2, 4, 8, 32, 16];
var board;
var score = 0;


function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};
function areEqual(arr1, arr2) {
	for(i=0; i<arr1.length; i++) {
		if(arr1[i]!=arr2[i])
			return false;
	}
	return true;
}

function update() {
	console.log("new");
	for(i=0; i<16; i++) {
		$('#b'+i).removeClass();
		if(board[i] == 0) {
			$('#b'+i).addClass('blank-tile');
			$('#b'+i).stop().fadeTo();
			$('#b'+i).css('opacity', '0');		
		}
		else {
			$('#b'+i).css('opacity', '1');
			$('#b'+i).addClass('tile'+board[i]);
			$('#b'+i).text(board[i]);
			
		}
		console.log("board"+i+" = "+board[i]);
	}
	$('#total').text("Score: " + score);
}
function initialize() {
	board = shuffle(startBoard);
	update();
}

function addNew() {
		var full = true;
		for(i=0; i<16; i++) {
			if(board[i]==0)
				full = false;
		}
		if(!full) {
		var newIndex = Math.floor(Math.random()*16);
		while(board[newIndex] != 0) {
			newIndex = Math.floor(Math.random()*16);
		}
		board[newIndex] = (Math.floor(Math.random()*2)+1)*2;
		$('#b'+newIndex).removeClass();
		$('#b'+newIndex).addClass('tile'+board[newIndex]);
		$('#b'+newIndex).text(board[newIndex]);
		$('#b'+newIndex).fadeTo(1000, 1);
		
		
		}
		//update();
}	

function moveUp() {
	var prevBoard = Array.from(board);
	for(k=0; k<4; k++) {
		for(i=4; i<16; i++) {
			if(board[i-4]==0){
				board[i-4] = board[i];
				board[i] = 0;
			}
		}
	}
	
	for(j=0; j<4; j++) {
		if(board[j]==board[j+4]) {
			board[j+4]=2*board[j];
			board[j] = 0;
			score += board[j+4];
		}
		if(board[j+4]==board[j+8]) {
			board[j+4] = 2*board[j+4];
			board[j+8] = 0;
			score += board[j+4]
		}
		if(board[j+8]==board[j+12]) {
			board[j+12]=2*board[j+8];
			board[j+8] = 0;
			score += board[j+12];
		}
			
	}
	
		for(k=0; k<4; k++) {
		for(i=4; i<16; i++) {
			if(board[i-4]==0){
				board[i-4] = board[i];
				board[i] = 0;
			}
		}
	}
	update();
	
	if(!areEqual(prevBoard, board))
		addNew();

}

function moveDown() {
	var prevBoard = Array.from(board);
	for(k=0; k<4; k++) {
		for(i=0; i<12; i++) {
			if(board[i+4]==0){
				board[i+4] = board[i];
				board[i] = 0;
			}
		}
	}
	
	for(j=0; j<4; j++) {
		if(board[j+8]==board[j+12]) {
			board[j+12]=2*board[j+8];
			board[j+8] = 0;
			score += board[j+12]; 
		}
		if(board[j+4]==board[j+8]) {
			board[j+4] = 2*board[j+4];
			board[j+8] = 0;
			score += board[j+4];
		}
		if(board[j]==board[j+4]) {
			board[j+4]=2*board[j];
			board[j] = 0;
			score += board[j+4];
		}		
	}
	
		for(k=0; k<4; k++) {
		for(i=0; i<12; i++) {
			if(board[i+4]==0){
				board[i+4] = board[i];
				board[i] = 0;
			}
		}
	}
	update();
	
	if(!areEqual(prevBoard, board))
		addNew();
}

function moveLeft() {
	var prevBoard = Array.from(board);
	for(k=0; k<4; k++) {
		for(i=0; i<16; i++) {
			if(i%4 != 0) {
				if(board[i-1]==0) {
					board[i-1] = board[i];
					board[i] = 0;
				}
			}
		}
	}
	for(j=0; j<4; j++) {
		if(board[4*j]==board[4*j+1]) {
			board[4*j+1]=2*board[4*j];
			board[4*j] = 0;
			score += board[4*j+1];
		}
		if(board[4*j+1]==board[4*j+2]) {
			board[4*j+1] = 2*board[4*j+1];
			board[4*j+2] = 0;
			score += board[4*j+1];
		}
		if(board[4*j+2]==board[4*j+3]) {
			board[4*j+3]=2*board[4*j+2];
			board[4*j+2] = 0;
			score += board[4*j+3];
		}
			
	}
	for(k=0; k<4; k++) {
		for(i=0; i<16; i++) {
			if(i%4 != 0) {
				if(board[i-1]==0) {
					board[i-1] = board[i];
					board[i] = 0;
				}
			}
		}
	}
	update();
	
	if(!areEqual(prevBoard, board))
		addNew();
}

function moveRight() {
	var prevBoard = Array.from(board);
	for(k=0; k<4; k++) {
		for(i=0; i<16; i++) {
			if(i%4 != 3) {
				if(board[i+1]==0) {
					board[i+1] = board[i];
					board[i] = 0;
				}
			}
		}
	}
	for(j=0; j<4; j++) {
		if(board[4*j+2]==board[4*j+3]) {
			board[4*j+3]=2*board[4*j+2];
			board[4*j+2] = 0;
			score += board[4*j+3];
		}
		if(board[4*j+1]==board[4*j+2]) {
			board[4*j+1] = 2*board[4*j+1];
			board[4*j+2] = 0;
			score += board[4*j+1];
		}
		if(board[4*j]==board[4*j+1]) {
			board[4*j+1]=2*board[4*j];
			board[4*j] = 0;
			score += board[4*j+1];
		}	
	}
	for(k=0; k<4; k++) {
		for(i=0; i<16; i++) {
			if(i%4 != 3) {
				if(board[i+1]==0) {
					board[i+1] = board[i];
					board[i] = 0;
				}
			}
		}
	}
	
	update();
	
	if(!areEqual(prevBoard, board))
		addNew();
}


function isGameOver() {
	for(i=0; i<16; i++) {
		if(board[i]==0)
			return false;
	}
	for(i=0; i<4; i++) {
		if(board[4*i]==board[4*i+1] || board[4*i+1]==board[4*i+2]
			|| board[4*i+2]==board[4*i+3])
			return false;
	}
	for(i=0; i<4; i++) {
		if(board[i]==board[i+4] || board[i+4]==board[i+8]
			|| board[i+8]==board[i+12])
			return false;
	}
	return true; 
}

function start() {
		$(document).on('keyup', (function(event) {
				if(event.keyCode == 38) {
					moveUp(); 
				}
				else if(event.keyCode == 40) {
					moveDown();
				}
				else if(event.keyCode == 37) {
					moveLeft();
				}
				else if(event.keyCode == 39) {
					moveRight(); 
				}
				if(isGameOver()) {
						$('#board').fadeTo(4000, 0.1);
						setTimeout(() => 
						{window.open("gameover.html?score="+score, "_self");}, 6000)
				}}))}


initialize();
start();


