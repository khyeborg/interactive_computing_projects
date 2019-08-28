function mouseClicked() {
	if (startScreenBoolean === true) {
		if (mouseX > 705 && mouseX < 985 && mouseY > 200 && mouseY < 310) {
			startScreenBoolean = false;
			clickSound.play();
			while (pokemons.length > 0) {pokemons.splice(0, 1);} 
			startScreenMusic.stop();
		}

		if (mouseX > 705 && mouseX < 985 && mouseY > 340 && mouseY < 450) {
			startScreenBoolean = false;
			clickSound.play();
			while (pokemons.length > 0) {pokemons.splice(0, 1);}
			startScreenMusic.stop();
			disableBox = true;
			generateRandomEcosystem();
		}

		if (mouseX > 705 && mouseX < 985 && mouseY > 480 && mouseY < 590) {
			startScreenBoolean = false;
			clickSound.play();
			chinchouSound.play();
			while (pokemons.length > 0) {pokemons.splice(0, 1);}
			startScreenMusic.stop();
			disableBox = true;
			generateLanturnKingdom();
		}
	}
	else {
		// for disperse
		checkClumped();

		// scream when click on big Pokemon
		for (var i = 0; i < pokemons.length; i++) {
			if (dist(mouseX, mouseY, pokemons[i].x, pokemons[i].y) <= pokemons[i].attractionZoneSize / 2 && pokemons[i].clumped === true) {
			}
		}

		if (disableBox === false) {
			for (var i = 0; i < boxes.length; i++) {
				if (mouseX > boxes[i].xLower && mouseX < boxes[i].xHigher && mouseY > 550 && mouseY < 630) {
					scareBoolean = false;
					while (scaryPokemons.length > 0) {scaryPokemons.splice(0, 1);}
					if (boxes[i].boxClick === true) {boxes[i].boxClick = false; globalDragPokemon = null;} // if the box was previously clicked
					else if (boxes[i].boxClick === false) {boxes[i].boxClick = true;} // if the box was not previously clicked
				}
				else {
					boxes[i].boxClick = false;
				}
			}

			// which box is clicked? 
			for (var i = 0; i < boxes.length; i++) {
				if (mouseX > boxes[i].xLower && mouseX < boxes[i].xHigher && mouseY > 550 && mouseY < 630 && boxes[i].boxClick === true) {
					globalDragPokemon = boxes[i].pokemon; // get which Pokemon is being clicked
					boxes[i].sound.play();
				}
			}

			// drag the Pokemon to the screen
			for (var i = 0; i < boxes.length; i++) {
				if (boxes[i].pokemon === globalDragPokemon && mouseX > 0 && mouseX < canvasWidth && mouseY > 0 && mouseY < canvasHeight - 80 && globalDragPokemon === boxes[i].pokemon) {
					if (boxes[i].pokemon === clamperl) {pokemons.unshift(new Pokemon(boxes[i].pokemon, Math.floor(random(boxes[i].evolveTimeLower, boxes[i].evolveTimeUpper)), mouseY, mouseX, true));}
					else {pokemons.push(new Pokemon(boxes[i].pokemon, Math.floor(random(boxes[i].evolveTimeLower, boxes[i].evolveTimeUpper)), mouseY, mouseX, true));}
					existSound.play();
					boxes[i].boxClick = true;
				}
			}
		}

		// scare your Pokemons
		if (mouseX > 913 && mouseX < 983 && mouseY > 22 && mouseY < 72 && globalDragPokemon === null) {
			if (scareBoolean === false) {
				scareBoolean = true; scareAlpha = 100; gengarSound.play();
				seaMusic.stop();
				if (scaryMusic.isPlaying() == false) {scaryMusic.play();}
				var randomScary = Math.floor(random(1, 11));
				if (randomScary <= 4) {numberOfHaunters = 1;}
				else if (randomScary <= 7) {numberOfHaunters = 2;}
				else {numberOfHaunters = 3;}
				for (var i = 0; i < numberOfHaunters; i++) {scaryPokemons.push(new ScaryPokemon(haunterLeft, haunterRight));}
			}
			else {
				scaryMusic.stop();
				if (seaMusic.isPlaying() == false) {seaMusic.play();}
				scareBoolean = false; scareAlpha = 255; 
				// remove haunters
				while (scaryPokemons.length > 0) {scaryPokemons.splice(0, 1);}
			} 
		}

		// feed your Pokemons
		if (mouseX > 913 && mouseX < 983 && mouseY > 103 && mouseY < 173 && globalDragPokemon === null) {
			if (feedBoolean === false) {
				feedBoolean = true; feedAlpha = 100; remoraidSound.play();
				feedNumber = Math.floor(random(1, 4));
				for (var i = 0; i < feedNumber; i++) {feedPokemonsMouse.push(new FeedPokemonMouse(remoraidLeft, remoraidRight));}
			}
			else {
				feedBoolean = false; feedAlpha = 255;
				while (feedPokemonsMouse.length > 0) {feedPokemonsMouse.splice(0, 1);}
			}
		}

		// auto feed mode
		if (mouseX > 913 && mouseX < 983 && mouseY > 188 && mouseY < 258 && globalDragPokemon === null) {
			if (autoFeedBoolean === false) {autoFeedBoolean = true; autoFeedAlpha = 100; autoFeedCounter = 0; octillerySound.play();}
			else {autoFeedBoolean = false; autoFeedAlpha = 255; autoFeedCounter = 0;}
		}

		// release feed Pokemons onto the screen
		if (feedBoolean === true && !(mouseX > 913 && mouseX < 983 && mouseY > 103 && mouseY < 173) && !(mouseX > 913 && mouseX < 983 && mouseY > 22 && mouseY < 72) && !(mouseX > 913 && mouseX < 983 && mouseY > 188 && mouseY < 258) && mouseY < canvasHeight - 80 && globalDragPokemon === null) {
			// push Pokemons into the feedPokemons array
			for (var i = 0; i < feedPokemonsMouse.length; i++) {
				feedPokemons.push(new FeedPokemon(remoraidLeft, remoraidRight, mouseX + feedPokemonsMouse[i].xOffset, mouseY + feedPokemonsMouse[i].yOffset, feedPokemonsMouse[i].sizeX, feedPokemonsMouse[i].sizeY, feedPokemonsMouse[i].graphicsCounter));
				existSound.play();
			}
			while (feedPokemonsMouse.length > 0) {feedPokemonsMouse.splice(0, 1);}
			feedNumber = Math.floor(random(1, 4));
			for (var i = 0; i < feedNumber; i++) {feedPokemonsMouse.push(new FeedPokemonMouse(remoraidLeft, remoraidRight));}
		}

		// back to main menu
		if (mouseX > 10 && mouseX < 140 && mouseY > 10 && mouseY < 80 && globalDragPokemon === null) {
			// empty all arrays (restart)
			while (pokemons.length > 0) {pokemons.splice(0,1);}
			while (scaryPokemons.length > 0) {scaryPokemons.splice(0,1);}
			while (feedPokemonsMouse.length > 0) {feedPokemonsMouse.splice(0,1);}
			while (feedPokemons.length > 0) {feedPokemons.splice(0,1);}
			while (deathPokemons.length > 0) {deathPokemons.splice(0,1);}
			// reset all the variables
			scareBoolean = false;
			feedBoolean = false;
			autoFeedBoolean = false;
			disableBox = false;
			pokemonsSwimming = false;
			clickSound.play();
			seaMusic.stop();
			scaryMusic.stop();
			startScreenBoolean = true;
		}
	}
}