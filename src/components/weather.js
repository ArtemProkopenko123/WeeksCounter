import React from "react";

    const Weather = (props)=> (
        <div>
            { props.city && 
                <>
                    <p>Город: {props.city}, {props.country}</p>
                    <p>Температура: {props.temp} 'C</p>
                    <p>Восход солнца: {props.sunrise}</p>
                    <p>Закат: {props.sunset}</p>
                </>
            }
            <p>{props.error}</p>
        </div>
    );

export default Weather;