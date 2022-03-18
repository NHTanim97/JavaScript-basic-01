
// function er ager variable holo global variable;
var color ="Green";
function function_one() {
  var color ="Red";
  document.write("Inside function color is : "+color);
  // document.write er jonno function () er variable global hoyegece;
  // document.write function variable call kora hoyece;
}
function_one();
document.write("</br>");
document.write("Outside function color is : "+color);

// global variable age print hoy;
