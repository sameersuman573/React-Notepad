import React from 'react'
import { useState } from 'react'
import './Weather.css'
import search_icon from '../Icons/search.png'
import clear_icon from '../Icons/clear.png';
import cloud_icon from "../Icons/cloud.png";
import drizzle_icon from "../Icons/drizzle.png";
import rain_icon from "../Icons/rain.png";
import snow_icon from "../Icons/snow.png";
import wind_icon from "../Icons/wind.png";
import humididty_icon from "../Icons/humidity.png";
 

const Weather = () => {





let api_key = "e18bc677c6e5ea667272cc82311dee96"
const [wicon, setwicon] = useState(cloud_icon)


// creating a search function
const search = async () => {
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value === "")
     {
        return 0;
     }



//  how to get data form api
let url = (`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid= ${api_key}`)

let response = await fetch(url);
let data = await response.json();
// console.log(data)


const humidity = document.getElementsByClassName('humidity-percent')
const wind = docment.getElementsByClassName('wind-rate')
const tempreature = document.getElementsByClassName('weather-temp')
const location = document.getElementsByClassName('weather-location')



// check api data in json fromatter and find the keys where they are located
humidity[0].innerHTML = data.main.humidity+"%"  //concating
wind[0].innerHTML = Math.floor(data.wind.speed)+"km/h"
tempreature[0].innerHTML =  Math.floor(data.main.temp)+"c"
location[0].innerHTML = data.name





// To display icon
if(data.Weather[0].icon==="01d" || data.Weather[0].icon==="01n")
{
    setwicon(clear_icon)
}
else if(data.Weather[0].icon==="02d" || data.Weather[0].icon==="02n"){
    setwicon(cloud_icon)
}
else if(data.Weather[0].icon==="03d" || data.Weather[0].icon==="03n"){
    setwicon(drizzle_icon)
}
else if(data.Weather[0].icon==="04d" || data.Weather[0].icon==="04n"){
    setwicon(drizzle_icon)
}
else if(data.Weather[0].icon==="09d" || data.Weather[0].icon==="09n"){
    setwicon(rain_icon)
}
else if(data.Weather[0].icon==="10d" || data.Weather[0].icon==="10n"){
    setwicon(rain_icon)
}
else if(data.Weather[0].icon==="13d" || data.Weather[0].icon==="13n"){
    setwicon(snow_icon)
}


else{
    setwicon(clear_icon)
}



}







  return (
    <>
 <div className='container'>

<div className='top-bar'>
    <input type='text'
     className='cityInput'
     placeholder='enter your city'/>

    <div className='search-icon'>
        <img src={cloud_icon} alt='' />

        <div>
            <div className='weather-temp'></div>
            <div className='weather-location'></div>
            <div className='data-container'>

                <div className='element'>
                    <img src={humididty_icon} alt='' className='icon' />
                    <div className='data'>
                    <div className='humidity-percent'>64%</div>
                    <div className='text'>Humidity</div>
                    </div>
                </div>

                <div className='element'>
                    <img src={wind_icon} alt='' className='icon' />
                    <div className='data'>
                    <div className='wind-rate'>18kmp/h</div>
                    <div className='text'>wind speed</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
    </div>

    </>
  )
}
   


export default Weather