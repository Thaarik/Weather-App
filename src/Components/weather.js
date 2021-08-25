import moment from 'moment';
import React from 'react';
import './weather.css'
import cloud from './Images/cloud.png'
import feellike from './Images/feellike.png'
import humidity from './Images/humidity.png'
import pressure from './Images/pressure.png'
import rain from './Images/rain.png'
import temphigh from './Images/temphigh.png'
import templow from './Images/templow.png'
// import day from './Images/sun-weather.gif'
// import night from './Images/night-weather.gif'
import sunrisegif from './Images/sunrise.png'
import sunsetgif from './Images/sunset.png'
const Weather = (props) => {
    const sunrise = new Date(props.sunrise*1000).toLocaleTimeString('en-IN')
    const sunset = new Date(props.sunset*1000).toLocaleTimeString('en-IN')
   
   const  time =moment().format('LLLL');
   const timeli=moment().format('LTS');
  console.log(timeli)
//   const begin = moment(timeli,'hh:mm:ss A');
//   const end = moment(sunrise,'hh:mm:ss A');

    return(
    <>
    <div className="container">
    <div className="time">{time}</div>
        <div class="temp-container">
        <div className="temp-info">
        <div class="temp-logo">
        {/* {
            (begin.isBetween(end,moment(sunset,'hh:mm:ss A')))
            ?<img src={day} alt=""/>
            :<img src={night} alt=""/>
            } */}
            <img src={`${process.env.REACT_APP_ICON_URL}/${props.icon}.png`} alt=""/>
            </div>
            <div class="temp-metrics">{props.temperature}&#186;C</div>
        </div>
        <div className="place-feel">
            <div className="place">{props.city}</div>
            <div className="feel">{props.main}</div>
        </div>
        </div>
        <div className="solar-details">
            <div className="sunrise">
            <div class="image-size"><img src={sunrisegif} alt=""/></div>
            <div><p>{sunrise}</p></div>
            </div>
            <div className="sunset">
            <div class="image-size"><img src={sunsetgif} alt=""/></div>
            <div><p>{sunset}</p></div>
            </div>
        </div>
        <div class="weather-info">
            <div className="div1">
                <p className="value">{props.feellike}</p>
                <img className="desp-img" src={feellike} alt=""/>
                <p className="descp">Feellike</p>
            </div>
            <div className="div2"> 
                <p className="value">{props.temphigh}</p>
                <img className="desp-img" src={temphigh} alt=""/>
                <p className="descp">Max. temp</p>
            </div>
            <div className="div3"> 
                <p className="value">{props.templow}</p>
                <img className="desp-img" src={templow} alt=""/>
                <p className="descp">Min. temp</p>
            </div>
            <div className="div4"> 
                <p className="value">{props.humidity}</p>
                <img className="desp-img" src={humidity} alt=""/>
                <p className="descp">Humidity</p>
            </div>
            <div className="div5"> 
                <p className="value">{props.pressure}</p>
                <img className="desp-img" src={pressure} alt=""/>
                <p className="descp">Pressure</p>
            </div>
            <div className="div6">
                <p className="value">{props.description}</p>
                <img className="desp-img" src={cloud} alt=""/>
                <p className="descp">Description</p>
            </div>
        </div>
        
    </div>
    </>
)
}

export default Weather;

/*(begin.isBefore(end) && begin.isAfter(moment(sunset)))*/