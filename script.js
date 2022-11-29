let drink = document.querySelector(".drink");
let type = document.querySelector(".type");
let orderprice = document.querySelector(".orderprice");
let add = document.querySelector(".increment");
let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
let drinks = document.querySelector(".drinks");
let main = document.querySelector(".main");
let buy = document.querySelector(".buy");
let count = 1;
let price = 0;
let list = document.querySelector("ul");
let burger = document.querySelector(".burger");
let change1 = document.querySelector(".change1");
let change2 = document.querySelector(".change2");
let change3 = document.querySelector(".change3");
let change4 = document.querySelector(".change4");
window.onload= function last(){
    count = 1;
    add.innerHTML = count;
    main.src = "div1.png";
    type.innerHTML = "First";
    price = 33 ;
    orderprice.innerHTML = price +".00";
}
burger.onclick = function (){
    list.classList.toggle("clip")
}
change1.onclick = function first(){
    count = 1;
    add.innerHTML = count;
    main.src = "div1.png";
    type.innerHTML = "First";
    price = 33
    orderprice.innerHTML = price +".00";
}
change4.onclick = function fourth(){
    count = 1;
    add.innerHTML = count;
    main.src = "first.png";
    type.innerHTML = "Fourth";
    price = 30;
    orderprice.innerHTML = price +".00";
}
change2.onclick = function second(){
    count = 1;
    add.innerHTML = count;
    main.src = "second.png";
    type.innerHTML = "Second";
    price = 18
    orderprice.innerHTML = price +".00";
}
change3.onclick = function third(){
    count = 1;
    add.innerHTML = count;
    main.src = "div2.png";
    type.innerHTML = "Third"
    price = 27
    orderprice.innerHTML = price +".00";
}
increase.onclick = function increment(){
    count++
    orderprice.innerHTML = count * price +".00";
    add.innerHTML = count;
}
decrease.onclick = function decrement(){
    if (count > 1){
        count--
        orderprice.innerHTML = count * price +".00";
        add.innerHTML = count;
    }
}
buy.onclick = function purchase() {
    alert("Thanks for purchasing");
    count = 1;
    add.innerHTML = count;
    orderprice.innerHTML = price;
}