
const nav = document.querySelector("body nav");
nav.style.left = "-100%";

const aside = document.querySelector("body aside");
aside.style.left = "-100%";

const main = document.querySelector("body main");
main.style.left = "0px";

document.querySelectorAll(".close")[0].addEventListener('click', (event) => {
  nav.style.left ="-100%";
  main.style.left = "0px";
});

document.querySelectorAll(".close")[1].addEventListener('click', (event) => {
  aside.style.left = "-100%";
  main.style.left = "0px";
});

document.querySelector(".menu").addEventListener('click', (event) => {
  nav.style.left = "0px";
  main.style.left = "-100%";
});

document.querySelector(".settings").addEventListener('click', (event) => {
  aside.style.left = "0px";
  main.style.left = "-100%";
});