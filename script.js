let calinput = document.getElementById("calinput");
let btnclear = document.getElementById("btnclear");
let pi = document.getElementById("btnpi");
let btnback = document.getElementById("btnback");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btnplus = document.getElementById("btnplus");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btnminus = document.getElementById("btnminus");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnmultiply = document.getElementById("btnmultiply");
let btndivide = document.getElementById("btndivide");
let btn0 = document.getElementById("btn0");
let btndot = document.getElementById("btndot");
let btnequal = document.getElementById("btnequals");
btnclear.onclick = function () {
  calinput.value = "";
};
pi.onclick = function () {
  calinput.value = calinput.value + "3.14159";
};
btnback.onclick = function () {
  calinput.value = calinput.value.slice(0, -1);
};
btn1.onclick = function () {
  calinput.value = calinput.value + "1";
};
btn2.onclick = function () {
  calinput.value = calinput.value + "2";
};
btn3.onclick = function () {
  calinput.value = calinput.value + "3";
};
btn4.onclick = function () {
  calinput.value = calinput.value + "4";
};
btn5.onclick = function () {
  calinput.value = calinput.value + "5";
};
btn6.onclick = function () {
  calinput.value = calinput.value + "6";
};
btn7.onclick = function () {
  calinput.value = calinput.value + "7";
};
btn8.onclick = function () {
  calinput.value = calinput.value + "8";
};
btn9.onclick = function () {
  calinput.value = calinput.value + "9";
};
btn0.onclick = function () {
  calinput.value = calinput.value + "0";
};
btndot.onclick = function () {
  calinput.value = calinput.value + ".";
};
btnplus.onclick = function () {
  calinput.value = calinput.value + "+";
};
btnminus.onclick = function () {
  calinput.value = calinput.value + "-";
};
btnmultiply.onclick = function () {
  calinput.value = calinput.value + "*";
};
btndivide.onclick = function () {
  calinput.value = calinput.value + "/";
};
btnequal.onclick = function () {
  try {
    calinput.value = eval(calinput.value);
  } catch (error) {
    calinput.value = "Error";
  }
};
