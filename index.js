function showWeather(param) {
    let input = document.getElementById("city")
    getWeather(input.value,param)
    // getWeather()
}
async function getWeather(city,param){
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0fb9792b5cmsh6ae5c9c9b654951p145b3ajsne2c66256898e',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	if(param=="temp"){displayData("Temperature",result.main.temp)}
    else if(param=="humidity"){displayData("Humidity",result.main.humidity)}
    else if(param=="weather"){displayData("Weather",result.weather[0].description)}
    else if(param=="pressure"){displayData("Pressure",result.main.pressure)}
    else {displayData("Wind Speed",result.wind.speed)}
  
} catch (error) {
	console.error(error);
}
}

function displayData(label,data){
    let container=document.getElementById("main")
    container.innerHTML=`
    <p>${label}  :  ${data}</p>
    `
}