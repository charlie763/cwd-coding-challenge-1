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
      // For the LOAD DATA case I chose to handle much of the formatting of the data here. For more complex applications, I would leave the data more as is and handle the formatting within the components or in utility functions.
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