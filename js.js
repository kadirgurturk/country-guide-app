let searchBtn = document.getElementById("serach-btn");
let countryInp = document.querySelector("#input");
let result = document.querySelector(".result");

searchBtn.addEventListener("click", () =>{
    let countryName = countryInp.value;
    let finalurl = `https://restcountries.com/v3.1/name/${countryName}`;
    fetch(finalurl).then((response) => response.json())
    .then((data) =>{
        console.log(data[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(Object.values(data[0].languages).toString());

        result.innerHTML = `
            <img src= "${data[0].flags.svg}" class="flag-img">         
            <div class ="wrapper">
            <h2> ${data[0].name.common}</h2>
                <div class="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span>                   
                </div>
                <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>                   
            </div>
            <div class="data-wrapper">
            <h4>Population:</h4>
            <span>${data[0].population}</span>
            </div>
            <div class="data-wrapper">
            <h4>Language:</h4>
            <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>                     
        </div>
            </div>
        `
    })
})

