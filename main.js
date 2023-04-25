const api= {
    key: "3a704fe18811b82d0f572f17e285e67e",
    base: "https://api.openweathermap.org/data/2.5/"
};
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
btn.addEventListener("click", (event) => {
    event.preventDefault();
        if (event.type == "click") {
        getData(search.value);
    }
});

// function getInput (event) {
//     event.preventDefault();
//     if (event.type == "click") {
//         getData(search.value);
//         console.log(search.value);
//     }
// }

function getData () {
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
        .then(response => {
            return response.json();
        })
        .then(displayData)
}
function displayData(response) {
    console.log(response);
    if (response.cod === "404") {
        const error = document.querySelector(".error");
        error.textContent = "Please enter a valid city";
        search.value = "";
    }else {
        const city = document.querySelector(".city");
        city.textContent = `${response.name}, ${response.sys.country}`;
//
        const toDay = new Date();
        const date = document.querySelector(".date");
        date.textContent = dateFunction(toDay);
//
        const temp = document.querySelector(".temp");
        // response main
        temp.textContent = `Temp: ${Math.round(response.main.temp)}°C`;
//
        const weather = document.querySelector(".weather");
        // weather[].main
        weather.textContent = `Weather: ${response.weather[0].main}`;
        const tempRange = document.querySelector(".temp-range");
        tempRange.textContent = `TempRange ${Math.round(response.main.temp_min)}°C / ${Math.round(response.main.temp_max)}°C`;
//
        const weatherIcon = document.querySelector(".weather-icon");
        const iconURL = "http://openweathermap.org/img/w/";
        weatherIcon.src = iconURL + response.weather[0].icon + ".png";

search.value = "";
    }
}
function dateFunction (data) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day = days[data.getDay()];
    // console.log(day);
    let date = data.getDate();
    // console.log(date);
    let month = months[data.getMonth()];
    // console.log(month);
    let year = data.getFullYear();
    // console.log(year);
    return `${day}, ${date} ${month} ${year}`;
}
// function dateFunction (data) {
//     let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
//     let day = days[data.getDay()];
//     console.log(day);
//     let date = data.getDate();
//     console.log(date);
//     let month = months[data.getMonth()];
//     console.log(month);
//     let year = data.getFullYear();
//     console.log(year);

//     return `${day}, ${date} ${month} ${year}`;
// }
// const toDay = new Date();
// dateFunction(toDay);






















