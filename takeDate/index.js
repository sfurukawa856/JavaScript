'use strict';
import { getFullDate } from "./get-full-date.js";
import { setFullDate } from "./set-full-date.js";

const today = document.querySelector('.today');
const yesterday = document.querySelector('.yesterday');
const last_month = document.querySelector('.last_month');
const last_month_end = document.querySelector('.last_month_end');
const first_day = document.querySelector('.first_day');
const last_week = document.querySelector('.last_week');

const get_full_date = new getFullDate();

today.addEventListener('click', function () {
	let date = get_full_date.today();
	date = get_full_date.formatYmd(date);

	const set_full_date = new setFullDate();
	set_full_date.setSelectbox('year', date.substr(0, 4));
	set_full_date.setSelectbox('month', date.substr(4, 6));
	set_full_date.setSelectbox('day', date.substr(6));
	set_full_date.setCalender('date', date);
});
yesterday.addEventListener('click', function () {
	let date = get_full_date.yesteraday();
	date = get_full_date.formatYmd(date);

	const set_full_date = new setFullDate();
	set_full_date.setSelectbox('year', date.substr(0, 4));
	set_full_date.setSelectbox('month', date.substr(4, 2));
	set_full_date.setSelectbox('day', date.substr(6));
	set_full_date.setCalender('date', date);
});
last_month.addEventListener('click', function () {
	let date = get_full_date.lastMonth();
	date = get_full_date.formatYmd(date);

	const set_full_date = new setFullDate();
	set_full_date.setSelectbox('year', date.substr(0, 4));
	set_full_date.setSelectbox('month', date.substr(4, 2));
	set_full_date.setSelectbox('day', date.substr(6));
	set_full_date.setCalender('date', date);
});
last_month_end.addEventListener('click', function () {
	let date = get_full_date.lastMonthEnd();
	date = get_full_date.formatYmd(date);

	const set_full_date = new setFullDate();
	set_full_date.setSelectbox('year', date.substr(0, 4));
	set_full_date.setSelectbox('month', date.substr(4, 2));
	set_full_date.setSelectbox('day', date.substr(6));
	set_full_date.setCalender('date', date);
});
first_day.addEventListener('click', function () {
	let date = get_full_date.firstDay();
	date = get_full_date.formatYmd(date);

	const set_full_date = new setFullDate();
	set_full_date.setSelectbox('year', date.substr(0, 4));
	set_full_date.setSelectbox('month', date.substr(4, 2));
	set_full_date.setSelectbox('day', date.substr(6));
	set_full_date.setCalender('date', date);
});
last_week.addEventListener('click', function () {
	let date = get_full_date.lastweek();
	date = get_full_date.formatYmd(date);

	const set_full_date = new setFullDate();
	set_full_date.setSelectbox('year', date.substr(0, 4));
	set_full_date.setSelectbox('month', date.substr(4, 2));
	set_full_date.setSelectbox('day', date.substr(6));
	set_full_date.setCalender('date', date);
});
