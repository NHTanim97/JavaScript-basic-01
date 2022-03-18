
// array single value print korar jonno;
var array1 = [1,2,3,4,5];
document.write(array1[0]);
document.write("</br>");
document.write(array1[3]);
document.write("</br>");
document.write("</br>");



// double array print;
var array2 = [4,5,6,7,8];
var array3 = [9,7,8,4];
var allarray = array2.concat(array3);
document.write(allarray);
document.write("</br>");
document.write("</br>");


// string sort
var color = ["red", "green", "blue", "white", "pink"];
document.write("Before sorting : "+color+"</br>");
color.sort();
document.write("After sorting : "+color);
document.write("</br>");
document.write("</br>");




// number sort
// assendingsort;
var num = [20,100,3000,90,483,2,56];
document.write("Before assending sort : "+num+"</br>");

// num go to function x,y;
// then x-y and sorting;
function assendingsort(x, y) {
  return (x-y);
}
num.sort(assendingsort);
document.write("After assending sort : "+num);
document.write("</br>");
document.write("</br>");

// decending;
var num = [20,100,3000,90,483,2,56];
document.write("Before decending sort : "+num+"</br>");

// num go to function x,y;
// then x-y and sorting;
function decendingsort(x, y) {
  return (y-x);
}
num.sort(decendingsort);
document.write("After decending sort : "+num);
document.write("</br>");
document.write("</br>");



// number length;
var num = [20,100,3000,90,483,2,56];
document.write("Number Length : "+num.length+"</br> </br>");



// value add;
var num = [20,100,3000,90,483,2,56];
num[num.length]="35034"
document.write("Number Length : "+num+"</br> </br>");


// value remove;
// 20 remove;
var num = [20,100,3000,90,483,2,56];
num.shift();
document.write("Number shift : "+num+"</br> </br>");



// 1st e value add;
var num = [20,100,3000,90,483,2,56];
num.unshift(081);
document.write("Number add 1st : "+num+"</br> </br>");

// last value added;
var num = [20,100,3000,90,483,2,56];
num.push(4567);
document.write("Number added last : "+num+"</br> </br>");



// last value remove;
var num = [20,100,3000,90,483,2,56];
num.pop();
document.write("Number remove last : "+num+"</br> </br>");
