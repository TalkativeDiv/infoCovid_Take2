const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const BASE_URL = "https://corona.lmao.ninja/v2/";
const dlgCountry = document.getElementById("dlgCountry");
const year = document.querySelector(".year");
internationalNumberFormat = new Intl.NumberFormat("en-US");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

//functions
let getapi = async (url) => {
  // Storing response
  const response = await fetch(url);
  // Storing data in form of JSON
  var data = await response.json();
  showCovidData(data);
};
let showCovidData = (data) => {
  let tab = `<tr>
			<thead class = "noShadow">
			<tr>
				<th style="width:25%;"><i class="fas fa-suitcase-rolling"></i> Cases</th>
				<th  style="width:25%;"><i class="fas fa-briefcase"></i> Today's Cases</th>
				<th style="width:25%;"><i class="fas fa-skull-crossbones"></i> Deaths</th>
				<th style="width:25%;"><i class="fas fa-thumbs-up"></i> Recovered</th>
				</tr>
				</thead>
			 </tr>`;
  tab += `<tr> 

	<tr class = "hoverable">
	<td >${internationalNumberFormat.format(data.cases)} </td>
	<td>${internationalNumberFormat.format(data.todayCases)}</td>
	<td >${internationalNumberFormat.format(data.deaths)}</td> 
	<td>${internationalNumberFormat.format(data.recovered)}</td> </tr>

				 
					 
	 </tr>`;
  // Setting innerHTML to the tab variable
  document.getElementById("covidResults").innerHTML = tab;
};
document.addEventListener("DOMContentLoaded", getapi(BASE_URL + "all"));

dlgCountry.addEventListener("change", () => {
  const url = BASE_URL + dlgCountry.value;
  // Calling that  function
  getapi(url);
});
