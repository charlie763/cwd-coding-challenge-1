import React from 'react';

class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            weatherData: null
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