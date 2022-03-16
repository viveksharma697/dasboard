// Declaring the variables
let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            // lon = position.coords.longitude;
            // lat = position.coords.latitude;
            lat = 31.1048145;
            lon = 77.1734033;

            // API ID
            const api = "421c8e1483632fdb531839c61cf8a5db";

            // API URL
            const base =
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
            `lon=${lon}&appid=421c8e1483632fdb531839c61cf8a5db`;

            // Calling the API
            fetch(base)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    temperature.textContent =
                        Math.floor(data.main.temp - kelvin) + "°C";
                    summary.textContent = data.weather[0].description;
                    loc.textContent = data.name + "," + data.sys.country;
                    let icon1 = data.weather[0].icon;
                    icon.innerHTML =
                        `<img src="icons/${icon1}.svg" style= 'height:rem'/>`;
                        
                });
        });
    }
});
