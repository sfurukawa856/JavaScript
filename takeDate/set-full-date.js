export class setFullDate {
	constructor() {
	}
	setSelectbox(id, val) {
		const elm = document.querySelector('#' + id);
		for (let i = 0; i < elm.options.length; i++) {
			if (elm.options[i].value === val) {
				elm.options[i].selected = true;
			}
		}
	}

	setCalender(id, date) {
		const elm = document.querySelector('#' + id);
		elm.value = date.substr(0, 4) + '-' + date.substr(4, 2) + '-' + date.substr(6);
	}
}