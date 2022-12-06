
export default function tabs() {

let tabs = document.querySelectorAll(".tab");
let indicator = document.querySelector(".indicator");
let panel = document.querySelector(".tabpanel");

indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left  + "px";
}