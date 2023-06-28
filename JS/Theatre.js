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
        <p><span>Home</span>&#8594<span>Movies in</span>&#8594<span>${original_title}</span></p>
      </div>
    `;
  direction.innerHTML = template3;
};

window.addEventListener("DOMContentLoaded", () => renderDetails());
