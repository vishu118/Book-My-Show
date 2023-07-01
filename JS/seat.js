
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




// ================================================SEATS DYNAMICALLY===========================================================================
let platinum = document.getElementById("seats_platinum");
let gold = document.getElementById("seats_gold");
let silver = document.getElementById("seats_silver");
let seatrow1 = Number(platinum.getAttribute('seatrow1'))
let seatcol1 = Number(platinum.getAttribute('seatcol1'))
let seatrow2 = Number(platinum.getAttribute('seatrow2'))
let seatcol2 = Number(platinum.getAttribute('seatcol2'))
let seatrow3 = Number(platinum.getAttribute('seatrow3'))
let seatcol3 = Number(platinum.getAttribute('seatcol3'))



for( let i = 0 ; i < seatrow1 ; i++ ){
   platinum.innerHTML += `<div class='row' id='row1-${i}'><span class="light_grey_text">${String.fromCharCode(65 + i)} &nbsp; &nbsp; </span></div>&nbsp;`;
   currentrow1 = document.getElementById(`row1-${i}`);
   for (let j = 0; j < seatcol1; j++) {
    currentrow1.innerHTML = currentrow1.innerHTML + `<div class='seat1 pointer' id="r-${i}-${j}">${j + 1}</div>`;
  }
}

for (let i = 0; i < seatrow2; i++) {
  gold.innerHTML = gold.innerHTML + `<div class='row' id='row2-${i}'><span class="light_grey_text">${String.fromCharCode(65 + i)} &nbsp; &nbsp;&nbsp; </span></div>&nbsp;`;
  currentrow2 = document.getElementById(`row2-${i}`);
  for (let j = 0; j < seatcol2; j++) {
    currentrow2.innerHTML = currentrow2.innerHTML + `<div class='seat2 pointer' id="r-${i}-${j}">${j + 1}</div>`;
  }
}

for (let i = 0; i < seatrow3; i++) {
  silver.innerHTML = silver.innerHTML + `<div class='row' id='row3-${i}'><span class="light_grey_text">${String.fromCharCode(65 + i)} &nbsp; &nbsp; </span></div>&nbsp;`;
  currentrow3 = document.getElementById(`row3-${i}`);
  for (let j = 0; j < seatcol1; j++) {
    currentrow3.innerHTML = currentrow3.innerHTML + `<div class='seat3 pointer' id="r-${i}-${j}">${j + 1}</div>`;
  }
}


// ================================================SEATS DYNAMICALLY===========================================================================


renderDetails()