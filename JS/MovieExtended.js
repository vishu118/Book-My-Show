//Retrieving the id from url and storing in a variable called id
const id = new URLSearchParams(window.location.search).get("id");
//-----------------------------------------------------------------------------
import { getNavbar } from '../MODULES/navbarModule.js';
import { getFooter2 } from '../MODULES/footer2Module.js';
document.querySelector('.m_container').innerHTML = getNavbar();
document.querySelector('.m_footer2').innerHTML = getFooter2();


// Variable declerarion for hitting diffrent apis..................

const auth = "2e302e23979f60ced7d629e4168670c9";
const Api_key = "api_key=2e302e23979f60ced7d629e4168670c9";
const Base_Url = "https://api.themoviedb.org/3/";
const img_url = "https://image.tmdb.org/t/p/w500";
const Api_url = Base_Url + "/trending/movie/week?" + Api_key;
let moviesSimilar = Base_Url + "discover/movie?" + Api_key+"&sort_by=popularity.desc&page=2&primary_release_year=2022&with_original_language=hi";
let moviesYouMayLikeUrl = `${Base_Url}movie/${id}/similar?${Api_key}`



const renderMovieDetails = async()=>{
  const res = await fetch(`${Base_Url}movie/${id}?${Api_key}`); //========= Fetching Specific Movie Details using id
  const Data = await res.json();
   const {original_title, backdrop_path, vote_count, vote_average, runtime, release_date, overview, poster_path, genres,spoken_languages,production_companies,adult} = Data;    // destrucuturing data of specific movie using id;
   console.log(Data)
}

renderMovieDetails()


