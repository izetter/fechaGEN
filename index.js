const year = document.querySelector('#year');
const month = document.querySelector('#month');
const day = document.querySelector('#day');
// const btn = document.querySelector('button');
const output = document.querySelector('output');

year.addEventListener('input', toggleDayInput);
month.addEventListener('input', toggleDayInput);
// day.addEventListener('input', toggleBtn);
btn.addEventListener('click', handleClick);

// const inputs = [year, month, day];

function toggleDayInput() {
	if (year.value && month.value) {
		day.disabled = false;
	} else {
		day.value = '';
		day.disabled = true;
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
	const dayNumber = new Date(year.value, month.value - 1, day.value).getDay();

	if (!year.value || !month.value || !day.value) {
		output.value = '';	
	} else {
		switch (dayNumber) {
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

