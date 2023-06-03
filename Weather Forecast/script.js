const API_key = '547ce9cae097717245b375ca024431ed';


const userTab = document.querySelector('.userWeather');
const searchTab = document.querySelector('.searchWeather');
const access = document.querySelector('.accessBlock');
const display = document.querySelector('.displayBlock');
const search = document.querySelector('.searchBlock');
const gif = document.querySelector('.gifBlock');
const searchForm = document.querySelector('.searchForm');
const searchInput = document.querySelector("[data-searchInput]");



let currentTab = userTab;
currentTab.classList.add("currentTab");
display.classList.add("hidden");
search.classList.add("hidden");
gif.classList.add("hidden");

function switchTab(newTab){
    if(newTab!=currentTab){
        currentTab.classList.remove("currentTab");
        newTab.classList.add("currentTab");
        currentTab = newTab;
    }

    if(currentTab == userTab){
        display.classList.add("hidden");
        search.classList.add("hidden");
        accessLocation();
    }

    else if(currentTab == searchTab){
        access.classList.add("hidden");
        display.classList.add("hidden");
        search.classList.remove("hidden");
    }

}

function accessLocation()
{
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates)
    {
        access.classList.remove("hidden");
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates){
    const lat = coordinates.latitude;
    const lon = coordinates.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
    access.classList.add("hidden");
    gif.classList.remove("hidden");

    try{
        const response = await fetch(url);
        data = await response.json();

        display.classList.remove("hidden");
        gif.classList.add("hidden");

        renderWeatherInfo(data);
    }
    catch(err){
        console.log("Error : ", err);
    }
}


function renderWeatherInfo(data){
    const city = document.querySelector('.city');
    const flag = document.querySelector('.flag');
    const desc = document.querySelector('.desc');
    const desc_img = document.querySelector('.desc-img');
    const temp = document.querySelector('.temp');
    const w_desc = document.querySelector("[w-desc]");
    const h_desc = document.querySelector("[h-desc]");
    const c_desc = document.querySelector("[c-desc]");

    city.textContent = data?.name;
    flag.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
    desc.textContent = data?.weather[0]?.description.toUpperCase();
    desc_img.src = `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;

    temp.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    w_desc.textContent = `${data?.wind?.speed} m/s`;
    h_desc.textContent = `${data?.main?.humidity} %`;
    c_desc.textContent = `${data?.clouds?.all} %`;
}

userTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(searchTab);
});

const access_btn = document.querySelector('.access-btn');
access_btn.addEventListener('click', getLocation);

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);

    }
    else{
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position){
    const coordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    }
    sessionStorage.setItem("user-coordinates", JSON.stringify(coordinates));
    fetchUserWeatherInfo(coordinates);
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
        searchInput.value="";
})

async function fetchSearchWeatherInfo(cityName){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric`;
    access.classList.add("hidden");
    gif.classList.remove("hidden");
    display.classList.add("hidden");
    try{
        const response = await fetch(url);
        const data = await response.json();
        const city = data.name;
        gif.classList.add("hidden");
        
        display.classList.remove("hidden");
        renderWeatherInfo(data);
    }
    catch(err){
        console.log("Error : ", err);
        
    }   

}

















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
