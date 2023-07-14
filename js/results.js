import { results, skinTypes } from "./data.js";

const skinType = new URLSearchParams(location.search).get("skinType");
const result = results[skinTypes[skinType]];

const titleEl = document.querySelector(".page-title");
const characterEl = document.querySelector(".character");
const boxEls = document.querySelectorAll(".box");
const itemEls = document.querySelectorAll(".item");

titleEl.innerHTML = result.title;
characterEl.src = result.character;

boxEls.forEach(function (boxEl, index) {
	boxEl.innerHTML = result.results[index];
});

itemEls.forEach(function (itemEl, index) {
	itemEl.innerHTML = result.items[index];
});
