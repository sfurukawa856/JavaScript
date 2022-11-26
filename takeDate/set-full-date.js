export class setFullDate {
	constructor(date) {
		this.fulldate = date;
		this.year = date.getFullYear().toString();
		this.month = (date.getMonth() + 1).toString().padStart(2, '0');
		this.day = (date.getDate()).toString().padStart(2, '0');
	}
	setSelectbox() {
		const year = document.querySelector('select[name="year"]');
		for (let i = 0; i < year.options.length; i++) {
			if (year.options[i].value === this.year) {
				year.options[i].selected = true;
			}
		}
		const month = document.querySelector('select[name="month"]');
		for (let i = 0; i < month.options.length; i++) {
			if (month.options[i].value === this.month) {
				month.options[i].selected = true;
			}
		}
		const day = document.querySelector('select[name="day"]');
		for (let i = 0; i < day.options.length; i++) {
			if (day.options[i].value === this.day) {
				day.options[i].selected = true;
			}
		}
	}

	setCalender() {
		const date = document.querySelector('input[type=date]');
		date.value = this.year + '-' + this.month + '-' + this.day;
	}
}