import "./style.css";
import { home } from "./home";
import { about } from "./about";
import { menu } from "./menu";
import { contact } from "./contact";
import html from "./template.html";

const content = document.querySelector(".content");
const aboutBtn = document.querySelector(".about-btn");
const contactBtn = document.querySelector(".contact-btn");
const menuBtn = document.querySelector(".menu-btn");
const homeBtn = document.querySelector(".home-btn");

content.insertAdjacentHTML("beforeend", home);

const clearPage = function () {
  while (content.firstChild) {
    content.removeChild(content.firstChild); // Remove each child node
  }
};

aboutBtn.addEventListener("click", () => {
  clearPage();
  content.insertAdjacentHTML("beforeend", about);
});

menuBtn.addEventListener("click", () => {
  clearPage();
  content.insertAdjacentHTML("beforeend", menu);
});

homeBtn.addEventListener("click", () => {
  clearPage();
  content.insertAdjacentHTML("beforeend", home);
});

contactBtn.addEventListener("click", () => {
  clearPage();
  content.insertAdjacentHTML("beforeend", contact);
});
/* clearPage(); */
