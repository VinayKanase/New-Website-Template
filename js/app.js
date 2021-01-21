
//Selectors and Variables
const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".ul");
const hamlines = document.querySelectorAll(".line");
const blogHamburger = document.querySelector(".hamburger-blog");
const blogCategories = document.querySelector(".blog-categories");
//Functions
let navlinks = ()=>{
 ul.classList.toggle("navcall");
 
 hamlines.forEach((line)=>{
   line.classList.toggle("toggle");
 });
}
function categoryonHover(){
  console.log(blogHamburger,blogCategories);
  blogCategories.classList.toggle("addcategory");
}
//Event Listners
hamburger.addEventListener("click",navlinks);
blogHamburger.addEventListener("click",categoryonHover);