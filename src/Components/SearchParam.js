import axios from "axios";



const ApiParams = {
MapKey: `your OpenWeather API Key`,
unit: `metric`,
cnt: `7`,
lang: `pt_br`
}



function getCityData (searchText, setData) {
    let filteredName = searchText.replace(/\s+/g, " ");
    const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${filteredName}&appid=${ApiParams.MapKey}&cnt=3&units=${ApiParams.unit}&lang=${ApiParams.lang}`;
    axios.get(cityUrl).then(response => {
        setData(response.data)
    }).catch(()=> {
        setData(null)
    });
}



export {getCityData}
