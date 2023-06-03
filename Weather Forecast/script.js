const userTab = document.querySelector('.userWeather');
const searchTab = document.querySelector('.searchWeather');
let currentTab = userTab;
currentTab.classList.add("currentTab");
currentTab.classList.add("hov");

function switchTab(newTab){
    if(newTab!=currentTab){
        currentTab.classList.remove("currentTab");
        newTab.classList.add("currentTab");
        currentTab = newTab;
    }

}

userTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(searchTab);
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
