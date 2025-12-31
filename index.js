function showWeather() {
    let input = document.getElementById("city")
    getWeather(input.value)
    // getWeather()
}
async function getWeather(city){
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
	displayData(result.main.temp)
  console.log(result);
  console.log(result.main.temp);
  
} catch (error) {
	console.error(error);
}
}

function displayData(data){
    let container=document.getElementById("main")
    container.innerHTML=`
    <p>TEMPARATURE : ${data}</p>
    `
}