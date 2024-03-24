import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setcity, handleCityChange}) => {
  console.log("cities", cities)
  return ( // map은 array 함수로 배열을 쓸 때 유용하다.
    <div>
      <Button
      variant={`${setcity == null ? "outline-warning" : "warning"}`}
      onClick={() => handleCityChange("current")} 
      >
        Current Location</Button>
      
      
      {cities.map((city) => (
        <Button 
          variant={`${setcity == null ? "outline-warning" : "warning"}`}
          onClick={() => handleCityChange(city)}
          >
            {city}</Button>
      ))} 
    </div>
  )
}

export default WeatherButton
