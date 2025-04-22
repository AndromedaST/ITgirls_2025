let searchButton = document.querySelector("#search")

//event listener ->button -> function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynch.function to fetch data from the API.
async function sendApiRequest(){
  let API_KEY = "TMpVcHaih0idG610xDidxahJnByIOOpn410kzJIX";
  let astroDate = new Date(document.getElementById("astroDate").value)
  const apiDate = `${astroDate.getFullYear()}-${astroDate.getMonth()+1}-${astroDate.getDate()}`
  console.log(apiDate);
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${apiDate}`);
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}


//function that takes data from json
function useApiData(data) {
document.getElementById("APItitle").innerHTML = data.title;
document.querySelector("#content").innerHTML += data.explanation;
document.querySelector("#astroImage").setAttribute("src", data.url)
}
