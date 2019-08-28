function mouseClicked() {
	if (startScreenBoolean === true && exercisesMode == false) {
		if (mouseX > 612 && mouseX < 870 && mouseY > 150 && mouseY < 260) {
			startScreenBoolean = false;
			calculationsOption = "particles";
			clickSound.play();
			while (pokemons.length > 0) {pokemons.splice(0, 1);} 
			generatedPokemon = false;
		}

		if (mouseX > 612 && mouseX < 870 && mouseY > 310 && mouseY < 420) {
			startScreenBoolean = false;
			calculationsOption = "mass";
			clickSound.play();
			while (pokemons.length > 0) {pokemons.splice(0, 1);} 
			generatedPokemon = false;
		}

		if (mouseX > 612 && mouseX < 870 && mouseY > 450 && mouseY < 560) {
			startScreenBoolean = false;
			calculationsOption = "volume";
			clickSound.play();
			while (pokemons.length > 0) {pokemons.splice(0, 1);} 
			generatedPokemon = false;
		}
	}

	// startScreenBoolean == false
	else if (startScreenBoolean == false && exercisesMode == false) {
		// back to main menu
		if (mouseX > 10 && mouseX < 140 && mouseY > 10 && mouseY < 80) {
			// empty all arrays (restart)
			while (pokemons.length > 0) {pokemons.splice(0,1);}
			generatedPokemon = false;

			// reset all the variables
			clickSound.play();
			startScreenBoolean = true;
			generatePyramid = false;
			calculationsOption = "";
			// pyramid.alpha1 = 255; pyramid.alpha2 = 255; pyramid.alpha3 = 255;
			// pyramid.selection1 =  0, pyramid.selection2 =  0;
			// pyramid.selection1Boolean = false, pyramid.selection2Boolean = false;
			// pyramid.onhold = false;
			// pyramid.data1phrase = "", pyramid.data2phrase = "";
			// pyramid.unit1 = "", pyramid.unit2 = "", pyramid.unit3 = "";
			messageState = 0;
			// pyramid.line1 = "", pyramid.line2 = "", pyramid.line3 = "";
			calculateNowBoolean = false;
			finishedSelection = false;
			correctAnswer = 0;
		}

		// calculation selection 
		if (pyramid.types == "particles") {
			generateExercises = false;
			if (mouseX > canvasWidth/2 - 156 + offsetX && mouseX < canvasWidth/2 + 156 + offsetX && mouseY > 50 && mouseY < 190) {
				var color1 = get(mouseX, mouseY);
				if (color1[0] == pyramid.r1 && color1[1] == pyramid.g1 && color1[2] == pyramid.b1 || color1[0] == 255 && color1[1] == 255 && color1[2] == 255) {
					if (pyramid.selection1 == 0) {
						pyramid.selection1 = 2;
						pyramid.alpha1 = 100;
						pyramid.onhold = true;
						messageState = 1;
					}
					else if (pyramid.onhold == false && pyramid.selection1Boolean == true && pyramid.selection2 == 0 && pyramid.selection1 != 2) {
						pyramid.selection2 = 2;
						pyramid.alpha1 = 100;
						pyramid.onhold = true;
						messageState = 4;
					}
				}
			}

			else if (mouseX > canvasWidth/2 - 312 + offsetX && mouseX < canvasWidth/2 + offsetX && mouseY > 190 && mouseY < 320) {
				var color2 = get(mouseX, mouseY);
				if (color2[0] == pyramid.r2 && color2[1] == pyramid.g2 && color2[2] == pyramid.b2 || color2[0] == 255 && color2[1] == 255 && color2[2] == 255) {
					if (pyramid.selection1 == 0) {
						pyramid.selection1 = 1;
						pyramid.alpha2 = 100;
						pyramid.onhold = true;
						messageState = 1;
					}
					else if (pyramid.onhold == false && pyramid.selection1Boolean == true && pyramid.selection2 == 0 && pyramid.selection1 != 1) {
						pyramid.selection2 = 1;
						pyramid.alpha2 = 100;
						pyramid.onhold = true;
						messageState = 4;
					}
				}
			}

			else if (mouseX > canvasWidth/2 + offsetX && mouseX < canvasWidth/2 + 312 + offsetX && mouseY > 190 && mouseY < 320) {
				var color3 = get(mouseX, mouseY);
				if (color3[0] == pyramid.r3 && color3[1] == pyramid.g3 && color3[2] == pyramid.b3 || color3[0] == 255 && color3[1] == 255 && color3[2] == 255) {
					if (pyramid.selection1 == 0) {
						pyramid.selection1 = 3;
						pyramid.alpha3 = 100;
						data1 = Number(6.022E23);
						pyramid.selection1Boolean = true;
						pyramid.data1phrase = "Avogadro's constant";
						pyramid.unit1 = "/mol";
						messageState = 3;
					}
					else if (pyramid.onhold == false && pyramid.selection1Boolean == true && pyramid.selection2 == 0 && pyramid.selection1 != 3) {
						pyramid.selection2 = 3;
						pyramid.alpha3 = 100;
						data2 = Number(6.022E23);
						pyramid.selection2Boolean = true;
						pyramid.data2phrase = "Avogadro's constant";
						pyramid.unit2 = "/mol";
						finishedSelection = true;
						messageState = 5;
					}
				}
			}
		}

		else if (pyramid.types == "mass") {
			generateExercises = false;
			if (mouseX > canvasWidth/2 - 156 + offsetX && mouseX < canvasWidth/2 + 156 + offsetX && mouseY > 50 && mouseY < 190) {
				var color1 = get(mouseX, mouseY);
				if (color1[0] == pyramid.r1 && color1[1] == pyramid.g1 && color1[2] == pyramid.b1 || color1[0] == 255 && color1[1] == 255 && color1[2] == 255) {
					if (pyramid.selection1 == 0) {
						pyramid.selection1 = 2;
						pyramid.alpha1 = 100;
						pyramid.onhold = true;
						messageState = 1;
					}
					else if (pyramid.onhold == false && pyramid.selection1Boolean == true && pyramid.selection2 == 0 && pyramid.selection1 != 2) {
						pyramid.selection2 = 2;
						pyramid.alpha1 = 100;
						pyramid.onhold = true;
						messageState = 4;
					}
				}
			}

			else if (mouseX > canvasWidth/2 - 312 + offsetX && mouseX < canvasWidth/2 + offsetX && mouseY > 190 && mouseY < 320) {
				var color2 = get(mouseX, mouseY);
				if (color2[0] == pyramid.r2 && color2[1] == pyramid.g2 && color2[2] == pyramid.b2 || color2[0] == 255 && color2[1] == 255 && color2[2] == 255) {
					if (pyramid.selection1 == 0) {
						pyramid.selection1 = 1;
						pyramid.alpha2 = 100;
						pyramid.onhold = true;
						messageState = 1;
					}
					else if (pyramid.onhold == false && pyramid.selection1Boolean == true && pyramid.selection2 == 0 && pyramid.selection1 != 1) {
						pyramid.selection2 = 1;
						pyramid.alpha2 = 100;
						pyramid.onhold = true;
						messageState = 4;
					}
				}
			}

			else if (mouseX > canvasWidth/2 + offsetX && mouseX < canvasWidth/2 + 312 + offsetX && mouseY > 190 && mouseY < 320) {
				var color3 = get(mouseX, mouseY);
				if (color3[0] == pyramid.r3 && color3[1] == pyramid.g3 && color3[2] == pyramid.b3 || color3[0] == 255 && color3[1] == 255 && color3[2] == 255) {
					if (pyramid.selection1 == 0) {
						pyramid.selection1 = 3;
						pyramid.alpha3 = 100;
						pyramid.onhold = true;
						messageState = 1;
					}
					else if (pyramid.onhold == false && pyramid.selection1Boolean == true && pyramid.selection2 == 0 && pyramid.selection1 != 3) {
						pyramid.selection2 = 3;
						pyramid.alpha3 = 100;
						pyramid.onhold = true;
						messageState = 4;
					}
				}
			}
		}

		else if (pyramid.types == "volume") {
			generateExercises = false;
			if (mouseX > canvasWidth/2 - 156 + offsetX && mouseX < canvasWidth/2 + 156 + offsetX && mouseY > 50 && mouseY < 190) {
				var color1 = get(mouseX, mouseY);
				if (color1[0] == pyramid.r1 && color1[1] == pyramid.g1 && color1[2] == pyramid.b1 || color1[0] == 255 && color1[1] == 255 && color1[2] == 255) {
					if (pyramid.selection1 == 0) {
						pyramid.selection1 = 2;
						pyramid.alpha1 = 100;
						pyramid.onhold = true;
						messageState = 1;
					}
					else if (pyramid.onhold == false && pyramid.selection1Boolean == true && pyramid.selection2 == 0 && pyramid.selection1 != 2) {
						pyramid.selection2 = 2;
						pyramid.alpha1 = 100;
						pyramid.onhold = true;
						messageState = 4;
					}
				}
			}

			else if (mouseX > canvasWidth/2 - 312 + offsetX && mouseX < canvasWidth/2 + offsetX && mouseY > 190 && mouseY < 320) {
				var color2 = get(mouseX, mouseY);
				if (color2[0] == pyramid.r2 && color2[1] == pyramid.g2 && color2[2] == pyramid.b2 || color2[0] == 255 && color2[1] == 255 && color2[2] == 255) {
					if (pyramid.selection1 == 0) {
						pyramid.selection1 = 1;
						pyramid.alpha2 = 100;
						pyramid.onhold = true;
						messageState = 1;
					}
					else if (pyramid.onhold == false && pyramid.selection1Boolean == true && pyramid.selection2 == 0 && pyramid.selection1 != 1) {
						pyramid.selection2 = 1;
						pyramid.alpha2 = 100;
						pyramid.onhold = true;
						messageState = 4;
					}
				}
			}

			else if (mouseX > canvasWidth/2 + offsetX && mouseX < canvasWidth/2 + 312 + offsetX && mouseY > 190 && mouseY < 320) {
				var color3 = get(mouseX, mouseY);
				if (color3[0] == pyramid.r3 && color3[1] == pyramid.g3 && color3[2] == pyramid.b3 || color3[0] == 255 && color3[1] == 255 && color3[2] == 255) {
					if (pyramid.selection1 == 0) {
						pyramid.selection1 = 3;
						pyramid.alpha3 = 100;
						data1 = 22.4;
						pyramid.selection1Boolean = true;
						pyramid.data1phrase = "Molar volume";
						pyramid.unit1 = "L/mol";
						messageState = 3;

					}
					else if (pyramid.onhold == false && pyramid.selection1Boolean == true && pyramid.selection2 == 0 && pyramid.selection1 != 3) {
						pyramid.selection2 = 3;
						pyramid.alpha3 = 100;
						data2 = 22.4;
						pyramid.selection2Boolean = true;
						pyramid.data2phrase = "Molar volume";
						pyramid.unit2 = "L/mol";
						finishedSelection = true;
						messageState = 5;
					}
				}
			}
		}

		if (messageState == 5 && mouseX > 50 && mouseX < 270 && mouseY > 170 - offsetY && mouseY < 235 - offsetY) {
			calculateNowBoolean = true;
			messageState = 6;
		}
	}

	if (exercisesMode == false && mouseX > 810 && mouseX < 955 && mouseY > 25 && mouseY < 75) {
		clickSound.play();
		while (pokemons.length > 0) {pokemons.splice(0,1);}
		generatedPokemon = false;
		exercisesMode = true;
	} 

	// exercisesMode
	if (exercisesMode == true) {
		// question 1
		if (exercisesState == 1) {
			if (question1Selected == false) {
				if (mouseX > 260 && mouseX < 880 && mouseY > 220 && mouseY < 280) {question1Answer = "A"; question1Selected = true; question1Correct = 1; correctAnswer += 1;}
				else if (mouseX > 260 && mouseX < 880 && mouseY > 290 && mouseY < 350) {question1Answer = "B"; question1Selected = true; question1Correct = 2;}
				else if (mouseX > 260 && mouseX < 880 && mouseY > 360 && mouseY < 420) {question1Answer = "C"; question1Selected = true; question1Correct = 2;}
			}

			else if (question1Selected == true) {
				if (mouseX > 770 && mouseX < 970 && mouseY > 505 && mouseY < 555) {exercisesState = 2; clickSound.play();} 
			}
		}

		// question 2
		else if (exercisesState == 2) {
			if (question2Selected == false) {
				if (mouseX > 260 && mouseX < 880 && mouseY > 220 && mouseY < 280) {question2Answer = "A"; question2Selected = true; question2Correct = 2;}
				else if (mouseX > 260 && mouseX < 880 && mouseY > 290 && mouseY < 350) {question2Answer = "B"; question2Selected = true; question2Correct = 1; correctAnswer += 1;}
				else if (mouseX > 260 && mouseX < 880 && mouseY > 360 && mouseY < 420) {question2Answer = "C"; question2Selected = true; question2Correct = 2;}
			}

			else if (question2Selected == true) {
				if (mouseX > 770 && mouseX < 970 && mouseY > 505 && mouseY < 555) {exercisesState = 3; clickSound.play();} 
			}
		}

		// question 3
		else if (exercisesState == 3) {
			if (question3Selected == false) {
				if (mouseX > 260 && mouseX < 880 && mouseY > 220 && mouseY < 280) {question3Answer = "A"; question3Selected = true; question3Correct = 2;}
				else if (mouseX > 260 && mouseX < 880 && mouseY > 290 && mouseY < 350) {question3Answer = "B"; question3Selected = true; question3Correct = 2;}
				else if (mouseX > 260 && mouseX < 880 && mouseY > 360 && mouseY < 420) {question3Answer = "C"; question3Selected = true; question3Correct = 2;}
				else if (mouseX > 260 && mouseX < 880 && mouseY > 430 && mouseY < 490) {question3Answer = "D"; question3Selected = true; question3Correct = 1; correctAnswer += 1;}
			}

			else if (question3Selected == true) {
				if (mouseX > 770 && mouseX < 970 && mouseY > 505 && mouseY < 555) {exercisesState = 4; clickSound.play();} 
			}
		}

		// question 4
		else if (exercisesState == 4) {
			if (question4Selected == false) {
				if (mouseX > 260 && mouseX < 880 && mouseY > 220 && mouseY < 280) {question4Answer = "A"; question4Selected = true; question4Correct = 2;}
				else if (mouseX > 260 && mouseX < 880 && mouseY > 290 && mouseY < 350) {question4Answer = "B"; question4Selected = true; question4Correct = 1; correctAnswer += 1;}
				else if (mouseX > 260 && mouseX < 880 && mouseY > 360 && mouseY < 420) {question4Answer = "C"; question4Selected = true; question4Correct = 2;}
				else if (mouseX > 260 && mouseX < 880 && mouseY > 430 && mouseY < 490) {question4Answer = "D"; question4Selected = true; question4Correct = 2;}
			}

			else if (question4Selected == true) {
				if (mouseX > 770 && mouseX < 970 && mouseY > 505 && mouseY < 555) {exercisesState = 5; clickSound.play();} 
			}
		}

		// question 5
		else if (exercisesState == 5) {
			if (question5Selected == false) {
				if (mouseX > 260 && mouseX < 880 && mouseY > 220 && mouseY < 280) {question5Answer = "A"; question5Selected = true; question5Correct = 2;}
				else if (mouseX > 260 && mouseX < 880 && mouseY > 290 && mouseY < 350) {question5Answer = "B"; question5Selected = true; question5Correct = 2;}
				else if (mouseX > 260 && mouseX < 880 && mouseY > 360 && mouseY < 420) {question5Answer = "C"; question5Selected = true; question5Correct = 1; correctAnswer += 1;}
				else if (mouseX > 260 && mouseX < 880 && mouseY > 430 && mouseY < 490) {question5Answer = "D"; question5Selected = true; question5Correct = 2;}
			}

			else if (question5Selected == true) {
				if (mouseX > 770 && mouseX < 970 && mouseY > 505 && mouseY < 555) {exercisesState = 6; clickSound.play();} 
			}
		}

		// back to main menu
		if (mouseX > 10 && mouseX < 140 && mouseY > 10 && mouseY < 80 && exercisesState <= 5 || mouseX > 770 && mouseX < 920 && mouseY > 280 && mouseY < 330 && exercisesState == 6) {
			clickSound.play();
			while (pokemons.length > 0) {pokemons.splice(0,1);}
			generatedPokemon = false;

			// reset all the variables
			startScreenBoolean = true;
			generatePyramid = false;
			calculationsOption = "";
			messageState = 0;
			calculateNowBoolean = false;
			finishedSelection = false;

			// exercises 
			exercisesMode = false;
			generateExercises = false;
			question1Answer = "", question1Selected = false, question1Correct = 0; 
			question2Answer = "", question2Selected = false, question2Correct = 0;
			question3Answer = "", question3Selected = false, question3Correct = 0;
			question4Answer = "", question4Selected = false, question4Correct = 0;
			question5Answer = "", question5Selected = false, question5Correct = 0; 
			correctAnswer = 0;
			exercisesState = 1;
		}
	}
}