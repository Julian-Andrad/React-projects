import React, {useState, useEffect, useRef} from "react";
import Form from "./form"
import Results from "./results";
import {getCityData} from './SearchParam'
import {getDay , getMonth, getWeekDay, SunCalc} from "../Functions/DateFuncs";
import { handleAnim } from "../Functions/Animations";
import windIc from '../imgs/wind.svg'
import humidityIc from '../imgs/humidity.svg'
import sunrise from '../imgs/sunrise.svg'
import sunset from '../imgs/sunset.svg'


export default function Main () {

const [searchText, setSearchText] = useState('Brasilia');
const [cityData, setCityData] = useState()
const [dateValues, setDateValues] = useState({});
const [backgroundAnim, setBackgroundAnim] = useState({});
const [buttons, setButtons] = useState({btnCicle:'row', Cbtn:'main-btn', Fbtn:'secondary-btn'});
let inputEl = useRef("");


useEffect(()=> {
    getCityData(searchText, setCityData)
    setButtons(prevBtns=> {
            return {
                ...prevBtns,
            btnCicle:'row',
            Cbtn:'main-btn',
            Fbtn:'secondary-btn'
        }
        }
            )
    
    }, [searchText])

useEffect(()=>{
    if (cityData) {
        setDateValues(()=>{
            return {
            weekDay:getWeekDay(cityData.sys.sunrise, cityData.timezone),
            month:getMonth(cityData.sys.sunrise, cityData.timezone),
            day:getDay(cityData.sys.sunrise, cityData.timezone)
            }
        }) 
        let effects = handleAnim(cityData.weather[0].icon)
        setBackgroundAnim(()=> {
            return {
            anim: effects.animation,
            color: effects.bg
            }})
    }
    }, [cityData])


    const onClickHandler = (e) => {
        e.preventDefault()
        setSearchText(inputEl.current.value)
    }

    function handleToC () {
        setCityData(current => {
            return {
                ...current,
                main: {
                    ...current.main,
                    temp:(cityData.main.temp-32)*(5/9),
                    feels_like:(cityData.main.feels_like-32)*0.56 ,
                    temp_max:(cityData.main.temp_max-32)*0.56,
                    temp_min:(cityData.main.temp_min-32)*0.56
                }
            }
        })
        setButtons(prevBtns=> {
            return {
                ...prevBtns,
            btnCicle:'row',
            Cbtn:'main-btn',
            Fbtn:'secondary-btn'
        }
        }
            )
    }
    
    function handleToF () {
        setCityData(current => {
                        return {
                            ...current,
                            main: {
                                ...current.main,
                                temp:cityData.main.temp*(9/5)+32,
                                feels_like: cityData.main.feels_like*1.8+32,
                                temp_max:cityData.main.temp_max*1.8+32,
                                temp_min:cityData.main.temp_min*1.8+32
                            }
                        }
                        
        })
        setButtons(prevBtns => {
            return {
            ...prevBtns,
            btnCicle:'row-reverse',
            Cbtn:'secondary-btn',
            Fbtn:'main-btn'
        }}
            )
        
    }
    

    return (
    <main  style={{background:backgroundAnim.color}} className="main-container">
        <Form
        ref={inputEl}
        onClick={onClickHandler}
        />
        <img src={backgroundAnim.anim} className='AnimBG' alt=''></img>

        <Results
        location={cityData? cityData.name+', '+cityData.sys.country: 'Dados não encontrados'}

        temp={cityData? Math.round(cityData.main.temp):''}

        buttons={cityData? <div style={{display:'flex',
        flexDirection: buttons.btnCicle,
        alignItems:'center'}}>
            <button className={buttons.Cbtn} onClick={handleToC}>°C</button>
            <button className={buttons.Fbtn} onClick={handleToF}>°F</button>
        </div>:''}
        
        desc={cityData? cityData.weather
        [0].description.charAt(0).toUpperCase()+cityData.weather
        [0].description.slice(1):'Verifique e tente novamente'}

        feelT={cityData? 'Sensação: ': 'Sensação: '}Data
        feeling={cityData? Math.round(cityData.main.feels_like): ''}

        max={cityData? 'Máx: '+Math.round(cityData.main.temp_max):'Máx'}
        min={cityData? 'Mín: '+Math.round(cityData.main.temp_min):'Mín'}

        windIcon={cityData? windIc : windIc}
        wind={cityData? cityData.wind.speed+' m/s':''}

        humIcon={cityData? humidityIc:humidityIc}
        humidity={cityData? cityData.main.humidity:''}

        riseIcon={cityData? sunrise : sunrise}
        sunRise={cityData? SunCalc(cityData.sys.sunrise, cityData.timezone
            ) : ''}
        setIcon={cityData? sunset : sunset}
        sunSet={cityData? SunCalc(cityData.sys.sunset, cityData.timezone): ''}

        weekDay={cityData && dateValues.weekDay+', '}
        day={cityData &&( dateValues.day+' de ')}
        month={cityData && (dateValues.month)}
        />
    </main>
    )

}



