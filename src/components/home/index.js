import React from 'react';

class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            weatherData: false
        }
    }

    fetchWeatherData = () => {
        fetch('http://dataservice.accuweather.com/currentconditions/v1/348308?apikey=BL84oxFsikLXeqZkAcPefEG8okzzcGzu&language=en-us')
            .then(r => r.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    weatherData: data[0]
                })
            })
    }

    weatherBox = () => {
        console.log(this.state.weatherData)
        let weather = this.state.weatherData

        if (weather){

            return(
                <div>
                    {this.DayOrNight(weather.IsDayTime)}
                    <h3>Last Updated: { this.weatherTimeTranlsator(weather.LocalObservationDateTime) }</h3>
                </div>
            )
        }
    }

    DayOrNight = bool => {
        if(bool){
            return <img src={require('./images/sun.jpg')} alt='placeholder' />
        } else if (!bool){
            return <img src={require('./images/moon.jpg')} alt='placeholer' />
        }
    }

    weatherTimeTranlsator = rawTime => {
        let time = rawTime.split('T')[1]
        time = time.split(':')
        let hour = time[0]
        let minute = time[1]

        if(hour <= 12){
            return `${hour}:${minute} AM`
        } else if (hour > 12){
            hour = hour - 12
            return `${hour}:${minute} PM`
        }
    }

    componentDidMount(){
        this.fetchWeatherData()
    }

    render(){
        return(
            <section>
                <h1>
                    This would be the Home!
                    { this.weatherBox() }
                </h1>
            </section>
        )
    }
}

export default Home;

// fetch('http://dataservice.accuweather.com/currentconditions/v1/348308?apikey=BL84oxFsikLXeqZkAcPefEG8okzzcGzu&language=en-us')
// .then(r => r.json())
// .then(json => console.log(json))