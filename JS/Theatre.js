// FETCHIG ID FOR SELECTED MOVIE DATA ============================================================================

const id = new URLSearchParams(window.location.search).get("id");

// DECLERATION OF ALL THE VARIABLES REQ =========================================================================

const bookingCont = document.querySelector(".theatre_location");
const workshopContainer = document.querySelector(".workshop");
const booking_head_el = document.querySelector(".booking_head");
const booking_filter_el = document.querySelector(".booking_filter");
const direction = document.querySelector(".direction");
let seatsToBookEl = document.querySelector(".seatstobook");
const datesContainerEl = document.querySelector(".dates");
let currentTheatreName = '';

// API FOR DIFFRENT END POINTS ============================================================================

let Api_key = "api_key=2e302e23979f60ced7d629e4168670c9";
let Base_Url = "https://api.themoviedb.org/3/";
let getMovieDetails = `${Base_Url}movie/${id}?${Api_key}`;

// FETCHING DATA ============================================================================================

const renderDetails = async () => {
  const res = await fetch(getMovieDetails);
  const data = await res.json();
  console.log(data);
  const { original_title, genres, spoken_languages, adult } = data;

  //  TEMPLATE FOR NAME AND GENRE================================================================================

  const template = `
  <div class="booking_title">
  
  <p class="movie_title"><a href="../HTML/Movie_extended.html?id=${id}"> <i class="fa-solid fa-less-than movie_back" ></i></a> <span> ${original_title} -${spoken_languages[0].english_name}</span></p>
</div>
<div class="booking_genere container">
  <i class="fa-brands fa-umbraco"></i>
  <span class="genere">${genres[0].name}</span>
  <span class="genere">${genres[1].name}</span>

</div>



`;
  booking_head_el.innerHTML = template;

  //   TEMPLATE FOR MOVIE LANGUAGE ====================================================================================

  const template2 = `
    <div class="booking_filter">
    <p class="moviefilter">${spoken_languages[0].english_name}-2D</p>
   
  </div>
    `;

  booking_filter_el.innerHTML = template2;

  //   TEMPLATE FOR MOVIE NAME IN BOTTOM========================================================================================

  const template3 = `


    <div class="direction">
        <p><span>Home</span>&#8594<span>Movies in</span>&#8594<span class = "movie_name">${original_title}</span></p>
      </div>
    `;
  direction.innerHTML = template3;
};

const getLiveEvents = async () => {
  let url = "../JSON/theatre.json";
  const res = await fetch(url);
  const data = await res.json();
  let theatre = data.theatres;
  // let theatreTime = data.theatres.Time;
  let template2 = "";

  // TEMPLATE FOR TIMEING====================================================================
  theatre.map((ele) => {
    let template1 = "";
    let timeslots = ele.Time;
    timeslots.map((ele) => {
      template1 += `
  <div class="timing">
      <span class="booking_timing ${ele.id}">${ele}</span>
      <p class="booking_flexibility"><span> <i class="fa-solid fa-circle"></i></span>Cancellation Available</p>
  </div>
  `;
    });
    template2 += `<div class="booking_location container">
 <div class="heart"><i class="fa-regular fa-heart"></i></div>
 <div>
   <p class="theatre_name ${ele.theatreName}">${ele.theatreName}</p>
   <div>
     <span class="mTicket" ><i class="fa-solid fa-mobile-retro"></i> M-Ticket</span>
     <span class="foodbevrages"><i class="fa-solid fa-burger"></i>Food And Beverages</span>
   </div>
   
 </div>

 <span class="info">
   <i class="fa-solid fa-circle-info"></i>
   <span>INFO</span>
 </span>

    <div class="movie_timing">
     ${template1}
    </div>



  </div>
   `;
  });
  bookingCont.innerHTML += template2;



  

  const currentDate = new Date();
  const dates = [];

  for (let i = 0; i < 5; i++) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i + 1); // Add i + 1 to skip the current date
    dates.push(nextDate);
  }
  let dateTemplate = `<i class="fa-solid fa-less-than"></i>`;

  dates.forEach((date) => {
    const day = date
      .toLocaleDateString("en-US", { weekday: "short" })
      .toLocaleUpperCase();
    let month = date
      .toLocaleString("en-us", { month: "long" })
      .toLocaleUpperCase();
    const dateNumber = date.getDate();

    dateTemplate += `
  <div class="booking_day" data-date="${date.toISOString()}">
  <p class="day">${day}</p>
  <p class="date">${dateNumber}</p>
  <p class="month">${month}</p>
    
   
  </div>
`;
  });

  dateTemplate += `<i class="fa-solid fa-greater-than"></i>`;
  datesContainerEl.innerHTML = dateTemplate;
};

getLiveEvents();

// =============================================TO DISPLAY TERMS AND CONDITION MODAL ==================================================================

const cut = document.getElementById("cut");
const termsandconditions = document.querySelector(".termsandconditions_body");
const cancelTermsAndConditions = document.querySelector(".cancel");
const accept = document.querySelector(".accept");
const time = document.querySelector(".movie_timing");
const chooseseatModal = document.querySelector(".chooseseats_body");
const theatrelocation = document.querySelector(".theatre_location");

theatrelocation.addEventListener("click", (e) => {
  if (e.target.classList.contains("booking_timing")) {
    currentTheatreName = e.target.classList[1];
    termsandconditions.style.display = "block";
  }
});

cut.addEventListener("click", () => {
  termsandconditions.style.display = "none";
});

cancelTermsAndConditions.addEventListener("click", () => {
  termsandconditions.style.display = "none";
});

accept.addEventListener("click", () => {
  termsandconditions.style.display = "none";
  chooseseatModal.style.display = "block";
});









// =============================================TO DISPLAY TERMS AND CONDITION MODAL ==================================================================

let seat = document.getElementById("one");
const seats = document.querySelectorAll(".seats");
const vechile = document.getElementById("vechile");
let chooseseats = document.querySelector(".chooseseats");
let count = 0;

chooseseats.addEventListener("click", (e) => {
  // console.log(e.target)
  if (e.target.innerText == "1") {
    vechile.src = "../IMAGES/bycycle.png";
  } else if (e.target.innerText == "2") {
    vechile.src = "../IMAGES/scooter.png";
  } else if (e.target.innerText == "3") {
    vechile.src = "../IMAGES/auto.png";
  } else if (e.target.innerText == "4") {
    vechile.src = "../IMAGES/minicar.png";
  } else if (e.target.innerText == "5") {
    vechile.src = "../IMAGES/car.png";
  } else {
    vechile.src = "../IMAGES/bus.png";
  }
});

const seatArr = [];

const handleSeat = (e) => {
  if (e.target.classList.contains("seats")) {
    if (seatArr.length > 0) {
      let selectedSeat = seatArr.shift();
      selectedSeat.classList.remove("seat_selected");
    }
    seatArr.push(e.target);
  }

  seatArr.forEach((ele) => {
    ele.classList.add("seat_selected");
  });
};

chooseseats.addEventListener("click", handleSeat);

// ===========================================FOR SELECTING NUMBER OF SEATS ==================================================

const seatToChoose_button_EL = document.querySelector(".seatToChoose_button");
seatsToBookEl.addEventListener("click", (e) => {
  let numSeats = e.target.innerText;
  sessionStorage.setItem("numSeats", numSeats);
});

seatToChoose_button_EL.addEventListener("click", function () {
  const url = `../HTML/seat.htmlHTML?id=${id}&theatreName=${currentTheatreName}`;

  // Navigate to the next page
  window.location.href = url;
});

// ===========================================FOR SELECTING NUMBER OF SEATS ==================================================

window.addEventListener("DOMContentLoaded", () => renderDetails());
