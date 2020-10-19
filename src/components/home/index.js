import React from 'react'
import { connect } from 'react-redux'
import { fetchWeatherData } from '../../actions/homeActions'

class Home extends React.Component{
  componentDidMount(){
    this.props.fetchWeatherData()
  }

  render(){
    return(
      <div>Home</div>
    )
  }
}

export default connect(null, { fetchWeatherData })(Home)