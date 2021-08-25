function ppe(){
var cart = document.getElementsByClassName("ppe")
cart[0].innerHTML= "Added to Cart"
buttonClick();
}

function sani(){
var cart = document.getElementsByClassName("sani")
cart[0].innerHTML= "Added to Cart"
buttonClick();
}
function mask(){
var cart = document.getElementsByClassName("mask")
cart[0].innerHTML= "Added to Cart"
buttonClick();
}
function oats(){
var cart = document.getElementsByClassName("oats")
cart[0].innerHTML= "Added to Cart"
buttonClick();
}

function biscuits(){
var cart = document.getElementsByClassName("biscuits")
cart[0].innerHTML= "Added to Cart"
buttonClick();
}
function almonds(){
var cart = document.getElementsByClassName("almonds")
cart[0].innerHTML= "Added to Cart"
buttonClick();
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
var i = 0;
  function buttonClick() {
      document.getElementById('inc').value = ++i;
  }
