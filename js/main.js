import "../css/style.css";
import $ from "jquery";

console.log("hola mundo");
$("#hola").on("click", () => {
  console.log("clicked");
});

const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
open.addEventListener("click", () => {
  nav.classList.toggle("show");
});
