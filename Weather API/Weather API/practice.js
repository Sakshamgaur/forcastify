console.log("Hello World");

const API_KEY = "0674c600dd2a305db095c6a018b88b75";
// let lat = 15.7333;
// let lon = 121.1500;

function renderWeatherInfo(data) {
    let papa = document.createElement("p");
    papa.textContent = `${data?.main?.temp.toFixed(2)} °C`;

    document.body.appendChild(papa);
}

async function fetchWeatherDetails() {
    try {
        let city = "Goa";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        console.log(data);

        renderWeatherInfo(data);
    } 
    catch (error) {
        //handle the error
        console.log(error);
    }
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    
    console.log(lat);
    console.log(long);
}