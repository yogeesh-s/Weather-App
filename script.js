const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd454b87305mshb18e25b00ebd7d5p1723c1jsn178ce65530b4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


async function fetchData() {
    let city = document.getElementById('city').value;
    if(city ==''){
        city = 'Bengaluru';
    }
    let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    try {
        const response = await fetch(url, options);
        if(response.status==200){
            const result = await response.text();
            const obj  = JSON.parse(result);
            console.log(obj);
            document.getElementById('location').innerHTML = city;
            document.getElementById('temp').innerHTML = obj.temp + ' &#176;C';
            document.getElementById('feels_like').innerHTML = obj.feels_like + ' &#176;C';
            document.getElementById('min_temp').innerHTML = obj.min_temp + ' &#176;C';
            document.getElementById('max_temp').innerHTML = obj.max_temp +' &#176;C';
            document.getElementById('humidity').innerHTML = obj.humidity + ' %';
            document.getElementById('cloud_pct').innerHTML = obj.cloud_pct;
            document.getElementById('wind_speed').innerHTML = obj.wind_speed + ' km/h';
            document.getElementById('wind_degrees').innerHTML = obj.wind_degrees + ' &#176';
            document.getElementById('sunrise').innerHTML = obj.sunrise;
            document.getElementById('sunset').innerHTML = obj.sunset;
            document.querySelector('.weather-report').style.display = 'flex';
            document.querySelector('.error-msg').style.display = 'none';
        }
        else{
            document.querySelector('.weather-report').style.display = 'none';
            document.querySelector('.error-msg').style.display = 'flex';
        }
        
    } catch (error) {
        document.querySelector('.weather-report').style.display = 'none';
        document.querySelector('.error-msg').style.display = 'flex';
    }
}

fetchData();

document.getElementById('search').addEventListener('click',fetchData)

