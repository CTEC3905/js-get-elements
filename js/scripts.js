(function(){

let spID = document.getElementById("special");
let h2ALL = document.querySelectorAll("h2");
let pALL = document.getElementsByTagName("p");
let classALL = document.getElementsByClassName("foo");
let options = document.getElementById("options-form");
let pBTN = document.getElementById("p-button");
let h2BTN = document.getElementById("h2-button");
let formBTN = document.getElementById("form-button");
let classBTN = document.getElementById("class-button");
let idBTN = document.getElementById("id-button");

h2BTN.addEventListener("mouseover", function(e){
  for(i=0;i<h2ALL.length;i++){
    h2ALL[i].classList.add("highlight");
  } e.preventDefault();}, false);
h2BTN.addEventListener("mouseout", function(e){
  for(i=0;i<h2ALL.length;i++){
    h2ALL[i].classList.remove("highlight");
  } e.preventDefault();}, false);

pBTN.addEventListener("mouseover", function(e){
  for(i=0;i<pALL.length;i++){
    pALL[i].classList.add("highlight");
  } e.preventDefault();}, false);
pBTN.addEventListener("mouseout", function(e){
  for(i=0;i<pALL.length;i++){
    pALL[i].classList.remove("highlight");
  } e.preventDefault();}, false);

formBTN.addEventListener("mouseover", function(e){
  options.classList.add("highlight");
  e.preventDefault();}, false);
formBTN.addEventListener("mouseout", function(e){
  options.classList.remove("highlight");
  e.preventDefault();}, false);

classBTN.addEventListener("mouseover", function(e){
  for(i=0;i<classALL.length;i++){
    classALL[i].classList.add("highlight");
  } e.preventDefault();}, false);
classBTN.addEventListener("mouseout", function(e){
  for(i=0;i<classALL.length;i++){
    classALL[i].classList.remove("highlight");
  } e.preventDefault();}, false);

idBTN.addEventListener("mouseover", function(e){
  spID.classList.add("highlight");
  e.preventDefault();}, false);
idBTN.addEventListener("mouseout", function(e){
  spID.classList.remove("highlight");
  e.preventDefault();}, false);

}());