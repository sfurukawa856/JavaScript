'use strict';
import { getFullDate } from "./get-full-date.js";
import { setFullDate } from "./set-full-date.js";

const today = document.querySelector('.today');
const yesterday = document.querySelector('.yesterday');
const last_month = document.querySelector('.last_month');
const first_day = document.querySelector('.first_day');
const last_week = document.querySelector('.last_week');

const get_full_date = new getFullDate();

today.addEventListener('click', function () {
	const date = get_full_date.getToday();
	const set_full_date = new setFullDate(date);
	set_full_date.setSelectbox();
	set_full_date.setCalender();
});
yesterday.addEventListener('click', function () {
	const date = get_full_date.getYesteraday();
	const set_full_date = new setFullDate(date);
	set_full_date.setSelectbox();
	set_full_date.setCalender();
});
last_month.addEventListener('click', function () {
	const date = get_full_date.getLastMonth();
	const set_full_date = new setFullDate(date);
	set_full_date.setSelectbox();
	set_full_date.setCalender();
});
first_day.addEventListener('click', function () {
	const date = get_full_date.getFirstDay();
	const set_full_date = new setFullDate(date);
	set_full_date.setSelectbox();
	set_full_date.setCalender();
});
last_week.addEventListener('click', function () {
	const date = get_full_date.getLastweek();
	const set_full_date = new setFullDate(date);
	set_full_date.setSelectbox();
	set_full_date.setCalender();
});
