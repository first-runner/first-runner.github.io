/*
var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world";
*/

/*
let myVariable;
myVariable = "Bob";
var myVariable2 = "Bob2";
myVariable;
myVariable2 = "Booob";
*/

/*
var iseCream = "chocolate";
if (iseCream === "chocolate"){
    alert("Yes");
} else {
    alert("No");
}
*/

/*
var myVariable = document.querySelector("h1");
alert(multiply(2, 10));

function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
};
*/

/*
document.querySelector("html").onclick = function () {
    alert("Click");
};
*/

//изменение изображение по нажатию на него
var myImage = document.querySelector("img");

myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/forest-far.jpg") {
        myImage.setAttribute("src", "images/forest-fer-2.jpg");
    } else {
        myImage.setAttribute("src", "images/forest-far.jpg");
    }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Hello, " + myName;
};

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Hello, " + storedName;
}

myButton.onclick = function () {
    setUserName();
};