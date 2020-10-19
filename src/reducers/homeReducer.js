function homeReducer(state = {
  isDayTime: null, 
  temperature: null, 
  weather: null, 
  updateTime: null,
  loadedStatus: null
  }, action){
    switch(action.type){
      case "START_FETCH":
        return {
          ...state,
          loadedStatus: "pending"
        }
      case "LOAD_DATA":
        const weatherText = action.weatherData.WeatherText
        const firstHalf = action.weatherData.HasPrecipitation ? "It is currently raining" : "It is currently not raining" 
        const secondHalf = `${weatherText[0].toLowerCase()}${weatherText.slice(1)}`

        const date = new Date(action.weatherData.LocalObservationDateTime)
        const hours = date.getHours()

        return {
          isDayTime: action.weatherData.IsDayTime,
          temperature: action.weatherData.Temperature,
          weather: firstHalf + ', and it is ' + secondHalf,
          updateTime: `${hours > 12 ? hours - 12 : hours}:${date.getMinutes()} ${hours > 11 ? 'PM' : 'AM'}`,
          loadStatus: "complete"
        }
      default:
        return state
    }

}

export default homeReducer


// Temperature: {Metric: {…}, Imperial: {…}}
//   Imperial: {Value: 49, Unit: "F", UnitType: 18}
//   Metric: {Value: 9.4, Unit: "C", UnitType: 17}
