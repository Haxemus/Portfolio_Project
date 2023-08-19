document.querySelector(".aboutMeContent").style.display = "block";

let about = document.getElementById("button1");
let projects = document.getElementById("button2");
let skills = document.getElementById("button3");
let contact = document.getElementById("button4");

/*Activates the nav button links to display its content while removing the past displays*/ 

about.onclick = function () {
  document.querySelector(".aboutMeContent").style.display = "block";
  document.querySelector(".projectContent").style.display = "none";
  document.querySelector(".skillContent").style.display = "none";
}
projects.onclick = function () {
  document.querySelector(".aboutMeContent").style.display = "none";
  document.querySelector(".projectContent").style.display = "block";
  document.querySelector(".skillContent").style.display = "none";
}
skills.onclick = function () {
  document.querySelector(".aboutMeContent").style.display = "none";
  document.querySelector(".projectContent").style.display = "none";
  document.querySelector(".skillContent").style.display = "block";
}

/*Creates animation for buttons*/
let buttonShape1 = document.querySelector("#shape1");
let buttonShape2 = document.querySelector("#shape2");
let buttonShape3 = document.querySelector("#shape3");
let buttonShape4 = document.querySelector("#shape4");

  /* Button 1 Actions */
buttonShape1.onmousedown = function () {
  buttonShape1.style.marginTop = "5px";
  buttonShape1.style.marginBottom = "-5px";
  buttonShape1.style.boxShadow = "0 -5px 0 0 #40e0d0	";
  buttonShape1.style.transition = "none";
}
buttonShape1.onmouseup = function () {
  buttonShape1.style.marginTop = "0px";
  buttonShape1.style.marginBottom = "0px";
  buttonShape1.style.boxShadow = "0 0 0 0 #40e0d0	";
  buttonShape1.style.transition = "margin .2s ease-in, box-shadow .2s ease-in";
}
buttonShape1.onmouseover = function () {
  buttonShape1.style.color = "#40e0d0";
}
buttonShape1.onmouseout = function () {
  buttonShape1.style.color = "black";
  buttonShape1.style.transition = "color .5s ease-out";
  buttonShape1.style.transition = "margin .2s ease-in, box-shadow .2s ease-in";
  buttonShape1.style.marginTop = "0px";
  buttonShape1.style.marginBottom = "0px";
  buttonShape1.style.boxShadow = "none";
}
/* Button 2 Actions */
buttonShape2.onmousedown = function () {
  buttonShape2.style.marginTop = "5px";
  buttonShape2.style.marginBottom = "-5px";
  buttonShape2.style.boxShadow = "0 -5px 0 0 #40e0d0";
  buttonShape2.style.transition = "none";
}
buttonShape2.onmouseup = function () {
  buttonShape2.style.marginTop = "0px";
  buttonShape2.style.marginBottom = "0px";
  buttonShape2.style.boxShadow = "0 0 0 0 #40e0d0";
  buttonShape2.style.transition = "margin .2s ease-in, box-shadow .2s ease-in";
}
buttonShape2.onmouseover = function () {
  buttonShape2.style.color = "#40e0d0";
}
buttonShape2.onmouseout = function () {
  buttonShape2.style.color = "black";
  buttonShape2.style.transition = "color .5s ease-out";

  buttonShape2.style.marginTop = "0px";
  buttonShape2.style.marginBottom = "0px";
  buttonShape2.style.boxShadow = "0 0 0 0 #40e0d0	";
  buttonShape2.style.transition = "margin .2s ease-in, box-shadow .2s ease-in";
}

/* Button 3 Actions */
buttonShape3.onmousedown = function () {
  buttonShape3.style.marginTop = "5px";
  buttonShape3.style.marginBottom = "-5px";
  buttonShape3.style.boxShadow = "0 -5px 0 0 #40e0d0";
  buttonShape3.style.transition = "none";
}
buttonShape3.onmouseup = function () {
  buttonShape3.style.marginTop = "0px";
  buttonShape3.style.marginBottom = "0px";
  buttonShape3.style.boxShadow = "0 0 0 0 #40e0d0";
  buttonShape3.style.transition = "margin .2s ease-in, box-shadow .2s ease-in";
}
buttonShape3.onmouseover = function () {
  buttonShape3.style.color = "#40e0d0";
}
buttonShape3.onmouseout = function () {
  buttonShape3.style.color = "black";
  buttonShape3.style.transition = "color .5s ease-out";

  buttonShape3.style.marginTop = "0px";
  buttonShape3.style.marginBottom = "0px";
  buttonShape3.style.boxShadow = "0 0 0 0 #40e0d0";
  buttonShape3.style.transition = "margin .2s ease-in, box-shadow .2s ease-in";
}

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
  window.open("./Pages/contact.html", '_self');
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

/* Picture Animation */
let profile = document.querySelector("img");
profile.onmousedown = function () {
  profile.style.margin = "25px 7% 0 0";
  profile.style.boxShadow = "0 0 #40e0d0";
  profile.style.transition = "margin .2s, box-shadow .2s, height 1s, width 1s";
}
profile.onmouseup = function () {
  profile.style.margin = "15px 7% 10px 0";
  profile.style.boxShadow = "0 10px #40e0d0";
  profile.style.transition = "margin .2s, box-shadow .2s, height 1s, width 1s";
}

/*Project Buttons */
let proj1 = document.querySelector("#project1");
let proj2 = document.querySelector("#project2");
let proj3 = document.querySelector("#project3");

proj1.onmousedown = function () {
  proj1.style.margin = "60px 30px 10px 30px";
  proj1.style.boxShadow = "0 0 #40e0d0";
  proj1.style.transition = "margin .1s ease-in, box-shadow .1s ease-in";
}
proj1.onmouseup = function () {
  proj1.style.margin = "40px 30px 30px 30px";
  proj1.style.boxShadow = "0 20px #40e0d0";
  proj1.style.transition = "margin .1s ease-in, box-shadow .1s ease-in";
}
proj1.onmouseover = function () {
  proj1.style.boxShadow = "0px 20px #40e0d0";
  proj1.style.transition = "box-shadow .1s ease-in-out";
}
proj1.onmouseout = function () {
  proj1.style.boxShadow = "0px 20px #0b2b29";
  proj1.style.margin = "40px 30px 30px 30px";
  proj1.style.transition = "margin .1s ease-in, box-shadow .1s ease-in";
}

proj2.onmousedown = function () {
  proj2.style.margin = "60px 30px 10px 30px";
  proj2.style.boxShadow = "0 0 #40e0d0";
  proj2.style.transition = "margin .1s ease-in, box-shadow .1s ease-in";
}
proj2.onmouseup = function () {
  proj2.style.margin = "40px 30px 30px 30px";
  proj2.style.boxShadow = "0 20px #40e0d0";
  proj2.style.transition = "margin .1s ease-in, box-shadow .1s ease-in";
}
proj2.onmouseover = function () {
  proj2.style.boxShadow = "0px 20px #40e0d0";
  proj2.style.transition = "box-shadow .1s ease-in-out";
}
proj2.onmouseout = function () {
  proj2.style.boxShadow = "0px 20px #0b2b29";
  proj2.style.margin = "40px 30px 30px 30px";
  proj2.style.transition = "margin .1s ease-in, box-shadow .1s ease-in";
}

proj3.onmousedown = function () {
  proj3.style.margin = "60px 30px 40px 30px";
  proj3.style.boxShadow = "0 0 #40e0d0";
  proj3.style.transition = "margin .1s ease-in, box-shadow .1s ease-in";
}
proj3.onmouseup = function () {
  proj3.style.margin = "40px 30px 60px 30px";
  proj3.style.boxShadow = "0 20px #40e0d0";
  proj3.style.transition = "margin .1s ease-in, box-shadow .1s ease-in";
}
proj3.onmouseover = function () {
  proj3.style.boxShadow = "0px 20px #40e0d0";
  proj3.style.transition = "box-shadow .1s ease-in-out";
}
proj3.onmouseout = function () {
  proj3.style.boxShadow = "0px 20px #0b2b29";
  proj3.style.margin = "40px 30px 60px 30px";
  proj3.style.transition = "margin .1s ease-in, box-shadow .1s ease-in";
}
