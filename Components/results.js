import React from "react";

export default function Results (props) {

    return (
        <article  className="Results">
            <section className="main-results">
                <div className="main-data-container">
                    <h2 className="location">{props.location}</h2>
                    <div className="temp-container">
                        <h1 className="temperature"> {props.temp} </h1>
                        {props.buttons}
                    </div>
                    <h2 className="description"> {props.desc} </h2>
                    <div className="date-container">
                        <h3 className="today">{props.weekDay}{props.day}{props.month}</h3>
                    </div>
                </div>
            </section>   
            <section className="secondary-results">
                <div className="feeling-container sec-cont">
                    <div className="feeling-box">
                        <h3 className="feeling-t">{props.feelT}</h3>
                        <h3 className="feeling">{props.feeling}</h3>
                    </div>
                </div>
                <div className="maxMin-container sec-cont">
                    <div className="MaxMin-box">
                        <h3 className="max">{props.max}</h3>
                        <h3 className="min">{props.min}</h3>
                    </div>
                </div>
                <div className="wind-container sec-cont">
                    <img className="wind-icon icon" alt='' src={props.windIcon}/>     
                    <h3 className="wind">{props.wind}</h3>
                </div>
                <div className="humidity-container sec-cont">
                    <div className="hum-icon-container">
                        <img className="hum-icon icon" alt='' src={props.humIcon}/>     
                        <h3 className="humidity">{props.humidity}</h3>
                    </div>
                </div>
                <div className="sunRiseSet-container sec-cont">
                    <div className="rise-cont">
                        <img className="sunRise-icon icon" alt=''src={props.riseIcon}/>  
                        <h3 className="sunRise">{props.sunRise}</h3>
                    </div>
                    <div className="set-cont">
                        <img className="sunSet-icon icon" alt=''src={props.setIcon}/> 
                        <h3 className="SunSet">{props.sunSet}</h3> 
                    </div>
                </div>
            </section>
        </article>
    )

    

    
}