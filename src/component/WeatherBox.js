import React from 'react'

const WeatherBox = ({weather}) => {
  console.log("weather?", weather)
  return (
    <div class = "weather-box">
      <div>{weather?.name || '날씨를 가져오는데 실패했습니다.'}</div>
      <h2>{weather && weather?.main.temp}도 / {Math.floor(weather && weather?.main.temp * 1.8 + 32)}화씨</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox
