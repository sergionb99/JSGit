function showweatherDetails (event){
    event.preventDefault();
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    const apiKey = '66dc2c15422d32880985cfd08a561b89';
    const apiURL= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in: ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp}</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
            alert('Working');
        })
        .catch(error => {
            console.error(`Error fetching the weather: `, error);
            const weatherInfo = document.getElementById(weatherInfo);
            weatherInfo.innerHTML = '<p>Error fetching the weather<p>';
        })
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails);