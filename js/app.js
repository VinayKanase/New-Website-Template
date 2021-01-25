
//Selectors and Variables
const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".ul");
const hamlines = document.querySelectorAll(".line");
const blogHamburger = document.querySelector(".hamburger-blog");
const blogCategories = document.querySelector(".blog-categories");
const pathpublic  = document.querySelectorAll("#publicTransport path");
const pathBoard  = document.querySelectorAll("#bonBoard path");
const pathAiroplane  = document.querySelectorAll("#Airoplane path");
const pathCycling  = document.querySelectorAll("#Cycling path");
const pathRoom  = document.querySelectorAll("#Room path");
let svgval  =false;
if(document.querySelector("body svg")) svgval=true;
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
if(svgval){
  setInterval(() => {
    pathpublic.forEach(paths=>{
      paths.style.animation="fillsvg 0.6s ease-in-out 0s";
    });
     setTimeout(() => {
      pathpublic.forEach(paths=>{
        paths.style.animation ="";
      });
     }, 600);
    pathBoard.forEach(paths=>{
      paths.style.animation="fillsvg 0.6s ease-in-out 0.6s";
    });
   setTimeout(() => {
    pathBoard.forEach(paths=>{
      paths.style.animation ="";
    });
   }, 1200);
   pathAiroplane.forEach(paths=>{
    paths.style.animation="fillsvg 0.6s ease-in-out 1.2s";
   });
   setTimeout(() => {
     pathAiroplane.forEach(paths=>{
  paths.style.animation="";
     });
   }, 1800);
   pathCycling.forEach(paths=>{
    paths.style.animation= "fillsvg 0.6s ease-in-out 1.8s";
   });
   setTimeout(() => {
    pathCycling.forEach(paths=>{
      paths.style.animation= "";
     });
   }, 2400);
   pathRoom.forEach(paths=>{
paths.style.animation="fillsvg 0.6s ease-in-out 2.4s";
   });
   setTimeout(() => {
    pathRoom.forEach(paths=>{
      paths.style.animation="";
         });
   }, 2800);
  }, 3000);
}
//Event Listners
hamburger.addEventListener("click",navlinks);
blogHamburger.addEventListener("click",categoryonHover);
