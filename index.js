const year = document.querySelector('#year');
const month = document.querySelector('#month');
const day = document.querySelector('#day');
const btn = document.querySelector('button');
const output = document.querySelector('output');
let maxDayNumber = 31;

year.addEventListener('input', handleYearInput);
month.addEventListener('input', handleMonthInput);
day.addEventListener('input', handleDayInput);
btn.addEventListener('click', handleClick);

// const inputs = [year, month, day];


function handleYearInput() {
	if (year.value <= 0) year.value = '';
	setMaxDayNumber();
}

function handleMonthInput() {
	if (month.value > 12) month.value = 12;
	if (month.value <= 0) month.value = '';
	setMaxDayNumber();
}

function handleDayInput() {
	if (day.value > maxDayNumber) day.value = maxDayNumber;
	if (day.value <= 0) day.value = '';
}

function setMaxDayNumber() {
	switch (parseInt(month.value)) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			maxDayNumber = 31
			day.max = maxDayNumber;
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			maxDayNumber = 30
			day.max = maxDayNumber;
			break;
		case 2:
			if (year.value % 4 === 0) {
				maxDayNumber = 29
				day.max = maxDayNumber;
			} else {
				maxDayNumber = 28;
				day.max = maxDayNumber;
			}
	}
}

function toggleBtn() {
	if (day.value) {
		btn.disabled = false;
	} else {
		btn.disabled = true;
	}
}

// function isInputEmpty() {
// 	if (!year.value || !month.value || !day.value) {
// 		output.value = '';
// 		inputs.forEach((input) => {
// 			if (!input.value) {
// 				input.classList.add('invalid');
// 			} else {
// 				input.classList.remove('invalid');
// 			}
// 		});
// 	}
// }

function handleClick() {
	const weekDayNumber = new Date(year.value, month.value - 1, day.value).getDay();

	if (!year.value || !month.value || !day.value) {
		output.value = '';
	} else {
		switch (weekDayNumber) {
			case 0:
				output.value = 'Domingo, día no laborable';
				break;
			case 1:
				output.value = 'Lunes, día laborable';
				break;
			case 2:
				output.value = 'Martes, día laborable';
				break;
			case 3:
				output.value = 'Miércoles, día laborable';
				break;
			case 4:
				output.value = 'Jueves, día laborable';
				break;
			case 5:
				output.value = 'Viernes, día laborable';
				break;
			case 6:
				output.value = 'Sábado, día no laborable';
				break;
		}
	}
}
