export class getFullDate {
	constructor() {
	}

	getToday() {
		let date = new Date();
		return date;
	}
	getYesteraday() {
		let date = new Date();
		date.setDate(date.getDate() - 1);
		return date;
	}
	getLastMonth() {
		let date = new Date();
		date.setMonth(date.getMonth() - 1);
		return date;
	}
	getLastweek() {
		let date = new Date();
		date.setDate(date.getDate() - 7);
		return date;
	}
	getFirstDay() {
		let date = new Date();
		date.setDate(1);
		return date;
	}
}
