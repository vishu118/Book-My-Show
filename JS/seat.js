
const id = new URLSearchParams(window.location.search).get("id");
const theatreName = new URLSearchParams(window.location.search).get("theatreName");
console.log(theatreName)


let Api_key = "api_key=57b428c0e112b579eb26e2f43ff08b0f"
let Base_Url = "https://api.themoviedb.org/3/"
let movieUrl = `${Base_Url}movie/${id}?${Api_key}`


const renderDetails = async () => {
  let res = await fetch(movieUrl)
  let movieData = await res.json()
  

  let res1 = await fetch("../JSON/theatre.json")
  let theatreData = await res1.json();
  let theatreDetail = theatreData.theatres
  
  
 let nameOfTheatre = "";
 
  for( let i = 0 ; i < theatreDetail.length ; i++){
    console.log(theatreDetail[i].id)
  if(theatreDetail[i].id == theatreName)
     nameOfTheatre = theatreDetail[i].theatreName;
  }
console.log(nameOfTheatre)
 
};
renderDetails()