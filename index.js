const year = document.querySelector('#year');
const month = document.querySelector('#month');
const day = document.querySelector('#day');
const btn = document.querySelector('button');
const output = document.querySelector('output');
// let maxDayNumber;

year.addEventListener('input', handleDayInput);
month.addEventListener('input', handleDayInput);
// day.addEventListener('input', toggleBtn);
btn.addEventListener('click', handleClick);

// const inputs = [year, month, day];

function handleDayInput() {
	if (year.value && month.value) {
		day.disabled = false;
		setMaxDayNumber();
	} else {
		day.value = '';
		day.disabled = true;
	}
}

function setMaxDayNumber() {
	// console.log('setting max day...')
	console.log(month.value)
	switch (parseInt(month.value)) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			day.max = 31;
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			day.max = 30;
			break;
		case 2:
			if (year.value % 4 === 0) day.max = 29;
			day.max = 28;
	}
}

// function toggleBtn() {
// 	if (day.value) {
// 		btn.disabled = false;
// 	} else {
// 		btn.disabled = true;
// 	}
// }

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
