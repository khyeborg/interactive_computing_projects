function processRequest() {
	// if the user has chosen a pyramid 
	if (pyramid.types == "particles") {
		if (pyramid.selection1 == 1 && pyramid.selection1Boolean == false) {
			data1 = select('#textBox').value();
			if (isNaN(data1) || data1 < 0) {
				messageState = 2;
			}
			else {
				pyramid.selection1Boolean = true;
				pyramid.onhold = false;
				pyramid.data1phrase = "No. of moles";
				pyramid.unit1 = "mol";
				messageState = 3;
			}
		}
		else if (pyramid.selection2 == 1 && pyramid.selection2Boolean == false) {
			data2 = select('#textBox').value();
			if (isNaN(data2) || data2 < 0) {
				messageState = 2;
			}
			else {
				pyramid.selection2Boolean = true;
				finishedSelection = true;
				pyramid.onhold = false;
				pyramid.data2phrase = "No. of moles";
				pyramid.unit2 = "mol";
				messageState = 5;
			}
		}

		if (pyramid.selection1 == 2 && pyramid.selection1Boolean == false) {
			data1 = select('#textBox').value();
			if (isNaN(data1) || data1 < 0) {
				messageState = 2;
			}
			else {
				pyramid.selection1Boolean = true;
				pyramid.onhold = false;
				pyramid.data1phrase = "No. of particles";
				pyramid.unit1 = "particles";
				messageState = 3;
			}
		}
		else if (pyramid.selection2 == 2 && pyramid.selection2Boolean == false) {
			data2 = select('#textBox').value();
			if (isNaN(data2) || data2 < 0) {
				messageState = 2;
			}
			else {
				pyramid.selection2Boolean = true;
				finishedSelection = true;
				pyramid.onhold = false;
				pyramid.data2phrase = "No. of particles";
				pyramid.unit2 = "particles";
				messageState = 5;
			}
		}
	}

	else if (pyramid.types == "mass") {
		if (pyramid.selection1 == 1 && pyramid.selection1Boolean == false) {
			data1 = select('#textBox').value();
			if (isNaN(data1) || data1 < 0) {
				messageState = 2;
			}
			else {
				pyramid.selection1Boolean = true;
				pyramid.onhold = false;
				pyramid.data1phrase = "No. of moles";
				pyramid.unit1 = "mol";
				messageState = 3;
			}
		}
		else if (pyramid.selection2 == 1 && pyramid.selection2Boolean == false) {
			data2 = select('#textBox').value();
			if (isNaN(data2) || data2 < 0) {
				messageState = 2;
			}
			else {
				pyramid.selection2Boolean = true;
				finishedSelection = true;
				pyramid.onhold = false;
				pyramid.data2phrase = "No. of moles";
				pyramid.unit2 = "mol";
				messageState = 5;
			}
		}

		if (pyramid.selection1 == 2 && pyramid.selection1Boolean == false) {
			data1 = select('#textBox').value();
			if (isNaN(data1) || data1 < 0) {
				messageState = 2;
			}
			else {
				pyramid.selection1Boolean = true;
				pyramid.onhold = false;
				pyramid.data1phrase = "Mass";
				pyramid.unit1 = "g";
				messageState = 3;
			}
		}
		else if (pyramid.selection2 == 2 && pyramid.selection2Boolean == false) {
			data2 = select('#textBox').value();
			if (isNaN(data2) || data2 < 0) {
				messageState = 2;
			}
			else {
				pyramid.selection2Boolean = true;
				finishedSelection = true;
				pyramid.onhold = false;
				pyramid.data2phrase = "Mass";
				pyramid.unit2 = "g";
				messageState = 5;
			}
		}

		if (pyramid.selection1 == 3 && pyramid.selection1Boolean == false) {
			data1 = select('#textBox').value();
			if (isNaN(data1) || data1 < 0) {
				messageState = 2;
			}
			else {
				pyramid.selection1Boolean = true;
				pyramid.onhold = false;
				pyramid.data1phrase = "Molar mass";
				pyramid.unit1 = "g/mol";
				messageState = 3;
			}
		}
		else if (pyramid.selection2 == 3 && pyramid.selection2Boolean == false) {
			data2 = select('#textBox').value();
			if (isNaN(data2) || data2 < 0) {
				messageState = 2;
			}
			else {
				pyramid.selection2Boolean = true;
				finishedSelection = true;
				pyramid.onhold = false;
				pyramid.data2phrase = "Molar mass";
				pyramid.unit2 = "g/mol";
				messageState = 5;
			}
		}
	}

	else if (pyramid.types == "volume") {
		if (pyramid.selection1 == 1 && pyramid.selection1Boolean == false) {
			data1 = select('#textBox').value();
			if (isNaN(data1) || data1 < 0) {
				messageState = 2;
			}
			else {
				pyramid.selection1Boolean = true;
				pyramid.onhold = false;
				pyramid.data1phrase = "No. of moles";
				pyramid.unit1 = "mol";
				messageState = 3;
			}
		}
		else if (pyramid.selection2 == 1 && pyramid.selection2Boolean == false) {
			data2 = select('#textBox').value();
			if (isNaN(data2) || data2 < 0) {
				messageState = 2;
			}
			else {
				pyramid.selection2Boolean = true;
				finishedSelection = true;
				pyramid.onhold = false;
				pyramid.data2phrase = "No. of moles";
				pyramid.unit2 = "mol";
				messageState = 5;
			}
		}

		if (pyramid.selection1 == 2 && pyramid.selection1Boolean == false) {
			data1 = select('#textBox').value();
			if (isNaN(data1) || data1 < 0) {
				messageState = 2;
			}
			else {
				pyramid.selection1Boolean = true;
				pyramid.onhold = false;
				pyramid.data1phrase = "Volume";
				pyramid.unit1 = "L";
				messageState = 3;
			}
		}
		else if (pyramid.selection2 == 2 && pyramid.selection2Boolean == false) {
			data2 = select('#textBox').value();
			if (isNaN(data2) || data2 < 0) {
				messageState = 2;
			}
			else {
				pyramid.selection2Boolean = true;
				finishedSelection = true;
				pyramid.onhold = false;
				pyramid.data2phrase = "Volume";
				pyramid.unit2 = "L";
				messageState = 5;
			}
		}
	}
}