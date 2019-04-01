import React from "react";

import Form from "./form";
import Weather from "./weather";

const API_KEY = "d71586ca5adf23b67b122710f48d2d7f";

class Info extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    getWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        
        const api_url = await 
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();

        if(city && data.cod !== '404'){
            
            let sunset = data.sys.sunset;
            let date = new Date();
            date.setTime(sunset);
            let sunsetDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: data.sys.sunrise,
                sunset: sunsetDate,
                error: undefined
            });
        } else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: "Введите название города"
            });
        }
    }

    render() {
        return (

            <div className="row">
                <div className="col-12 text-center">
                <h2>Погодное приложение</h2>
                <p>Узнай погоду в вашем городе</p>
                </div>
                <div className="col-12 text-center">
                    <Form weatherMethod={this.getWeather} />
                    <br/>
                    <Weather 
                    
                        temp={this.state.temp}
                        city={this.state.city}
                        country={this.state.country}
                        sunrise={this.state.sunrise}
                        sunset={this.state.sunset}
                        error={this.state.error}
                    />
                </div>
            </div>
        );
    }
}


export default Info;