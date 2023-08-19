/*Creates animation for buttons*/
let buttonShape4 = document.querySelector("#shape4");

/* Button 4 Actions */
buttonShape4.onmousedown = function () {
  buttonShape4.style.marginTop = "6px";
  buttonShape4.style.marginBottom = "-6px";
  buttonShape4.style.boxShadow = "0 -5px 0 0 #40e0d0";
  buttonShape4.style.transition = "none";
}
buttonShape4.onmouseup = function () {
  buttonShape4.style.marginTop = "0px";
  buttonShape4.style.marginBottom = "0px";
  buttonShape4.style.boxShadow = "0 0 0 0 #40e0d0";
  buttonShape4.style.transition = "margin .2s ease-in, box-shadow .2s ease-in";
  window.open("../index.html", '_self');
}
buttonShape4.onmouseover = function () {
  buttonShape4.style.color = "#40e0d0";
}
buttonShape4.onmouseout = function () {
  buttonShape4.style.color = "black";
  buttonShape4.style.transition = "color .5s ease-out";

  buttonShape4.style.marginTop = "0px";
  buttonShape4.style.marginBottom = "0px";
  buttonShape4.style.boxShadow = "0 0 0 0 #40e0d0";
  buttonShape4.style.transition = "margin .2s ease-in, box-shadow .2s ease-in";
}

/* To Copy an email */

/* Contact Buttons */
let contactButton1 = document.querySelector("#contactShape1");
let contactButton2 = document.querySelector("#contactShape2");

contactButton1.onmousedown = function () {
  contactButton1.style.marginTop = "6px";
  contactButton1.style.marginBottom = "-6px";
  contactButton1.style.boxShadow = "0 -5px 0 0 #40e0d0";
  contactButton1.style.transition = "none";
}
contactButton1.onmouseup = function () {
  contactButton1.style.marginTop = "0px";
  contactButton1.style.marginBottom = "0px";
  contactButton1.style.boxShadow = "0 0 0 0 #40e0d0";
  contactButton1.style.transition = "margin .2s ease-in, box-shadow .2s ease-in";
  navigator.clipboard.writeText("hazielfloressomlb@gmail.com");
}
contactButton1.onmouseout = function () {
  contactButton1.style.color = "black";
  contactButton1.style.transition = "color .5s ease-out";

  contactButton1.style.marginTop = "0px";
  contactButton1.style.marginBottom = "0px";
  contactButton1.style.boxShadow = "0 0 0 0 #40e0d0";
  contactButton1.style.transition = "margin .2s ease-in, box-shadow .2s ease-in";
}

/* Second Button */
contactButton2.onmousedown = function () {
  contactButton2.style.marginTop = "6px";
  contactButton2.style.marginBottom = "-6px";
  contactButton2.style.boxShadow = "0 -5px 0 0 #40e0d0";
  contactButton2.style.transition = "none";
  window.open("https://www.linkedin.com/in/hazielpax", '_blank');
}
contactButton2.onmouseup = function () {
  contactButton2.style.marginTop = "0px";
  contactButton2.style.marginBottom = "0px";
  contactButton2.style.boxShadow = "0 0 0 0 #40e0d0";
  contactButton2.style.transition = "margin .2s ease-in, box-shadow .2s ease-in";
}
contactButton2.onmouseout = function () {
  contactButton2.style.color = "black";
  contactButton2.style.transition = "color .5s ease-out";
  contactButton2.style.marginTop = "0px";
  contactButton2.style.marginBottom = "0px";
  contactButton2.style.boxShadow = "0 0 0 0 #40e0d0";
  contactButton2.style.transition = "margin .2s ease-in, box-shadow .2s ease-in";
}