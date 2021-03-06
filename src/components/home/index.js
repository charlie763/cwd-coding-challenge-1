import React from 'react'
import { connect } from 'react-redux'
import { fetchWeatherData } from '../../actions/homeActions'
import moon from './images/moon.jpg'
import sun from './images/sun.jpg'
import degree from './images/degree_symbol.svg'

// This class serves as both a container and presenter of data. For more complex applications,
// I would consider splitting up the two. It connects to the redux store, triggers the fetch action
// upon mounting, and then displays the data return by fetch (if there is data loaded).
class Home extends React.Component{
  componentDidMount(){
    this.props.fetchWeatherData()
  }

  render(){
    switch (this.props.loadStatus){
      case null:
        return <h4>Data Not Available</h4>
      case "pending":
        return <h4>Loading...</h4>
      case "complete":
        return(
          <div className="row justify-content-center py-3">
            <div className="card home-card mb-3 primary-background">
              <img className="card-img-top" src={this.props.isDayTime ? sun : moon} alt="sun or moon depending on time of day" />
              <div className="card-body">
                <h5 className="text-center">Temperature</h5>
                <p className="card-text text-center">
                  {this.props.temperature.Imperial.Value}<img className="degree-symbol" src={degree} alt="degree icon"/>{this.props.temperature.Imperial.Unit}
                </p>
                <p className="card-text text-center">
                  {this.props.temperature.Metric.Value}<img className="degree-symbol" src={degree} alt="degree icon"/>{this.props.temperature.Metric.Unit}
                </p>
                <p className="card-text text-center">{this.props.weather}</p>
                <h5 className="text-center">Last Updated: {this.props.updateTime}</h5>
              </div>
            </div>
          </div>
        )
      default:
        return <h4>Data Not Available</h4>
    }
  }
}

const mapStateToProps = state => ({
  isDayTime: state.isDayTime, 
  temperature: state.temperature, 
  weather: state.weather, 
  updateTime: state.updateTime,
  loadStatus: state.loadStatus
})

export default connect(mapStateToProps, { fetchWeatherData })(Home)