import React from 'react'
import { connect } from 'react-redux'
import { fetchWeatherData } from '../../actions/homeActions'
import moon from './images/moon.jpg'
import sun from './images/sun.jpg'

class Home extends React.Component{
  componentDidMount(){
    this.props.fetchWeatherData()
  }

  render(){
    return(
      <div className="row justify-content-center py-3">
        <div className="card home-card">
          <img className="card-img-top" src={moon} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { fetchWeatherData })(Home)