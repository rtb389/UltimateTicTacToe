
		var clicks = 0; //Number of turns
		var Player = 0; //checks which person's turn it is

		var next = ""; //string to track where next player can go

		var end = false; //Boolean to check if a small board was just finished
		var game = false; //Variable to see if game is over

		var fill = []; //Array to track status of each of the 81 squares
		var over = []; //Array to check status of the 9 small boards
		
		/* Following functions fill parts of arrays used, to prevent 
		possible error from calling on undefined variables */

		for(var i = 0; i < 81; i++){
			fill[i] = "";
		}
		for(var i = 0; i < 9; i++){
			over[i] = "";
		}

		/*Following variables track how many squares in the smaller
		boards are filled, so that next can be adjusted if it goes
		to a completely filled board */

		var wTL = 0;
		var wTM = 0;
		var wTR = 0;
		var wML = 0;
		var wMM = 0;
		var wMR = 0;
		var wBL = 0;
		var wBM = 0;
		var wBR = 0;

		var num; //Used to track which square is being selected
		var num2; //Stores board number

		//check5 is a helper function for check3 and 4 to see if a 3x3 board is filled
		function check5(x, z){
			switch (x%9){
					case 0:
						if(z[x] == z[x+1] && z[x] == z[x+2]){
							return true;
						}
						else if(z[x] == z[x+3] && z[x] == z[x+6]){
							return true;
						}
						else if(z[x] == z[x+4] && z[x] == z[x+8]){
							return true;
						}
						break;
					case 1:
						if(z[x] == z[x-1] && z[x] == z[x+1]){
							return true;
						}
						else if(z[x] == z[x+3] && z[x] == z[x+6]){
							return true;
						}
						break;
					case 2:
						if(z[x] == z[x-1] && z[x] == z[x-2]){
							return true;
						}
						else if(z[x] == z[x+3] && z[x] == z[x+6]){
							return true;
						}
						else if(z[x] == z[x+2] && z[x] == z[x+4]){
							return true;
						}
						break;
					case 3:
						if(z[x] == z[x+1] && z[x] == z[x+2]){
							return true;
						}
						else if(z[x] == z[x+3] && z[x] == z[x-3]){
							return true;
						}
						break;
					case 4:
						if(z[x] == z[x+1] && z[x] == z[x-1]){
							return true;
						}
						else if(z[x] == z[x+3] && z[x] == z[x-3]){
							return true;
						}
						else if(z[x] == z[x+4] && z[x] == z[x-4]){
							return true;
						}
						break;
					case 5:
						if(z[x] == z[x-1] && z[x] == z[x-2]){
							return true;
						}
						else if(z[x] == z[x+3] && z[x] == z[x-3]){
							return true;
						}
						break;
					case 6:
						if(z[x] == z[x+1] && z[x] == z[x+2]){
							return true;
						}
						else if(z[x] == z[x-6] && z[x] == z[x-3]){
							return true;
						}
						else if(z[x] == z[x-2] && z[x] == z[x-4]){
							return true;
						}
						break;
					case 7:
						if(z[x] == z[x+1] && z[x] == z[x-1]){
							return true;
						}
						else if(z[x] == z[x-6] && z[x] == z[x-3]){
							return true;
						}
						break;
					case 8:
						if(z[x] == z[x-2] && z[x] == z[x-1]){
							return true;
						}
						else if(z[x] == z[x-6] && z[x] == z[x-3]){
							return true;
						}
						else if(z[x] == z[x-4] && z[x] == z[x-8]){
							return true;
						}
						break;
					default:
						return false;
			}
		}

		// check4 checks whether or not the entire board is finished
		function check4(){
			game = check5(num2, over);
			if(game){
				if(Player == 0){
					alert("WINNER: PLAYER 1");
				}
				else{
					alert("WINNER: PLAYER 2");
				}
			}
		}

		// check3 checks whether or not the small board is finished and fills the over array
		function check3(){
			num2 = Math.floor(num/9); 
			if(over[num2] == ""){
				end = check5(num, fill);
				if(end){
					if(Player == 0){
						over[num2] = "x";
					}
					else{
						over[num2] = "o";
					}
					end = false;
					check4();
				}
			}
		}

		// check2 is a helper function of check
		function check2(x){
			if ($(x).hasClass("TL")){
				num+= 0;
			}
			else if ($(x).hasClass("TM")){
				num+= 1;
			}
			else if ($(x).hasClass("TR")){
				num+= 2;
			}
			else if ($(x).hasClass("ML")){
				num+= 3;
			}
			else if ($(x).hasClass("MM")){
				num+= 4;
			}
			else if ($(x).hasClass("MR")){
				num+= 5;
			}
			else if ($(x).hasClass("BL")){
				num+= 6;
			}
			else if ($(x).hasClass("BM")){
				num+= 7
			}
			else if ($(x).hasClass("BR")){
				num+= 8
			}
			if(Player == 0){
				fill[num] = "x";
			}
			else{
				fill[num] = "o";
			}
			check3();
		}

		//firstClick adds the first turn's choice to the corresponding w variable
		function firstClick(x){
			if ($(x).hasClass("wTL")){
				wTL++;
			}
			else if ($(x).hasClass("wTM")){
				wTM++;
			}
			else if ($(x).hasClass("wTR")){
				wTR++;
			}
			else if ($(x).hasClass("wML")){
				wML++;
			}
			else if ($(x).hasClass("wMM")){
				wML++;
			}
			else if ($(x).hasClass("wMR")){
				wML++;
			}
			else if ($(x).hasClass("wBL")){
				wBL++;
			}
			else if ($(x).hasClass("wBM")){
				wBM++;
			}
			else if ($(x).hasClass("wBR")){
				wBR++;
			}
		}

		/* check finds the square selected and fills the corresponding
		element of the fill array (with the help of check2) */
		function check(x){
			if ($(x).hasClass("wTL")){
				num = 0;			
			}
			else if ($(x).hasClass("wTM")){
				num = 9;
			}
			else if ($(x).hasClass("wTR")){
				num = 18;
			}
			else if ($(x).hasClass("wML")){
				num = 27;
			}
			else if ($(x).hasClass("wMM")){
				num = 36;
			}
			else if ($(x).hasClass("wMR")){
				num = 45;
			}
			else if ($(x).hasClass("wBL")){
				num = 54;
			}
			else if ($(x).hasClass("wBM")){
				num = 63;
			}
			else if ($(x).hasClass("wBR")){
				num = 72;
			}		
			check2(x);	
		}

		//returnClass adds onto the w variables (for the next move) and adjusts next
		function returnClass(x){
			check(x);
			if($(x).hasClass("TL")){
				if(wTL == 9){
					next = ""
				}
				else{
					next = "wTL";
					wTL++;
				}
			}
			else if($(x).hasClass("TM")){
				if(wTM == 9){
					next = "";
				}
				else{
					next = "wTM";
					wTM++;
				}
			}
			else if($(x).hasClass("TR")){
				if(wTR == 9){
					next = "";
				}
				else{
					next = "wTR";
					wTR++;
				}
			}
			else if($(x).hasClass("ML")){
				if(wML == 9){
					next = "";
				}
				else{
					next = "wML";
					wML++;
				}
			}
			else if($(x).hasClass("MM")){
				if(wMM == 9){
					next = "";
				}
				else{
					next = "wMM";
					wMM++;
				}
			}
			else if($(x).hasClass("MR")){
				if(wMR == 9){
					next = "";
				}
				else{
					next = "wMR";
					wMR++;
				}
			}
			else if($(x).hasClass("BL")){
				if(wBL == 9){
					next = "";
				}
				else{
					next = "wBL";
					wBL++;
				}
			}
			else if($(x).hasClass("BM")){
				if(wBM == 9){
					next = "";
				}
				else{
					next = "wBM";
					wBM++;
				}
			}
			else if($(x).hasClass("BR")){
				if(wBR == 9){
					next = "";
				}
				else{
					next = "wBR";
					wBR++;
				}
			}

			clicks++;
			if(clicks == 1){
				firstClick(x);
			}
			
		}


$("document").ready(
	function(){
		$(".col-xs-1").hover(
			function(){
				if(!$(this).text().trim().length){
					if(next==""){
						$(this).css("background-color", "yellow");
					}
					else{
						if($(this).hasClass(next)){
							$(this).css("background-color", "yellow");
						}
					}
				}
			},
			function(){
				$(this).css("background-color", "white");
			}
		);
		$(".col-xs-1").click(
			function(){
				Player = clicks%2; 
				if(!$(this).text().trim().length && Player == 0){
					if(next==""){
						$(this).text("x");
						returnClass(this);
					}
					else{
						if($(this).hasClass(next)){
							$(this).text("x");
							returnClass(this);
						}
					}
				}
				if(!$(this).text().trim().length && Player == 1){
					if(next==""){
						$(this).text("o");
						returnClass(this);
					}
					else{
						if($(this).hasClass(next)){
							$(this).text("o");
							returnClass(this);	
						}
					}
				}
			}
		);
	}
);
