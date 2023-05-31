const API_key = '547ce9cae097717245b375ca024431ed';
const city = 'goa';

async function showWeather()
{
    const response = await fetchAPI(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
    const data = await response.json();
    console.log("Wather data -> " + data);
}
