//mapbox accesstoken 
mapboxgl.accessToken =
  "pk.eyJ1IjoianAtbWFwLXdvcmxkIiwiYSI6ImNreXBsb3RuZDBiNmYybm8xdnBtdXJwcDEifQ.ItJr1JjUfS4X0Ciz0ZHr3Q";

// float the map 
// center : draw map accroding to center
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/outdoors-v11",
  center: [0, 0],
  zoom: 1,
});

//navigation control 
// zooming and show direction
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, "bottom-right");    //change the string like top-left or bottom-right or top-right 

//given endpoint extrect the countrycode,latitude and longitude 
//return the array of countrycode and [latitude , longitude]
const getCcll = async () => {

  //End Point :  https://restcountries.com/v3.1/all
  const res = await fetch("https://restcountries.com/v3.1/all");

  const data = await res.json();

  const arr = [];
  data.forEach((e) => {
    arr.push({ cc: e.cca2, latlng: e.latlng });
  });
  return arr;
};

//given key value return latitude and longitude
const findll = (arr, key) => {
  const ll = [];
  arr.map((e) => {
    if (e.cc === key) {
      ll.push(e.latlng[0]);
      ll.push(e.latlng[1]);
      return ll;
    }
  });

  return ll;
};

// end point : https://api.covid19api.com/summary
//one object data from given api to show the all informatation 
/*
  "ID": "a6c2a194-eac7-4866-83fc-ce8e87bdc2c9",
  "Country": "Afghanistan",
  "CountryCode": "AF",
  "Slug": "afghanistan",
  "NewConfirmed": 23,
  "TotalConfirmed": 207262,
  "NewDeaths": 0,
  "TotalDeaths": 7845,
  "NewRecovered": 0,
  "TotalRecovered": 0,
  "Date": "2022-12-24T12:47:41.018Z",
  "Premium": {}
*/

//fetch all the country information about covid cases 
const fetchData = async() =>{
  try{
    
    const res = await fetch("https://api.covid19api.com/summary");
    const data = await res.json();
    const country = data.Countries.filter((e) => e.CountryCode !== 'BS');
    return country;
  }catch(err){
    console.log(err);
  }
}

//to show the covid cases into world map using with marker and popslide 
const showCases = async () => {
  try {
    const arr = await getCcll();
    console.log(arr);

    // console.log(country.)
    const country = await fetchData();

    country.forEach(async(element)=>{

      // console.log(e.Country);
      const cc = element.CountryCode;
      // console.log(cc)

      const [lat, lng] = findll(arr, cc);
      // console.log(lat,lng);

      // here change with marker color through the frequency of the cases
        let color = "";
        if (element.NewConfirmed < 1000) {
          color = "rgb(108, 241, 241)"; //light blue 
        } else if (element.NewConfirmed > 1000 && element.NewConfirmed < 5000) {
          color = "rgb(122, 245, 153)"; //green 
        } else if (element.NewConfirmed > 5000 && element.NewConfirmed < 10000) {
          color = "rgb(71, 145, 206)";  //blue
        } else if (element.NewConfirmed > 10000 && element.NewConfirmed < 50000) {
          color = "rgb(192, 56, 226)";  //purpule
        } else if (element.NewConfirmed > 50000) {
          color = "rgb(228, 36, 36)";   //red
        }

        //show the marker 
        const marker = new mapboxgl.Marker({
          color: color,
          draggable: false,
        })
          .setLngLat([lng, lat]) //draw the / float the marker using with latitude and longitude

          //showing small slide given information 
          .setPopup(          
            new mapboxgl.Popup().setHTML(`<p>${element.Country}</p>
          <p>Totel Cases : ${element.TotalConfirmed}</p>
          <p>Today Cases : ${element.NewConfirmed}</p>
          <p>Totel Deaths : ${element.TotalDeaths}</p>
          <p>Today deaths : ${element.NewDeaths}</p> `)
          )
          .addTo(map);  //add marker and slide into the map 
    })
  } catch (err) {
    console.log(err);
  }
};

//call above method 
showCases();

