
const id = new URLSearchParams(window.location.search).get("id");
const theatreName = new URLSearchParams(window.location.search).get("theatreName");
console.log(theatreName)
const dynamic_nav_el = document.querySelector(".seat_nav")


let Api_key = "api_key=57b428c0e112b579eb26e2f43ff08b0f"
let Base_Url = "https://api.themoviedb.org/3/"
let movieUrl = `${Base_Url}movie/${id}?${Api_key}`
let seats= sessionStorage.getItem('numSeats');


const renderDetails = async () => {
  let res = await fetch(movieUrl)
  let movieData = await res.json()
  

  let res1 = await fetch("../JSON/theatre.json")
  let theatreData = await res1.json();
  let theatreDetail = theatreData.theatres
  
  
 let nameOfTheatre = "";
 
  for( let i = 0 ; i < theatreDetail.length ; i++){
    // console.log(theatreDetail[i].id)
  if(theatreDetail[i].id == theatreName)
     nameOfTheatre = theatreDetail[i].theatreName;
  }

  const {original_title} = movieData;
  const template = `
  <div class="seat_nav_content container">
  <div class="seat_left_nav_item">
    <div class="seat_cheveron"><a href="../HTML/theatre.html?id=${id}" class="fa fa-angle-left back-logo"></a></div>

    <div class="api_fetched_detail">
      <p class="seat_movie_name">${original_title} <span class="seat_adult">(U/A)</span></p>
      <p class="seat_theater_name">${nameOfTheatre}</p>
    </div>
  </div>

  <div class="seat_right_nav_item">
    <p class="num_of_tickets pointer"><span id="tickt_no">${seats} </span>Tickets </p>
     <a href="../HTML/theatre.html?id=${id}"><div class="seat_close_icon" style="color:white";><span class="fa fa-close pointer"></span></div></a>
  </div>
</div>
  
  
  `

  dynamic_nav_el.innerHTML = template;
    
};
renderDetails()