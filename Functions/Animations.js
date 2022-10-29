import brokenD from '../imgs/brokenD.svg'
import brokenN from '../imgs/brokenN.svg'
import clear from '../imgs/clear.svg'
import cloudy from '../imgs/cloudy.svg'
import mistD from '../imgs/mistD.svg'
import mistN from '../imgs/mistN.svg'
import partlyClear from '../imgs/partlyClear.svg'
import partlyCloudy from '../imgs/partlyCloudy.svg'
import showerRain from '../imgs/rainAnim.svg'
import rainD from '../imgs/rainD.svg'
import rainN from '../imgs/rainN.svg'
import snowD from '../imgs/snowD.svg'
import snowN from '../imgs/snowN.svg'
import sunny from '../imgs/sunny.svg'
import thunderD from '../imgs/thunderD.svg'
import thunderN from '../imgs/thunderN.svg'

const sunnyBg = 'linear-gradient(0deg, rgba(199,241,250,1) 8%, rgba(119,195,224,1) 94%)';
const clearBg = 'linear-gradient(0deg, rgba(74,92,187,1) 0%, rgba(9,20,66,1) 100%)';
const dDarkBg = 'linear-gradient(0deg, rgba(220,230,232,1) 8%, rgba(118,121,129,1) 94%)';
const nDarkBg = 'linear-gradient(0deg, rgba(54,54,54,1) 0%, rgba(19,25,41,1) 100%)';
const thunderBg = 'linear-gradient(0deg, rgba(48,48,48,1) 0%, rgba(0,8,42,1) 100%)';



export function handleAnim (dataIcon) {
    let icone = dataIcon;
    let anim = '';
    let background = '';
    
        if(icone === '01d') {
            background = (sunnyBg)
            anim = (sunny) 
        }
        if(icone === '01n') {
            background = (clearBg)
            anim = (clear);
        }
        if(icone === '02d') {
            background = (sunnyBg)
            anim =(partlyCloudy);
        }
        if(icone === '02n') {
            background = (clearBg)
            anim =(partlyClear);
        }
        if(icone === '03d') {
            background = (sunnyBg)
            anim = (cloudy);
        }
        if(icone === '03n') {
            background = (clearBg)
            anim =(cloudy);
        }
        if(icone === '04d') {
            background = (dDarkBg)
            anim = (brokenD);
        }
        if(icone === '04n') {
            background = (nDarkBg)
            anim = (brokenN);
        }
        if(icone === '09d') {
            background = (dDarkBg)
            anim = (showerRain);
        }
        if(icone === '09n') {
            background = (nDarkBg)
            anim = (showerRain);
        }
        if(icone === '10d') {
            background = (dDarkBg)
            anim = (rainD);
        }
        if(icone === '10n') {
            background = (nDarkBg)
            anim = (rainN);
        }
        if(icone === '11d') {
            background = (thunderBg)
            anim = (thunderD);
        }
        if(icone === '11n') {
            background = (thunderBg)
            anim = (thunderN);
        }
        if(icone === '13d') {
            background = (dDarkBg)
            anim = (snowD);
        }
        if(icone === '13n') {
            background = (nDarkBg)
            anim = (snowN);
        }
        if(icone === '50d') {
            background = (dDarkBg)
            anim = (mistD)
        }
        if(icone === '50n') {
            background = (nDarkBg)
            anim = (mistN);
        }

    return {animation:anim, bg:background}
}
