function homeReducer(state = {
  dayOrNight: null, 
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
      default:
        return state
    }

}

export default homeReducer