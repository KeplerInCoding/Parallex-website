const userWeather = document.querySelector('.userWeather');
const searchWeather = document.querySelector('.searchWeather');
let currentTab = userWeather;

searchWeather.addEventListener('click', () => {
    currentTab.classList.add('currentTab');
    userWeather.classList.remove('currentTab');
    currentTab = searchWeather;
});

userWeather.addEventListener('click', () => {
    currentTab.classList.add('currentTab');
    userWeather.classList.remove('currentTab');
    currentTab = userWeather;
});












// const API_key = '547ce9cae097717245b375ca024431ed';


// async function showWeather()
// {
//     try{
//         const city = 'goa';
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
//         const data = await response.json();
//         console.log("Wather data -> ", data);

//         let newPara=document.createElement('p');
//         newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
        
//         document.body.appendChild(newPara);
//     }
//     catch{
//         console.log("Error");
//     }

// }

// async function showWeather2()
// {
//     try{
//         const lat = 20;
//         const lon = 80;
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`);
//         const data = await response.json();
//         console.log("Wather data -> ", data);

//         // let newPara=document.createElement('p');
//         // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
        
//         // document.body.appendChild(newPara);
//         renderWeatherInfo(data);
//     }
//     catch(err){
//         console.log("Error : ", err);
//     }

// }

// function renderWeatherInfo(data)
// {
//         let newPara=document.createElement('p');
//         newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
        
//         document.body.appendChild(newPara);

// }
