window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
			  window.webkitRequestAnimationFrame ||
			  window.mozRequestAnimationFrame    ||
			  function( callback ){
				window.setTimeout(callback, 1000 / 60);
			  };
	})();
	
	(function() {
		var lastTime = 0;
		var vendors = ['webkit', 'moz'];
		for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
			window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||   
										  window[vendors[x] + 'CancelRequestAnimationFrame'];
		}

		if (!window.requestAnimationFrame) {
			window.requestAnimationFrame = function(callback, element) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
				var id = window.setTimeout(function() {
					callback(currTime + timeToCall);
				}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}
		if (!window.cancelAnimationFrame) {
			window.cancelAnimationFrame = function(id) {
				clearTimeout(id);
			};
		}
	}());
  
  	var timeouts;
	function doTimer(length, resolution, oninstance, oncomplete){
		var steps = (length / 100) * (resolution / 10),
		speed = length / steps,
		count = 0,
		start = new Date().getTime();

		function instance(){
			if(count++ == steps){
				oncomplete(steps, count);
			}
			else{
				oninstance(steps, count);

				var diff = (new Date().getTime() - start) - (count * speed);
				window.setTimeout(instance, (speed - diff));
			}
		}
		timeouts = window.setTimeout(instance, speed);
	}
  
  	function lp() {
			 mv = setTimeout(main, 500);
			 createImage();
	    }
	
	var gameContainer = document.getElementById("gameContainer");
	var loseInterface = document.getElementById("loseInterface");
	
	function main(){
	
		document.getElementById("loader").style.display = "none";
		
		var gameContainer = document.getElementById('gameContainer');
		gameContainer.style.display = "block";
		
		 
	}
  
	function createImage(){
	var itemArray =
					[
						'url("background.png")',
						'url("headFrame.png")',
						'url("lifeCrystal.png")',
						'url("mainCharacter.png")',
						'url("startButton.png")',
						'url("hand.png")',
						'url("redGradient.png")',
						'url("handCursor.png")',
						'url("greenGradient.png")',
						'url("buttonBackground.png")',
						'url("loseStar.png")',
						'url("again1.png")',
						'url("again2.png")',
						'url("again3.png")',
						'url("again4.png")',
						'url("sad.png")',
						'url("graveStone.png")',
						'url("treeMonster.png")',
						'url("flowerMonster.png")',
						'url("key1.png")',
						'url("reward.png")',
						'url("exclamationMark.png")'
					];
	
	gameContainer.style.backgroundImage = itemArray[0];
	headFrame.style.backgroundImage = itemArray[1];
	lifeCrystal1.style.backgroundImage = itemArray[2];
	lifeCrystal2.style.backgroundImage = itemArray[2];
	lifeCrystal3.style.backgroundImage = itemArray[2];
	mainCharacter.style.backgroundImage = itemArray[3];
	startButton.style.backgroundImage = itemArray[4];
	redGradient.style.backgroundImage = itemArray[6];
	handCursor.style.backgroundImage = itemArray[7];
	greenGradient.style.backgroundImage = itemArray[8];
	loseInterface.style.backgroundImage = itemArray[9];
	loseStar.style.backgroundImage = itemArray[10];
	loseStar2.style.backgroundImage = itemArray[10];
	loseStar3.style.backgroundImage = itemArray[10];
	again1.style.backgroundImage = itemArray[11];
	again2.style.backgroundImage = itemArray[12];
	again3.style.backgroundImage = itemArray[13];
	again4.style.backgroundImage = itemArray[14];
	loseHandCursor.style.backgroundImage = itemArray[7];
	sad.style.backgroundImage = itemArray[15];
	
	graveStone1.style.backgroundImage = itemArray[16];
	graveStone2.style.backgroundImage = itemArray[16];
	graveStone3.style.backgroundImage = itemArray[16];
	graveStone4.style.backgroundImage = itemArray[16];
	
	treeMonster1.style.backgroundImage = itemArray[17];
	treeMonster2.style.backgroundImage = itemArray[17];
	
	flowerMonster1.style.backgroundImage = itemArray[18];
	flowerMonster2.style.backgroundImage = itemArray[18];
	
	key1.style.backgroundImage = itemArray[19];
	
	reward.style.backgroundImage = itemArray[20];
	exclamationMark.style.backgroundImage = itemArray[21];
	
	var characterArray = [
							'c1.png',
							'c2.png',
							'c3.png'
						]
	
	firstCharacterImage.style.backgroundImage = "url('" + characterArray[0] + "')";
	
	for(i=0; i < characterArray.length; i++)
	{	 
		if(i <characterArray.length)
		{
			var characterImage = document.createElement("IMG");
			characterImage.setAttribute("src", characterArray[i]);	
			characterImage.setAttribute("class","character");
			character.appendChild(characterImage);
		}
	}	
	
	var redMonsterArray = [
							'm1.png',
							'm2.png',
							'm3.png',
							'm4.png',
							'm5.png'
						]
	
	firstRedMonsterImage.style.backgroundImage = "url('" + redMonsterArray[0] + "')";
	
	for(i=0; i < redMonsterArray.length; i++)
	{	 
		if(i <redMonsterArray.length)
		{
			var redMonsterImage = document.createElement("IMG");
			redMonsterImage.setAttribute("src", redMonsterArray[i]);	
			redMonsterImage.setAttribute("class","redMonster");
			redMonster.appendChild(redMonsterImage);
		}
	}	
	
	var brickArray = [
						'url("brick1.png")',
						'url("brick2.png")',
						'url("brick3.png")',
						'url("brick4.png")',
						'url("brick5.png")',
						'url("brick6.png")',
						'url("brick7.png")',
						'url("brick8-9.png")',
						'url("brick10.png")',
						'url("block1.png")',
						'url("block2.png")'
					]
	
	brick1.style.backgroundImage = brickArray[0];
	brick2.style.backgroundImage = brickArray[1];
	brick3.style.backgroundImage = brickArray[2];
	brick4.style.backgroundImage = brickArray[3];
	brick5.style.backgroundImage = brickArray[4];
	brick6.style.backgroundImage = brickArray[5];
	brick7.style.backgroundImage = brickArray[6];
	brick8.style.backgroundImage = brickArray[7];
	brick9.style.backgroundImage = brickArray[7];
	brick10.style.backgroundImage = brickArray[8];
	
	block1.style.backgroundImage = brickArray[9];
	block2.style.backgroundImage = brickArray[10];
  }
  
	var renderCharacter;
	function characterAnimation(){
		var myIndex = 0;			
		var c = document.getElementsByClassName("character");		
		loopCharacter();
		function loopCharacter(){
			var i;
			for (i=0;i<c.length;i++)
			{
				c[i].style.display="none";
			}
			myIndex++;
			if (myIndex > c.length){}
			c[myIndex-1].style.display = "block";
			renderCharacter = setTimeout(loopCharacter,300);			
			 
			if (myIndex === 3){
				myIndex = 0;			
			}		
		}
	} 
  
    var renderRedMonster;
	function redMonsterAnimation(){
		var myIndex = 0;			
		var rM = document.getElementsByClassName("redMonster");		
		loopRedMonster();
		
		function loopRedMonster(){
			var i;
			for (i=0;i<rM.length;i++)
			{
				rM[i].style.display="none";
			}
			myIndex++;
			if (myIndex > rM.length){}
			rM[myIndex-1].style.display = "block";
			renderRedMonster = setTimeout(loopRedMonster,300);			
			 
			if (myIndex === 5){
				myIndex = 0;			
			}		
		}
	} 
  
	var life=3;
	function detectValue(){
		
		var brick1Element  = document.querySelector('#brick1');
		var brick1LeftStyle = getComputedStyle(brick1Element).getPropertyValue("left").split("px")[0];

		var brick1BoxElement  = document.querySelector('#gameContainer');
		var brick1BoxStyle = getComputedStyle(brick1BoxElement).getPropertyValue("width").split("px")[0];
		
		brick1Percentage = (100*brick1LeftStyle)/brick1BoxStyle;
		
		var characterElement  = document.querySelector('#character');
		var characterTopStyle = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];

		var characterBoxElement  = document.querySelector('#gameContainer');
		var characterBoxStyle = getComputedStyle(characterBoxElement).getPropertyValue("height").split("px")[0];
		
		characterPercentage = (100*characterTopStyle)/characterBoxStyle;
		
		detectAnimation = requestAnimationFrame(detectValue);
		
		if (brick1Percentage >= -58){
			// console.log(brick1Percentage);
			console.log(characterPercentage);			
		}

		if (brick1Percentage <= -58){
			if(characterPercentage >= 75){
				
				pausedAllAnimation();
				
				character.style.animationPlayState = "running";
				character.style.webkitAnimationPlayState = "running";
				
				var rM = document.getElementsByClassName("redMonster");	
				
				rM[0].style.display = "none";
				rM[1].style.display = "none";
				rM[2].style.display = "none";
				rM[3].style.display = "none";
				rM[4].style.display = "none";
				
				firstRedMonsterImage.style.display = "block";
				
				life=life-1;
					
				loseCrystal(life);
				loseInterfaceAnimation();
				
				clearTimeout(renderRedMonster);
				cancelAnimationFrame(detectAnimation);
			}
		}
	}
	
	function detectValue2(){
		
		var brick1Element  = document.querySelector('#brick1');
		var brick1LeftStyle = getComputedStyle(brick1Element).getPropertyValue("left").split("px")[0];

		var brick1BoxElement  = document.querySelector('#gameContainer');
		var brick1BoxStyle = getComputedStyle(brick1BoxElement).getPropertyValue("width").split("px")[0];
		
		brick1Percentage = (100*brick1LeftStyle)/brick1BoxStyle;
		
		var characterElement  = document.querySelector('#character');
		var characterTopStyle = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];

		var characterBoxElement  = document.querySelector('#gameContainer');
		var characterBoxStyle = getComputedStyle(characterBoxElement).getPropertyValue("height").split("px")[0];
		
		characterPercentage = (100*characterTopStyle)/characterBoxStyle;
		
		detectAnimation2 = requestAnimationFrame(detectValue2);
		
		if (brick1Percentage >= -58){
			console.log(brick1Percentage);	
		}

		if (brick1Percentage <= -58){
			if(characterPercentage >= 75){				
			
				pausedAllAnimation();
				
				character.style.animation= "dropReset1 1s forwards";
				character.style.webkitAnimation= "dropReset1 1s forwards";
				
				character.style.animationPlayState = "running";
				character.style.webkitAnimationPlayState = "running";
				
				var rM = document.getElementsByClassName("redMonster");	
				
				rM[0].style.display = "none";
				rM[1].style.display = "none";
				rM[2].style.display = "none";
				
				firstRedMonsterImage.style.display = "block";
				
				life=life-1;
				
				loseInterfaceResetAnimation();
				loseCrystal(life);
				
				clearTimeout(renderRedMonster);
				cancelAnimationFrame(detectAnimation2);
			}
		}

	}
	
	function detectValue3(){
		
		var brick1Element  = document.querySelector('#brick1');
		var brick1LeftStyle = getComputedStyle(brick1Element).getPropertyValue("left").split("px")[0];

		var brick1BoxElement  = document.querySelector('#gameContainer');
		var brick1BoxStyle = getComputedStyle(brick1BoxElement).getPropertyValue("width").split("px")[0];
		
		brick1Percentage = (100*brick1LeftStyle)/brick1BoxStyle;
		
		var characterElement  = document.querySelector('#character');
		var characterTopStyle = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];

		var characterBoxElement  = document.querySelector('#gameContainer');
		var characterBoxStyle = getComputedStyle(characterBoxElement).getPropertyValue("height").split("px")[0];
		
		characterPercentage = (100*characterTopStyle)/characterBoxStyle;
		
		detectAnimation3 = requestAnimationFrame(detectValue3);
		
		if (brick1Percentage >= -58){
			console.log(brick1Percentage);	
		}

		if (brick1Percentage <= -58){
			if(characterPercentage >= 75){

				pausedAllAnimation();
				
				character.style.animation= "dropReset1 1s forwards";
				character.style.webkitAnimation= "dropReset1 1s forwards";
				
				character.style.animationPlayState = "running";
				character.style.webkitAnimationPlayState = "running";
				
				var rM = document.getElementsByClassName("redMonster");	
				
				rM[0].style.display = "none";
				rM[1].style.display = "none";
				rM[2].style.display = "none";
				
				firstRedMonsterImage.style.display = "block";
				
				life=life-1;
				
				loseInterfaceReset2Animation();
				loseCrystal(life);
				
				clearTimeout(renderRedMonster);
				cancelAnimationFrame(detectAnimation3);
			}
		}

	}
	
	function pausedAllAnimation(){
		
		brick1.style.animationPlayState = "paused";
		brick1.style.webkitAnimationPlayState = "paused";
		
		brick2.style.animationPlayState = "paused";
		brick2.style.webkitAnimationPlayState = "paused";
			
		brick3.style.animationPlayState = "paused";
		brick3.style.webkitAnimationPlayState = "paused";

		brick4.style.animationPlayState = "paused";
		brick4.style.webkitAnimationPlayState = "paused";			
			
		brick5.style.animationPlayState = "paused";
		brick5.style.webkitAnimationPlayState = "paused";	
		
		brick6.style.animationPlayState = "paused";
		brick6.style.webkitAnimationPlayState = "paused";
		
		brick7.style.animationPlayState = "paused";
		brick7.style.webkitAnimationPlayState = "paused";
		
		brick8.style.animationPlayState = "paused";
		brick8.style.webkitAnimationPlayState = "paused";
		
		brick9.style.animationPlayState = "paused";
		brick9.style.webkitAnimationPlayState = "paused";
		
		brick10.style.animationPlayState = "paused";
		brick10.style.webkitAnimationPlayState = "paused";
		
		block1.style.animationPlayState = "paused";
		block1.style.webkitAnimationPlayState = "paused";
		
		graveStone1.style.animationPlayState = "paused";
		graveStone1.style.webkitAnimationPlayState = "paused";
		
		graveStone2.style.animationPlayState = "paused";
		graveStone2.style.webkitAnimationPlayState = "paused";
		
		graveStone3.style.animationPlayState = "paused";
		graveStone3.style.webkitAnimationPlayState = "paused";
		
		treeMonster1.style.animationPlayState = "paused";
		treeMonster1.style.webkitAnimationPlayState = "paused";
		
		treeMonster2.style.animationPlayState = "paused";
		treeMonster2.style.webkitAnimationPlayState = "paused";
		
		flowerMonster1.style.animationPlayState = "paused";
		flowerMonster1.style.webkitAnimationPlayState = "paused";
		
		redMonster.style.animationPlayState = "paused";
		redMonster.style.webkitAnimationPlayState = "paused";
	}
	
	function loseInterfaceAnimation(){
		
		again1.style.display = "block";
		again2.style.display = "block";
		again3.style.display = "block";
		again4.style.display = "block";
		loseHandCursor.style.display = "block";
		sad.style.display = "block";
		
		again1.style.animationPlayState = "running";
		again1.style.webkitAnimationPlayState = "running";
		again2.style.animationPlayState = "running";
		again2.style.webkitAnimationPlayState = "running";		
		again3.style.animationPlayState = "running";
		again3.style.webkitAnimationPlayState = "running";	
		again4.style.animationPlayState = "running";
		again4.style.webkitAnimationPlayState = "running";	
		loseHandCursor.style.animationPlayState = "running";
		loseHandCursor.style.webkitAnimationPlayState = "running";
		sad.style.animationPlayState = "running";
		sad.style.webkitAnimationPlayState = "running";
		grayscaleLayer.style.animationPlayState = "running";
		grayscaleLayer.style.webkitAnimationPlayState = "running";
		loseInterface.style.animationPlayState = "running";
		loseInterface.style.webkitAnimationPlayState = "running";
		
	}
  
	function loseInterfaceResetAnimation(){

		loseInterface.style.display = "block";
		again1.style.display = "block";
		again2.style.display = "block";
		again3.style.display = "block";
		again4.style.display = "block";
		loseHandCursor.style.display = "block";
		sad.style.display = "block";	
		grayscaleLayer.style.display = "block";	
		
		again1.style.animation= "againReset1 5s forwards 1,againReset1-2 2s forwards 1, againReset1-2 2s forwards 2.5s 1;"
		again1.style.webkitAnimation = "againReset1 5s forwards 1,againReset1-2 2s forwards 1, againReset1-2 2s forwards 2.5s 1;"
		again2.style.animation = "againReset2 5s forwards 0.5s 1,againReset2-2 2s forwards 0.5s 1, againReset2-2 2s forwards 3s 1;";
		again2.style.webkitAnimation = "againReset2 5s forwards 0.5s 1,againReset2-2 2s forwards 0.5s 1, againReset2-2 2s forwards 3s 1;";		
		again3.style.animation = "againReset3 5s forwards 1s 1,againReset3-2 2s forwards 1s 1, againReset3-2 2s forwards 3.5s 1;";
		again3.style.webkitAnimation = "againReset3 5s forwards 1s 1,againReset3-2 2s forwards 1s 1, againReset3-2 2s forwards 3.5s 1;";	
		again4.style.animation = "againReset4 5s forwards 1.5s 1,againReset4-2 2s forwards 1.5s 1, againReset4-2 2s forwards 4s 1;";
		again4.style.webkitAnimation = "againReset4 5s forwards 1.5s 1,againReset4-2 2s forwards 1.5s 1, againReset4-2 2s forwards 4s 1;";
		loseHandCursor.style.animation = "loseHandCursorDisplay 1.5s forwards 1, loseHandCursor 1.5s infinite 0.5s;"
		loseHandCursor.style.webkitAnimation = "loseHandCursorDisplay 1.5s forwards 1, loseHandCursor 1.5s infinite 0.5s;"
		sad.style.animation = "loseInterfaceReset 1s linear forwards";
		sad.style.webkitAnimation = "loseInterfaceReset 1s linear forwards";
		loseInterface.style.animation = "loseInterfaceReset 1s linear forwards";
		loseInterface.style.webkitAnimation = "loseInterfaceReset 1s linear forwards";
		grayscaleLayer.style.animation = "grayscaleResetLayer 1s linear forwards;"
		grayscaleLayer.style.webkitAnimation = "grayscaleResetLayer 1s linear forwards;"
		
  }
  
  	function loseInterfaceReset2Animation(){

		loseInterface.style.display = "block";
		again1.style.display = "block";
		again2.style.display = "block";
		again3.style.display = "block";
		again4.style.display = "block";
		loseHandCursor.style.display = "block";
		sad.style.display = "block";	
		grayscaleLayer.style.display = "block";	
		
		again1.style.animation= "again1 5s forwards 1,again1-2 2s forwards 1, again1-2 2s forwards 2.5s 1;"
		again1.style.webkitAnimation = "again1 5s forwards 1,again1-2 2s forwards 1, again1-2 2s forwards 2.5s 1;"
		again2.style.animation = "again2 5s forwards 0.5s 1,again2-2 2s forwards 0.5s 1, again2-2 2s forwards 3s 1;";
		again2.style.webkitAnimation = "again2 5s forwards 0.5s 1,again2-2 2s forwards 0.5s 1, again2-2 2s forwards 3s 1;";		
		again3.style.animation = "again3 5s forwards 1s 1,again3-2 2s forwards 1s 1, again3-2 2s forwards 3.5s 1;";
		again3.style.webkitAnimation = "again3 5s forwards 1s 1,again3-2 2s forwards 1s 1, again3-2 2s forwards 3.5s 1;";	
		again4.style.animation = "again4 5s forwards 1.5s 1,again4-2 2s forwards 1.5s 1, again4-2 2s forwards 4s 1;";
		again4.style.webkitAnimation = "again4 5s forwards 1.5s 1,again4-2 2s forwards 1.5s 1, again4-2 2s forwards 4s 1;";
		loseHandCursor.style.animation = "loseHandCursorDisplay 1.5s forwards 1, loseHandCursor 1.5s infinite 0.5s;"
		loseHandCursor.style.webkitAnimation = "loseHandCursorDisplay 1.5s forwards 1, loseHandCursor 1.5s infinite 0.5s;"
		sad.style.animation = "loseInterface 1s linear forwards";
		sad.style.webkitAnimation = "loseInterface 1s linear forwards";
		loseInterface.style.animation = "loseInterface 1s linear forwards";
		loseInterface.style.webkitAnimation = "loseInterface 1s linear forwards";
		grayscaleLayer.style.animation = "grayscaleLayer 1s linear forwards;"
		grayscaleLayer.style.webkitAnimation = "grayscaleLayer 1s linear forwards;"
		
  }
  
    function clearLoseInterface(){
	  
		loseInterface.style.display = "none";
		again1.style.display = "none";
		again2.style.display = "none";
		again3.style.display = "none";
		again4.style.display = "none";
		loseHandCursor.style.display = "none";
		sad.style.display = "none";	
		grayscaleLayer.style.display = "none";	
		loseInterface.style.zIndex = "none";

  }
  
    function resetAnimation(){
	  
	  	character.style.animation= "none";
		character.style.webkitAnimation = "none";
		
		redMonster.style.animation= "none";
		redMonster.style.webkitAnimation = "none";
		
		brick1.style.animation = "brickReset1 20s linear forwards";
		brick1.style.webkitAnimation = "brickReset1 20s linear forwards";
		
		brick2.style.animation = "brickReset2 3s infinite , brickReset2-2 20s linear forwards";
		brick2.style.webkitAnimation = "brickReset2 3s infinite , brickReset2-2 20s linear forwards";
			
		brick3.style.animation = "brickReset3 20s linear 1.5s forwards";
		brick3.style.webkitAnimation = "brickReset3 20s linear 1.5s forwards";

		brick4.style.animation = "brickReset4 20s linear 2.5s forwards";
		brick4.style.webkitAnimation = "brickReset4 20s linear 2.5s forwards";			
			
		brick5.style.animation = "brickReset5 20s linear 7s forwards";
		brick5.style.webkitAnimation = "brickReset5 20s linear 7s forwards";	

		brick6.style.animation = "brickReset6 20s linear forwards";
		brick6.style.webkitAnimation = "brickReset6 20s linear forwards";
		
		brick7.style.animation = "brick7 20s linear forwards";
		brick7.style.webkitAnimation = "brickReset7 20s linear forwards";
			
		brick8.style.animation = "brickReset8 20s linear 1.5s forwards";
		brick8.style.webkitAnimation = "brickReset8 20s linear 1.5s forwards";

		brick9.style.animation = "brickReset9 20s linear 2.5s forwards";
		brick9.style.webkitAnimation = "brickReset9 20s linear 2.5s forwards";			
			
		brick10.style.animation = "brickReset10 20s linear 7s forwards";
		brick10.style.webkitAnimation = "brickReset10 20s linear 7s forwards";	

		
		block1.style.animation = "blockReset1 20s linear forwards";
		block1.style.webkitAnimation = "blockReset1 20s linear forwards";
		
		graveStone1.style.animation = "graveStoneReset1 20s linear 3s forwards";
		graveStone1.style.webkitAnimation = "graveStoneReset1 20s linear 3s forwards";	  
		  
		graveStone3.style.animation = "graveStoneReset3 20s linear 7.5s forwards";
		graveStone3.style.webkitAnimation = "graveStoneReset3 20s linear 7.5s forwards";  
		  
		flowerMonster1.style.animation = "flowerMonsterReset1 20s linear 8.5s forwards";
		flowerMonster1.style.webkitAnimation = "flowerMonsterReset1 20s linear 8.5s forwards";    
		  
		   
		graveStone2.style.animation = "graveStoneReset2 20s linear 6.8s forwards";
		graveStone2.style.webkitAnimation = "graveStoneReset2 20s linear 6.8s forwards";	  
		  
		treeMonster1.style.animation = "treeMonsterReset1 20s linear 4.5s forwards";
		treeMonster1.style.webkitAnimation = "treeMonsterReset1 20s linear 4.5s forwards";  
		  
		treeMonster2.style.animation = "treeMonsterReset2 20s linear 8.7s forwards";
		treeMonster2.style.webkitAnimation = "treeMonsterReset2 20s linear 8.7s forwards";
  }
  
    function resetAnimation2(){
	  
	  	character.style.animation= "none";
		character.style.webkitAnimation = "none";
		
		redMonster.style.animation= "none";
		redMonster.style.webkitAnimation = "none";
		
		brick1.style.animation = "brick1 20s linear forwards";
		brick1.style.webkitAnimation = "brick1 20s linear forwards";
		
		brick2.style.animation = "brick2 3s infinite , brick2-2 20s linear forwards";
		brick2.style.webkitAnimation = "brick2 3s infinite , brick2-2 20s linear forwards";
			
		brick3.style.animation = "brick3 20s linear 1.5s forwards";
		brick3.style.webkitAnimation = "brick3 20s linear 1.5s forwards";

		brick4.style.animation = "brick4 20s linear 2.5s forwards";
		brick4.style.webkitAnimation = "brick4 20s linear 2.5s forwards";			
			
		brick5.style.animation = "brick5 20s linear 7s forwards";
		brick5.style.webkitAnimation = "brick5 20s linear 7s forwards";	
		
		brick6.style.animation = "brick6 20s linear forwards";
		brick6.style.webkitAnimation = "brick6 20s linear forwards";
		
		brick7.style.animation = "brick7 20s linear forwards";
		brick7.style.webkitAnimation = "brick7 20s linear forwards";
			
		brick8.style.animation = "brick8 20s linear 1.5s forwards";
		brick8.style.webkitAnimation = "brick8 20s linear 1.5s forwards";

		brick9.style.animation = "brick9 20s linear 2.5s forwards";
		brick9.style.webkitAnimation = "brick9 20s linear 2.5s forwards";			
			
		brick10.style.animation = "brick10 20s linear 7s forwards";
		brick10.style.webkitAnimation = "brick10 20s linear 7s forwards";	

		
		
		block1.style.animation = "block1 20s linear forwards";
		block1.style.webkitAnimation = "block1 20s linear forwards";
		
		graveStone1.style.animation = "graveStone1 20s linear 3s forwards";
		graveStone1.style.webkitAnimation = "graveStone1 20s linear 3s forwards";	  
		  
		graveStone3.style.animation = "graveStone3 20s linear 7.5s forwards";
		graveStone3.style.webkitAnimation = "graveStone3 20s linear 7.5s forwards";  
		  
		flowerMonster1.style.animation = "flowerMonster1 20s linear 8.5s forwards";
		flowerMonster1.style.webkitAnimation = "flowerMonster1 20s linear 8.5s forwards";    
		  
		   
		graveStone2.style.animation = "graveStone2 20s linear 6.8s forwards";
		graveStone2.style.webkitAnimation = "graveStone2 20s linear 6.8s forwards";	  
		  
		treeMonster1.style.animation = "treeMonster1 20s linear 4.5s forwards";
		treeMonster1.style.webkitAnimation = "treeMonster1 20s linear 4.5s forwards";  
		  
		treeMonster2.style.animation = "treeMonster2 20s linear 8.7s forwards";
		treeMonster2.style.webkitAnimation = "treeMonster2 20s linear 8.7s forwards";
			
  }
  
    function startAnimation(){
	  
	character.style.left = "31%";
	
	redMonster.style.animation= "redMonster 2s linear forwards,redMonster2 20s linear 2s 1";
	redMonster.style.webkitAnimation = "redMonster 2s linear forwards,redMonster2 20s linear 2s 1";
	
	brick1.style.animation = "brick1 20s linear forwards";
	brick1.style.webkitAnimation = "brick1 20s linear forwards";
	
	brick2.style.animation = "brick2 3s infinite , brick2-2 20s linear forwards";
	brick2.style.webkitAnimation = "brick2 3s infinite , brick2-2 20s linear forwards";
		
	brick3.style.animation = "brick3 20s linear 1.5s forwards";
	brick3.style.webkitAnimation = "brick3 20s linear 1.5s forwards";

	brick4.style.animation = "brick4 20s linear 2.5s forwards";
	brick4.style.webkitAnimation = "brick4 20s linear 2.5s forwards";			
		
	brick5.style.animation = "brick5 20s linear 7s forwards";
	brick5.style.webkitAnimation = "brick5 20s linear 7s forwards";	
		
	brick6.style.animation = "brick6 20s linear 5s forwards";
	brick6.style.webkitAnimation = "brick6 20s 5s linear forwards";
	
	brick7.style.animation = "brick7 20s linear 5s forwards";
	brick7.style.webkitAnimation = "brick7 20s linear 5s forwards";
		
	brick8.style.animation = "brick8 20s linear 5s forwards";
	brick8.style.webkitAnimation = "brick8 20s linear 5s forwards";

	brick9.style.animation = "brick9 20s linear 5s forwards";
	brick9.style.webkitAnimation = "brick9 20s linear 5s forwards";			
		
	brick10.style.animation = "brick10 20s linear 5s forwards";
	brick10.style.webkitAnimation = "brick10 20s linear 5s forwards";	
		
		
	block1.style.animation = "block1 20s linear forwards";
	block1.style.webkitAnimation = "block1 20s linear forwards";
	  
	
	graveStone1.style.animation = "graveStone1 20s linear 3s forwards";
	graveStone1.style.webkitAnimation = "graveStone1 20s linear 3s forwards";	  
	  
	graveStone3.style.animation = "graveStone3 20s linear 7.5s forwards";
	graveStone3.style.webkitAnimation = "graveStone3 20s linear 7.5s forwards";  
	  
	flowerMonster1.style.animation = "flowerMonster1 20s linear 8.5s forwards";
	flowerMonster1.style.webkitAnimation = "flowerMonster1 20s linear 8.5s forwards";    
	  
	   
	graveStone2.style.animation = "graveStone2 20s linear 6.8s forwards";
	graveStone2.style.webkitAnimation = "graveStone2 20s linear 6.8s forwards";	  
	  
	treeMonster1.style.animation = "treeMonster1 20s linear 4.5s forwards";
	treeMonster1.style.webkitAnimation = "treeMonster1 20s linear 4.5s forwards";  
	  
	treeMonster2.style.animation = "treeMonster2 20s linear 8.7s forwards";
	treeMonster2.style.webkitAnimation = "treeMonster2 20s linear 8.7s forwards";    
	   
	
	graveStone4.style.animation = "graveStone4 20s linear 5s forwards";
	graveStone4.style.webkitAnimation = "graveStone4 20s linear 5s forwards";	  
	  
	flowerMonster2.style.animation = "flowerMonster2 20s linear 13s forwards";
	flowerMonster2.style.webkitAnimation = "flowerMonster2 20s 13s linear forwards";  
	  
	reward.style.animation = "reward 10s linear 5s forwards";
	reward.style.webkitAnimation = "reward 10s linear 5s forwards";    
	   
	exclamationMark.style.animation = "exclamationMark 10s linear 5s forwards";
	exclamationMark.style.webkitAnimation = "exclamationMark 10s linear 5s forwards";    
	   
	characterAnimation();
  }
  
    function loseCrystal(life){
	
		var life = life;
		
		crystalArray = [lifeCrystal1,lifeCrystal2,lifeCrystal3]
		crystalArray[life].style.display = "none";
	
   }
  
	var toggle = 0; 
	function jumpAnimation(toggle){
		var t = toggle ; 
		if (toggle === 1){
			character.style.animation = " jump1 1s ease-in-out 1";
			character.style.webkitAnimation = "jump1 1s ease-in-out 1";		
		}
		if (toggle === 0){
			character.style.animation = " jumpReset1 1s ease-in-out 1";
			character.style.webkitAnimation = "jumpReset1 1s ease-in-out 1";	
		}
	}
	
	function mouseDown(e) {
		var data = e.target.id;
		
		console.log(data);
		
		if (data === "startButton" || "mainCharacter"  || "handCursor" )
		{
			handCursor.style.webkitAnimationPlayState = "paused";
			handCursor.style.animationPlayState = "paused";		
			handCursor.style.display = "none";
			handCursor.style.zIndex = "-1";
			mainCharacter.style.display = "none";
			mainCharacter.style.zIndex = "-1";
			startButton.style.display = "none";
			startButton.style.zIndex = "-1";
			firstCharacterImage.style.display = "none";

			var non = "block";
			document.getElementById('firstRedMonsterImage').style.display = non;

			doTimer(
			2000,20,function(steps){
						non = non - (1 / steps);
						document.getElementById('firstRedMonsterImage').style.display = non;				
						},
			function(){
						document.getElementById('firstRedMonsterImage').style.display = "none";										
						redMonsterAnimation();
					}						
			);
			
			startAnimation();
			detectAnimation = requestAnimationFrame(detectValue);
		}
	}
	
	function mouseDown2(e) {
		var data2 = e.target.id;
		
		console.log(data2);
		
		if (data2 === "loseInterface" || "loseStar"  || "loseStar2" || 
		"loseStar3" || "again1" || "again2" || "again3" || "again4" ||
		"loseHandCursor")
		{
			console.log(life);
			
			if(life === 2){
				firstRedMonsterImage.style.display = "none";
				redMonsterAnimation();
				clearLoseInterface();
				resetAnimation();
				detectAnimation2 = requestAnimationFrame(detectValue2);
			}
			
			if(life === 1){
				firstRedMonsterImage.style.display = "none";
				redMonsterAnimation();
				clearLoseInterface();
				resetAnimation2();
				detectAnimation3 = requestAnimationFrame(detectValue3);
			}
			
			if(life === 0){
				location.reload();
			}
		}
	}
	
	function mouseDown3(e) {
		var data3 = e.target.id;
		
		console.log(data3);
		
		if (data3 === "characterJump")
		{
			if (brick1Percentage > -48){
				if (toggle === 0) {
					jumpAnimation(toggle)
					toggle = 1;
				}
				else if (toggle === 1) {
					jumpAnimation(toggle)
					toggle = 0;
				}
				
				character.style.animationPlayState = "running";
				character.style.webkitAnimationPlayState = "running";
			}
			if (brick1Percentage <= -48){
				character.style.animation = " jumpBlock1 1s ease-in-out 1 forwards";
				character.style.webkitAnimation = "jumpBlock1 1s ease-in-out 1 forwards";	
			
				character.style.animationPlayState = "running";
				character.style.webkitAnimationPlayState = "running";
			}
		}
	}
	
	function touchstart(e) {
		var data = e.target.id;
		console.log(data);
	}
	
	var g = document.getElementById("gameContainer");
	var w = document.getElementById("gameContainer"),
    d = document,
    e = d.documentElement,
    x = w.innerWidth || e.clientWidth 
    y = w.innerHeight|| e.clientHeight;
	
	x=w.clientWidth;
	y=w.clientHeight;
	
  (function () {
  
	if (window.matchMedia("(orientation: portrait)").matches) {
		
		g.style.webkitTransform = 'rotate(90deg)'; 
		g.style.mozTransform    = 'rotate(90deg)'; 
		g.style.msTransform     = 'rotate(90deg)'; 
		g.style.oTransform      = 'rotate(90deg)'; 
		g.style.transform       = 'rotate(90deg)'; 
	
		 window.addEventListener('orientationchange', function() { location.reload(); }, false);
		
		var game = {
		element: document.getElementById("gameContainer"),
		width: 1280,
		height: 720,
		safeWidth: 720,
		safeHeight: 1280
		}
	}

	if (window.matchMedia("(orientation: landscape)").matches) {
	
		g.style.webkitTransform = 'rotate(0deg)'; 
		g.style.mozTransform    = 'rotate(0deg)'; 
		g.style.msTransform     = 'rotate(0deg)'; 
		g.style.oTransform      = 'rotate(0deg)'; 
		g.style.transform       = 'rotate(0deg)'; 
	
		 window.addEventListener('orientationchange', function() { location.reload(); }, false);
			
		var game = {
		element: document.getElementById("gameContainer"),
		width: 1280,
		height: 720,
		safeWidth: 1280,
		safeHeight: 720
		}
	}
	
	resizeGame = function () {
	
		var viewport, newGameWidth, newGameHeight, newGameX, newGameY;
						
		viewport = {
			width: window.innerWidth,
			height: window.innerHeight
		};
		
		if (game.height / game.width > viewport.height / viewport.width) {
		
			if (game.safeHeight / game.width > viewport.height / viewport.width) {
			 
			  newGameHeight = viewport.height * game.height / game.safeHeight;
			  newGameWidth = newGameHeight * game.width / game.height;
			} else {
				
			  
			  newGameWidth = viewport.width;
			  newGameHeight = newGameWidth * game.height / game.width;
			}
		} else { 
			if (game.height / game.safeWidth > viewport.height / viewport.width) {
				
				newGameHeight = viewport.height;
				newGameWidth = newGameHeight * game.width / game.height;
			} else {
				 
				
				newGameWidth = viewport.width * game.width / game.safeWidth;
				newGameHeight = newGameWidth * game.height / game.width;
			}
		}
		
		game.element.style.width = newGameWidth + "px";
		game.element.style.height = newGameHeight + "px";
		  
		newGameX = (viewport.width - newGameWidth) / 2;
		newGameY = (viewport.height - newGameHeight) / 2;
				
		game.element.style.margin = newGameY + "px " + newGameX + "px";
	};
window.addEventListener("resize", resizeGame);
resizeGame();
}())