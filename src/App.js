import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';

import Weather from './Components/weather'

function App() {
  const [latitude,setLatitude]= useState('');
  const [longitude,setLongitude] = useState('');
  const [city,setCity]=useState('');
  const [temperature,setTemperature]=useState('');
  const [sunrise,setSunrise]=useState('');
  const [sunset,setSunset]=useState('');
  const [humidity,setHumidity]=useState('');
  const [pressure,setPressure]=useState('');
  const [main,setMain]=useState('');
  const [description,setDescription]=useState('');
  const [templow,setTemplow]=useState('')
  const [temphigh,setTemphigh]=useState('')
  const [feellike,setFeellike]=useState('')
const [icon,setIcon]=useState('')
  //to fetch our current geo location
  
  useEffect(() => {
   navigator.geolocation.getCurrentPosition((position)=>{
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
   },()=>{
     console.log('please allow location')
   });

   axios.get(`${process.env.REACT_APP_API_URL}/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
   .then((result)=>{
     console.log(result)
    setCity(result.data.name)
    setTemperature(result.data.main.temp)
    setSunrise(result.data.sys.sunrise)
    setSunset(result.data.sys.sunset)
    setHumidity(result.data.main.humidity)
    setPressure(result.data.main.pressure)
    setMain(result.data.weather[0].main)
    setDescription(result.data.weather[0].description)
    setTemplow(result.data.main.temp_min)
    setTemphigh(result.data.main.temp_max)
    setFeellike(result.data.main.feels_like)
    setIcon(result.data.weather[0].icon);
    
   })
  }, [latitude,longitude])
  console.log(city)
  console.log(temperature)
  console.log(new Date(sunrise*1000).toLocaleTimeString('en-IN'))
  console.log(new Date(sunset*1000).toLocaleTimeString('en-IN'))
  console.log(humidity)
  console.log(pressure)
  console.log(main)
  console.log(description)
  console.log(templow)
  console.log(temphigh)
  console.log(feellike)
  return (
<>
<main>
<Weather city={city} temperature={temperature} sunrise={sunrise}
  sunset={sunset} humidity={humidity} pressure={pressure}
  main={main} description={description} templow={templow} temphigh
={temphigh} feellike={feellike} icon={icon}/>
</main>

</>

  );
}

export default App;
