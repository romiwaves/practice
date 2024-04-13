const API_KEY = "11906fe33975ae246e4bf7b58e27c534"

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}5&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} \ ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("can't find you. no weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);