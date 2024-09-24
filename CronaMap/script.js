let btn = document.getElementById("btn");

//when starting time
const worldCases = () => {
  fetch("https://api.covid19api.com/summary")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   var content = document.querySelector(".data");

      //   var box = content.lastElementChild;
      //   while (box) {
      //     content.removeChild(box);
      //     box = content.lastElementChild;
      //   }

      const getData = data.Global;
      //   let d = document.querySelector(".data");
      let d = document.getElementById("data");
      d.innerHTML = `<div class="box">
                                <div class="head">
                                    <span>Covid-19 Cases in World</span>
                                </div>
                                <div class="total">
                                    <div><p>TotalConfirmed</p> ${getData.TotalConfirmed}</div>
                                    <div><p>TotalDeaths</p> ${getData.TotalDeaths}</div>
                                    <div><p>TotalRecovered</p> ${getData.TotalRecovered}</div>
                                </div>  
                                <div class="new">
                                    <div><p>NewConfirmed</p> ${getData.NewConfirmed}</div>
                                    <div><p>NewDeaths</p> ${getData.NewDeaths}</div>
                                    <div><p>NewRecovered</p> ${getData.NewRecovered}</div>
                                    </div>
                                </div>`;
    });
};

worldCases();

btn.addEventListener("click", () => {
  let text = document.getElementById("getText").value;
  console.log(text);

  if (text === "") {
    worldCases();
  } else {
    fetch("https://api.covid19api.com/summary")
      .then((covidData) => {
        return covidData.json();
      })
      .then((getData) => {
        console.log(getData);
        
        var content = document.querySelector(".data");

        var box = content.lastElementChild;
        while (box) {
          content.removeChild(box);
          box = content.lastElementChild;
        }

        var index = -1;
        for (var i = 0; i < 185; i++) {
          if (
            getData.Countries[i].Country.toLowerCase() == text.toLowerCase()
          ) {
            index = i;
            break;
          }
        }

        if (index == -1) {
          worldCases();
        }

        let data = document.querySelector(".data");
        data.innerHTML = `<div class="box">
                                <div class="head">
                                    <span>Covid-19 Cases in ${getData.Countries[index].Country}</span>
                                </div>
                                <div class="total">
                                    <div><p>TotalConfirmed</p> ${getData.Countries[index].TotalConfirmed}</div>
                                    <div><p>TotalDeaths</p> ${getData.Countries[index].TotalDeaths}</div>
                                    <div><p>TotalRecovered</p> ${getData.Countries[index].TotalRecovered}</div>
                                </div>
                                <div class="new">
                                <div><p>NewConfirmed</p> ${getData.Countries[index].NewConfirmed}</div>
                                <div><p>NewDeaths</p> ${getData.Countries[index].NewDeaths}</div>
                                <div><p>NewRecovered</p> ${getData.Countries[index].NewRecovered}</div>
                                </div>
                                </div>`;
      });
  }
});
