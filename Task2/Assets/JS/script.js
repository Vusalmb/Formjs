let input1 = document.getElementById("Firstname");
let input2 = document.getElementById("Surname");
let input3 = document.getElementById("Password");
let input4 = document.getElementById("contentPassword");
let input5 = document.getElementById("Email");

let btn1 = document.querySelector(".myBtn1");
let btn2 = document.querySelector(".myBtn2");
let btn3 = document.querySelector(".myBtn3");
let btn4 = document.querySelector(".myBtn4");
let btn5 = document.querySelector(".myBtn5");

let span1 = document.querySelector(".danger1");
let span2 = document.querySelector(".danger2");
let span3 = document.querySelector(".danger3");
let span4 = document.querySelector(".danger4");
let span5 = document.querySelector(".danger5");

let spans = document.querySelectorAll("span");

spans.forEach(span => {
    span.style.color = "red";
    span.style.display = "none";
})

btn1.onclick = function() {
    if(input1.value == ""){
        span1.style.display = "";
    }
    else{
        span1.style.display = "none";
    }
}

btn2.onclick = function() {
    if(input2.value == ""){
        span2.style.display = "";
    }
    else{
        span2.style.display = "none";
    }
}

btn3.onclick = function() {
    if(input3.value == ""){
        span3.style.display = "";
    }
    else{
        span3.style.display = "none";
    }
}

btn4.onclick = function() {
    if(input4.value == ""){
        span4.style.display = "";
    }
    else{
        span4.style.display = "none";
    }
}

btn5.onclick = function() {
    if(input5.value == ""){
        span5.style.display = "";
    }
    // else if(){
    //     input5.classList.add("valid");
    //     input5.classList.remove("invalid");
    //     span5.style.display = "none";
    // }
    // else if(){
    //     input5.classList.remove("invalid");
    //     input5.classList.add("valid");
    //     span5.style.display = "";
    // }
    else{
        span5.style.display = "none";
    }
}