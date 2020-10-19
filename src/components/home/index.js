import React from 'react'
import { connect } from 'react-redux'
import { fetchWeatherData } from '../../actions/homeActions'
import moon from './images/moon.jpg'
import sun from './images/sun.jpg'
import degree from './images/degree_symbol.svg'

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
            <div className="card home-card mb-3">
              <img className="card-img-top" src={this.props.isDayTime ? sun : moon} alt="Card image cap" />
              <div className="card-body">
                <h5 className="text-center">Temperature</h5>
                <p className="card-text text-center">{this.props.temperature.Imperial.Value}<img src={degree}/>{this.props.temperature.Imperial.Unit}</p>
                <p className="card-text text-center">{this.props.temperature.Metric.Value}<img src={degree}/>{this.props.temperature.Metric.Unit}</p>
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