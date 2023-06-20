const cityOption = document.querySelector('.right_nav_city')
const cityPopUpContainer = document.querySelector(".city_pop_up_container");
const cityPopUp = document.querySelector(".city_pop_up");
const viewCity = document.querySelector(".view");
const hideCity = document.querySelector(".hide");
const lowerpartCity = document.querySelector(".lowerpart_city");

cityOption.addEventListener("click",()=>{
    cityPopUpContainer.classList.add("display_block");
    cityPopUp.classList.add("display_block");
 })


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