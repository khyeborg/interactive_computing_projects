class Exercises {
	
}

function exercises() {
	imageMode(CENTER);
	image(exercisesBackground, canvasWidth / 2, canvasHeight / 2, canvasWidth, canvasHeight);
	mainMenuBar();

	// displays Pokemons
	for (var i = 0; i < pokemons.length; i++) {
		pokemons[i].display();
	}

	textFont("Helvetica"); textSize(22);
	// textFont(flicker); textSize(22);
	if (exercisesState == 1) {
		answer1Alpha = 150, answer2Alpha = 150, answer3Alpha = 150;
		fill(0);
		text("Question 1:", 260, 120);
		text("In order to compute the mass from the number of moles and molar mass,", 260, 160);
		text("we should __________________.", 260, 190);

		if (question1Answer == "") {
			if (mouseX > 260 && mouseX < 880 && mouseY > 220 && mouseY < 280) {answer1Alpha = 100;}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 290 && mouseY < 350) {answer2Alpha = 100;}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 360 && mouseY < 420) {answer3Alpha = 100;}

			// answer boxes
			fill(255, answer1Alpha); rect(260, 220, 620, 60, 10);
			fill(255, answer2Alpha); rect(260, 290, 620, 60, 10);
			fill(255, answer3Alpha); rect(260, 360, 620, 60, 10);
		}

		else if (question1Answer == "A") {
			// answer boxes
			fill(0, 255, 0, answer1Alpha); rect(260, 220, 620, 60, 10);
			fill(255, answer2Alpha);       rect(260, 290, 620, 60, 10);
			fill(255, answer3Alpha);       rect(260, 360, 620, 60, 10);
			nextQuestionBar();
		}

		else if (question1Answer == "B") {
			// answer boxes
			fill(0, 255, 0, answer1Alpha); rect(260, 220, 620, 60, 10);
			fill(255, 0, 0, answer2Alpha); rect(260, 290, 620, 60, 10);
			fill(255, answer3Alpha);       rect(260, 360, 620, 60, 10);
			nextQuestionBar();
		}

		else if (question1Answer == "C") {
			// answer boxes
			fill(0, 255, 0, answer1Alpha); rect(260, 220, 620, 60, 10);
			fill(255, answer2Alpha);       rect(260, 290, 620, 60, 10);
			fill(255, 0, 0, answer3Alpha); rect(260, 360, 620, 60, 10);
			nextQuestionBar();
		}

		// answers
		fill(0);
		text("A. Multiply the number of moles by the molar mass", 280, 255);
		text("B. Divide the number of moles by the molar mass", 280, 325);
		text("C. Divide the molar mass by the number of moles", 280, 395);
	}

	else if (exercisesState == 2) {
		answer1Alpha = 150, answer2Alpha = 150, answer3Alpha = 150;
		fill(0);
		text("Question 2:", 260, 120);
		text("In order to compute the Avogadro's constant from the number of", 260, 160);
		text("particles and number of moles, we should __________________.", 260, 190);

		if (question2Answer == "") {

			if (mouseX > 260 && mouseX < 880 && mouseY > 220 && mouseY < 280) {answer1Alpha = 100;}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 290 && mouseY < 350) {answer2Alpha = 100;}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 360 && mouseY < 420) {answer3Alpha = 100;}

			// answer boxes
			fill(255, answer1Alpha); rect(260, 220, 620, 60, 10);
			fill(255, answer2Alpha); rect(260, 290, 620, 60, 10);
			fill(255, answer3Alpha); rect(260, 360, 620, 60, 10);
		}

		else if (question2Answer == "A") {
			// answer boxes
			fill(255, 0, 0, answer1Alpha); rect(260, 220, 620, 60, 10);
			fill(0, 255, 0, answer2Alpha); rect(260, 290, 620, 60, 10);
			fill(255, answer3Alpha);       rect(260, 360, 620, 60, 10);
			nextQuestionBar();
		}

		else if (question2Answer == "B") {
			// answer boxes
			fill(255, answer1Alpha);       rect(260, 220, 620, 60, 10);
			fill(0, 255, 0, answer2Alpha); rect(260, 290, 620, 60, 10);
			fill(255, answer3Alpha);       rect(260, 360, 620, 60, 10);
			nextQuestionBar();
		}

		else if (question2Answer == "C") {
			// answer boxes
			fill(255, answer1Alpha);       rect(260, 220, 620, 60, 10);
			fill(0, 255, 0, answer2Alpha); rect(260, 290, 620, 60, 10);
			fill(255, 0, 0, answer3Alpha); rect(260, 360, 620, 60, 10);
			nextQuestionBar();
		}

		// answers
		fill(0);
		text("A. Multiply the number of particles by the number of moles", 280, 255);
		text("B. Divide the number of particles by the number of moles", 280, 325);
		text("C. Divide the number of moles by the number of particles", 280, 395);
	}

	else if (exercisesState == 3) {
		answer1Alpha = 150, answer2Alpha = 150, answer3Alpha = 150, answer4Alpha = 150;
		fill(0);
		text("Question 3:", 260, 120);
		text("What is the unit of the Avogadro's constant?", 260, 160);
		text("Hint: Avogadro's constant = Number of particles / number of moles", 260, 190);

		if (question3Answer == "") {

			if (mouseX > 260 && mouseX < 880 && mouseY > 220 && mouseY < 280) {answer1Alpha = 100;}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 290 && mouseY < 350) {answer2Alpha = 100;}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 360 && mouseY < 420) {answer3Alpha = 100;}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 430 && mouseY < 490) {answer4Alpha = 100;}

			// answer boxes
			fill(255, answer1Alpha); rect(260, 220, 620, 60, 10);
			fill(255, answer2Alpha); rect(260, 290, 620, 60, 10);
			fill(255, answer3Alpha); rect(260, 360, 620, 60, 10);
			fill(255, answer4Alpha); rect(260, 430, 620, 60, 10);
		}

		else if (question3Answer == "A") {
			// answer boxes
			fill(255, 0, 0, answer1Alpha); rect(260, 220, 620, 60, 10);
			fill(255, answer2Alpha);       rect(260, 290, 620, 60, 10);
			fill(255, answer3Alpha);       rect(260, 360, 620, 60, 10);
			fill(0, 255, 0, answer4Alpha); rect(260, 430, 620, 60, 10);
			nextQuestionBar();
		}

		else if (question3Answer == "B") {
			// answer boxes
			fill(255, answer1Alpha);       rect(260, 220, 620, 60, 10);
			fill(255, 0, 0, answer2Alpha); rect(260, 290, 620, 60, 10);
			fill(255, answer3Alpha);       rect(260, 360, 620, 60, 10);
			fill(0, 255, 0, answer4Alpha); rect(260, 430, 620, 60, 10);
			nextQuestionBar();
		}

		else if (question3Answer == "C") {
			// answer boxes
			fill(255, answer1Alpha);       rect(260, 220, 620, 60, 10);
			fill(255, answer2Alpha);       rect(260, 290, 620, 60, 10);
			fill(255, 0, 0, answer3Alpha); rect(260, 360, 620, 60, 10);
			fill(0, 255, 0, answer4Alpha); rect(260, 430, 620, 60, 10);
			nextQuestionBar();
		}

		else if (question3Answer == "D") {
			// answer boxes
			fill(255, answer1Alpha);       rect(260, 220, 620, 60, 10);
			fill(255, answer2Alpha);       rect(260, 290, 620, 60, 10);
			fill(255, answer3Alpha);       rect(260, 360, 620, 60, 10);
			fill(0, 255, 0, answer4Alpha); rect(260, 430, 620, 60, 10);
			nextQuestionBar();
		}

		// answers
		fill(0);
		text("A. g", 280, 255);
		text("B. g/L", 280, 325);
		text("C. mol", 280, 395);
		text("D. /mol", 280, 465);
	}

	else if (exercisesState == 4) {
		answer1Alpha = 150, answer2Alpha = 150, answer3Alpha = 150, answer4Alpha = 150;
		fill(0);
		text("Question 4:", 260, 120);
		text("Calculate the volume occupied by 0.05 mol of Helium gas.", 260, 160);
		text("Hint: Molar volume = 22.4 L/mol", 260, 190);

		if (question4Answer == "") {

			if (mouseX > 260 && mouseX < 880 && mouseY > 220 && mouseY < 280) {answer1Alpha = 100;}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 290 && mouseY < 350) {answer2Alpha = 100;}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 360 && mouseY < 420) {answer3Alpha = 100;}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 430 && mouseY < 490) {answer4Alpha = 100;}

			// answer boxes
			fill(255, answer1Alpha); rect(260, 220, 620, 60, 10);
			fill(255, answer2Alpha); rect(260, 290, 620, 60, 10);
			fill(255, answer3Alpha); rect(260, 360, 620, 60, 10);
			fill(255, answer4Alpha); rect(260, 430, 620, 60, 10);
		}

		else if (question4Answer == "A") {
			// answer boxes
			fill(255, 0, 0, answer1Alpha); rect(260, 220, 620, 60, 10);
			fill(0, 255, 0, answer2Alpha); rect(260, 290, 620, 60, 10);
			fill(255, answer3Alpha);       rect(260, 360, 620, 60, 10);
			fill(255, answer4Alpha);       rect(260, 430, 620, 60, 10);
			nextQuestionBar();
		}

		else if (question4Answer == "B") {
			// answer boxes
			fill(255, answer1Alpha);       rect(260, 220, 620, 60, 10);
			fill(0, 255, 0, answer2Alpha); rect(260, 290, 620, 60, 10);
			fill(255, answer3Alpha);       rect(260, 360, 620, 60, 10);
			fill(255, answer4Alpha);       rect(260, 430, 620, 60, 10);
			nextQuestionBar();
		}

		else if (question4Answer == "C") {
			// answer boxes
			fill(255, answer1Alpha);       rect(260, 220, 620, 60, 10);
			fill(0, 255, 0, answer2Alpha); rect(260, 290, 620, 60, 10);
			fill(255, 0, 0, answer3Alpha); rect(260, 360, 620, 60, 10);
			fill(255, answer4Alpha);       rect(260, 430, 620, 60, 10);
			nextQuestionBar();
		}

		else if (question4Answer == "D") {
			// answer boxes
			fill(255, answer1Alpha);       rect(260, 220, 620, 60, 10);
			fill(0, 255, 0, answer2Alpha); rect(260, 290, 620, 60, 10);
			fill(255, answer3Alpha);       rect(260, 360, 620, 60, 10);
			fill(255, 0, 0, answer4Alpha); rect(260, 430, 620, 60, 10);
			nextQuestionBar();
		}

		// answers
		fill(0);
		text("A. 0.05 L", 280, 255);
		text("B. 1.12 L", 280, 325);
		text("C. 2.24 L", 280, 395);
		text("D. 22.4 L", 280, 465);
	}

	else if (exercisesState == 5) {
		answer1Alpha = 150, answer2Alpha = 150, answer3Alpha = 150, answer4Alpha = 150;
		fill(0);
		text("Question 5:", 260, 120);
		text("Calculate the number of moles in 2.50 g of calcium carbonate.", 260, 160);
		text("Hint: Molar mass of calcium carbonate = 100.0869 g/mol", 260, 190);

		if (question5Answer == "") {

			if (mouseX > 260 && mouseX < 880 && mouseY > 220 && mouseY < 280) {answer1Alpha = 100;}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 290 && mouseY < 350) {answer2Alpha = 100;}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 360 && mouseY < 420) {answer3Alpha = 100;}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 430 && mouseY < 490) {answer4Alpha = 100;}

			// answer boxes
			fill(255, answer1Alpha); rect(260, 220, 620, 60, 10);
			fill(255, answer2Alpha); rect(260, 290, 620, 60, 10);
			fill(255, answer3Alpha); rect(260, 360, 620, 60, 10);
			fill(255, answer4Alpha); rect(260, 430, 620, 60, 10);
		}

		else if (question5Answer == "A") {
			// answer boxes
			fill(255, 0, 0, answer1Alpha); rect(260, 220, 620, 60, 10);
			fill(255, answer2Alpha);       rect(260, 290, 620, 60, 10);
			fill(0, 255, 0, answer3Alpha); rect(260, 360, 620, 60, 10);
			fill(255, answer4Alpha);       rect(260, 430, 620, 60, 10);
			nextQuestionBar();
		}

		else if (question5Answer == "B") {
			// answer boxes
			fill(255, answer1Alpha);       rect(260, 220, 620, 60, 10);
			fill(255, 0, 0, answer2Alpha); rect(260, 290, 620, 60, 10);
			fill(0, 255, 0, answer3Alpha); rect(260, 360, 620, 60, 10);
			fill(255, answer4Alpha);       rect(260, 430, 620, 60, 10);
			nextQuestionBar();
		}

		else if (question5Answer == "C") {
			// answer boxes
			fill(255, answer1Alpha);       rect(260, 220, 620, 60, 10);
			fill(255, answer2Alpha);       rect(260, 290, 620, 60, 10);
			fill(0, 255, 0, answer3Alpha); rect(260, 360, 620, 60, 10);
			fill(255, answer4Alpha);       rect(260, 430, 620, 60, 10);
			nextQuestionBar();
		}

		else if (question5Answer == "D") {
			// answer boxes
			fill(255, answer1Alpha);       rect(260, 220, 620, 60, 10);
			fill(255, answer2Alpha);       rect(260, 290, 620, 60, 10);
			fill(0, 255, 0, answer3Alpha); rect(260, 360, 620, 60, 10);
			fill(255, 0, 0, answer4Alpha); rect(260, 430, 620, 60, 10);
			nextQuestionBar();
		}

		// answers
		fill(0);
		text("A. 0.005 mol", 280, 255);
		text("B. 0.015 mol", 280, 325);
		text("C. 0.025 mol", 280, 395);
		text("D. 0.035 mol", 280, 465);
	}

	else if (exercisesState == 6) {
		fill(255); textSize(15); textFont(pokemonFont);
		text("You have completed the exercises!", 260, 170);
		text("Your score: " + correctAnswer + " / 5", 260, 210);
		if (correctAnswer == 0 || correctAnswer == 1 || correctAnswer == 2) {text("Study harder to get a better score!", 260, 250);}
		else if (correctAnswer == 3) {text("Not bad. Study harder to get a better score!", 260, 250);}
		else if (correctAnswer == 4) {text("Nice job! An almost perfect score!", 260, 250);}
		else if (correctAnswer == 5) {text("Wonderful! You are awesome!", 260, 250);}
	}
}

function exercisesPokemonMessage() {
	textFont(pokemonFont);
	fill(255);
	if (exercisesState == 1) {
		textSize(17);
		if (question1Answer == "") {
			if (mouseX > 260 && mouseX < 830 && mouseY > 220 && mouseY < 280) {text('A. Multiply the number of moles by molar mass', 100, 530);}
			else if (mouseX > 260 && mouseX < 830 && mouseY > 290 && mouseY < 350) {text('B. Divide the number of moles by molar mass', 100, 530);}
			else if (mouseX > 260 && mouseX < 830 && mouseY > 360 && mouseY < 420) {text('C. Divide the molar mass by number of moles', 100, 530);}
			else {text('Select an answer.', 100, 530);}
		}
		else if (question1Answer == "A") {text("That's right! Nice job!", 100, 530);}
		else {text("Incorrect... The correct answer is A.", 100, 530);}
	}

	else if (exercisesState == 2) {
		if (question2Answer == "") {
			if (mouseX > 260 && mouseX < 880 && mouseY > 220 && mouseY < 280) {textSize(14); text('A. Multiply the number of particles by the number of moles', 100, 530);}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 290 && mouseY < 350) {textSize(14); text('B. Divide the number of particles by the number of moles', 100, 530);}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 360 && mouseY < 420) {textSize(14); text('C. Divide the number of moles by the number of particles', 100, 530);}
			else {textSize(17); text('Select an answer.', 100, 530);}
		}
		else if (question2Answer == "B") {textSize(17); text("That's right! Nice job!", 100, 530);}
		else {textSize(17); text("Incorrect... The correct answer is B.", 100, 530);}
	}

	else if (exercisesState == 3) {
		textSize(17);
		if (question3Answer == "") {
			if (mouseX > 260 && mouseX < 880 && mouseY > 220 && mouseY < 280) {text('A. g', 100, 530);}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 290 && mouseY < 350) {text('B. g/L', 100, 530);}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 360 && mouseY < 420) {text('C. mol', 100, 530);}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 430 && mouseY < 490) {text('D. /mol', 100, 530);}
			else {text('Select an answer.', 100, 530);}
		}
		else if (question3Answer == "D") {text("That's right! Nice job!", 100, 530);}
		else {text("Incorrect... The correct answer is D.", 100, 530);}
	}

	else if (exercisesState == 4) {
		textSize(17);
		if (question4Answer == "") {
			if (mouseX > 260 && mouseX < 880 && mouseY > 220 && mouseY < 280) {text('A. 0.05 L', 100, 530);}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 290 && mouseY < 350) {text('B. 1.12 L', 100, 530);}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 360 && mouseY < 420) {text('C. 2.24 L', 100, 530);}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 430 && mouseY < 490) {text('D. 22.4 L', 100, 530);}
			else {text('Select an answer.', 100, 530);}
		}
		else if (question4Answer == "B") {text("That's right! Nice job!", 100, 530);}
		else {text("Incorrect... The correct answer is B.", 100, 530);}
	}

	else if (exercisesState == 5) {
		textSize(17);
		if (question5Answer == "") {
			if (mouseX > 260 && mouseX < 880 && mouseY > 220 && mouseY < 280) {text('A. 0.005 mol', 100, 530);}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 290 && mouseY < 350) {text('B. 0.015 mol', 100, 530);}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 360 && mouseY < 420) {text('C. 0.025 mol', 100, 530);}
			else if (mouseX > 260 && mouseX < 880 && mouseY > 430 && mouseY < 490) {text('D. 0.035 mol', 100, 530);}
			else {text('Select an answer.', 100, 530);}
		}
		else if (question5Answer == "C") {text("That's right! Nice job!", 100, 530);}
		else {text("Incorrect... The correct answer is C.", 100, 530);}
	}
}

function generateExercisesFunction() {
	drawPokemon = new Pokemon(pikachu, 120, 420); pokemons.push(drawPokemon);
}















