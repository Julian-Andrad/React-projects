export function getDay(sunRise, timeZone) {
    let unix_timestamp = sunRise+timeZone
    let day = new Date(unix_timestamp*1000)
    let today = day.getDate()

    return(today)
}

export function getMonth(sunRise, timeZone) {
    let unix_timestamp = sunRise+timeZone
    let month = new Date(unix_timestamp*1000)

    let thisMonth = month.getMonth()


    switch (thisMonth) {
        case 0:
        return ("Janeiro");
        break;
        case 1:
        return ("Fevereiro");
        break;

        case 2:
        return ("Março");
        break;

        case 3:
        return ("Abril");
        break;

        case 4:
        return ("Maio");
        break;

        case 5:
        return ("Junho");
        break;

        case 6:
        return ("Julho");
        break;

        case 7:
        return ("Agosto");
        break;

        case 8:
        return ("Setembro");
        break;

        case 9:
        return ("Outubro");
        break;

        case 10:
        return ("Novembro");
        break;

        case 11:
        return ("Dezembro");
        break;

        default:
        return ("Error: not a valid month");
        break;
    }

}

export function getWeekDay(sunRise, timeZone) {
    let unix_timestamp = sunRise+timeZone
    let today = new Date(unix_timestamp*1000);
    let weekday = today.getUTCDay();

    switch (weekday) {
        case 0:
        return("Domingo");
        break;
        case 1:
        return("Segunda-feira");
        break;

        case 2:
        return("Terça-feira");
        break;

        case 3:
        return("Quarta-feira");
        break;

        case 4:
        return("Quinta-feira");
        break;

        case 5:
        return("Sexta-feira");
        break;

        case 6:
        return("Sábado");
        break;

        default:
        return("Error: not a valid weekday");
        break;
    }
};

export function SunCalc(timeStamp, timeZone) {
    let unix_timestamp = timeStamp+timeZone
    
    let UTCminutes = (new Date(unix_timestamp * 1000)).getUTCMinutes()
    let UTChours = (new Date(unix_timestamp * 1000)).getUTCHours()

    
    let hours = UTChours;
    
    let minutes = "0" + UTCminutes;
    
    let formattedTime = hours + ':' + minutes.substr(-2);
    
    return formattedTime
}

