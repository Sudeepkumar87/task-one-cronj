const hamburger = document.querySelector(".hamburger");
const innernav = document.querySelector(".innernav");

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  innernav.classList.toggle("active");
})
// this code is for hamburger menu end here
const mainnav = document.querySelector(".mainnav");

window.onscroll = () => {
  if (window.scrollY>100){
    mainnav.classList.add("navActive");

  } else{
    mainnav.classList.remove("navActive")
  }
}