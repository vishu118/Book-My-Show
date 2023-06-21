const hideCity = document.querySelector(".hide");
const viewCity = document.querySelector(".view");
const lowerpartCity = document.querySelector(".lowerpart_city");
const rightNavCityOption = document.querySelector(".right_nav_city");
const rightNavCityOptionPhone = document.querySelector(".right_nav_city1");
const cityPopUp = document.querySelector(".city_pop_up");
const mainBody = document.querySelector("main");
const cityName = document.querySelector(".city_name");
const cityName1 = document.querySelector(".city_name1");
const cityPopUpContainer = document.querySelector(".city_pop_up_container");

viewCity.addEventListener("click",(e)=>{
    e.stopPropagation();
  lowerpartCity.classList.add("display_block");
   viewCity.classList.add("display_none");
})

hideCity.addEventListener("click",(e)=>{
    e.stopPropagation();
   lowerpartCity.classList.remove("display_block");
   viewCity.classList.remove("display_none");
})

rightNavCityOption.addEventListener("click",()=>{
   cityPopUpContainer.classList.add("display_block");
   cityPopUp.classList.add("display_block");
})


cityPopUpContainer.addEventListener("click",(e)=>{
    e.stopPropagation();
    if(!e.target.classList.contains("city_pop_up"))
    cityPopUpContainer.classList.remove("display_block");
    cityPopUp.classList.remove("display_block");
})

cityPopUp.addEventListener("click",(event)=>{
    if(event.target.classList.contains("cityTrans")){
    cityName.innerText=event.target.innerText;
    }
    else if(event.target.classList.contains("cityimg")){
        cityName.innerText=event.target.alt;
        }
})


// FOR SIGNIN POPUP ============================================

const rightNavRest = document.querySelector(".right_nav_rest");
const signButton = document.querySelector(".sign_btn");
const signPopUpContainer = document.querySelector(".sign_pop_up_container");
const modalClose = document.querySelector(".modalclose");



signButton.addEventListener("click",()=>{
    signPopUpContainer.classList.add("display_block");
});

modalClose.addEventListener("click",()=>{
    signPopUpContainer.classList.remove("display_block");
})

// HAMBERGER=======================================================

const hamburgerLogin = document.querySelector(".hamburger_login");
const hamburger = document.querySelector(".nav_hamburger");
const hamIcon = document.querySelector(".ham_icon");
const hamburger1 = document.querySelector(".nav_hamburger1");
const hamburgerSignOut = document.querySelector(".hamburger_signOut");
const hamburgerContainer = document.querySelector(".nav_hamburger_container");
const Hamclose = document.querySelector(".Hamclose")

hamIcon.addEventListener("click",()=>{
    hamburger.classList.toggle("display_block");
 })
 
//  mainBody.addEventListener("click",()=>{
//      hamburger.classList.remove("display_block");
//      hamburger1.classList.remove("display_block");
//  })
  
 hamburgerLogin.addEventListener("click",()=>{
     hamburger.classList.remove("display_block");
     signPopUpContainer.classList.add("display_block");
 
 })

 Hamclose.addEventListener('click',()=>{
    hamburger.classList.remove('display_block')
 })
 
//  rightNavRest1.addEventListener("click",()=>{
//     console.log("hi")
//   hamburger1.classList.add("display_block");
//  })
 
 hamburgerSignOut.addEventListener("click",()=>{
     rightNavRest1.classList.remove("display_flex");
     rightNavRest.classList.remove("display_none");
     hamburger1.classList.remove("display_block");
 
     // localStorage.setItem("isLoggedIn", false);
     localStorage.removeItem("isLoggedIn");
 })
 