let btn1 = document.querySelector(".btn_one");
let btn2 = document.querySelector(".btn_two");
let sidebar = document.querySelector(".side-bar") ;

btn1.addEventListener("click" , slidebar) ;
btn2.addEventListener("click" , slidebar) ;

function slidebar(){
  sidebar.classList.toggle("openbar");
  
}