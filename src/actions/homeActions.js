const BASE_URL = "http://dataservice.accuweather.com/currentconditions/v1/348308?apikey=BL84oxFsikLXeqZkAcPefEG8okzzcGzu&language=en-us"

function fetchWeatherData(){
  return dispatch => {
    dispatch({type: "START_FETCH"})
    fetch(BASE_URL)
      .then(resp => resp.json())
      .then(weatherData => dispatch({type: "LOAD_DATA", weatherData: weatherData[0]}))
  }
}

export { fetchWeatherData }