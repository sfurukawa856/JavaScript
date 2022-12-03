export class getFullDate {
	constructor() {
	}

	today() {
		let date = new Date();
		return date;
	}
	yesteraday() {
		let date = new Date();
		date.setDate(date.getDate() - 1);
		return date;
	}
	lastMonth() {
		let date = new Date();
		date.setMonth(date.getMonth() - 1);
		return date;
	}
	lastweek() {
		let date = new Date();
		date.setDate(date.getDate() - 7);
		return date;
	}
	firstDay() {
		let date = new Date();
		date.setDate(1);
		return date;
	}
	lastMonthEnd() {
		let date = new Date();
		return new Date(date.getFullYear(), date.getMonth(), 0);
	}

	formatYmd(date) {
		return date.getFullYear().toString() + (date.getMonth() + 1).toString().padStart(2, '0') + (date.getDate()).toString().padStart(2, '0');
	}
}
