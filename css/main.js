const humb = document.getElementById("humb");
const container = document.getElementById("container");
const ulMobile = document.getElementById("ul-mobile");
humb.addEventListener("click", ()=>{
  container.classList.toggle("change");
  ulMobile.classList.toggle("d-block");
})