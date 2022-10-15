import {ReactComponent as Clear} from './shared/icons/day.svg'
import {ReactComponent as Cloudy} from './shared/icons/cloudy-day-1.svg'
import {ReactComponent as Mist} from './shared/icons/mist.svg'
import {ReactComponent as Frost} from './shared/icons/frost.svg'
import {ReactComponent as Rainy1} from './shared/icons/rainy-4.svg'
import {ReactComponent as Rainy2} from './shared/icons/rainy-5.svg'
import {ReactComponent as Rainy3} from './shared/icons/rainy-6.svg'
import {ReactComponent as Rainy4} from './shared/icons/rainy-7.svg'
import {ReactComponent as Thunder} from './shared/icons/thunder.svg'
import {ReactComponent as Snow1} from './shared/icons/snowy-4.svg'
import {ReactComponent as Snow2} from './shared/icons/snowy-5.svg'
import {ReactComponent as Snow3} from './shared/icons/snowy-6.svg'
export const weatherCode = [
    {
        code:0,
        name:'чистое небо',
        icon:<Clear/>
    },
    {
        code:1,
        name:'ясно',
        icon:<Clear/>
    },
    {
        code:2,
        name:'преимущественно ясно',
        icon:<Clear/>
    },
    {
        code:3,
        name:"переменная облачность",
        icon:<Cloudy/>
    },
    {
        code:45,
        name:'туман',
        icon:<Mist  />
    },
    {
        code:48,
        name:'изморозь',
        icon:<Frost/>
    },
    {
        code:51,
        name:'морось легкой интенсивности',
        icon:<Rainy4/>
    },{
        code:53,
        name:'морось умеренной интенсивности',
        icon:<Rainy4/>
    },
    {
        code:55,
        name:'морось плотной интенсивности',
        icon:<Rainy4/>
    },
    {
        code:56,
        name:'ледяная морось легкой интенсивности',
        icon:<Rainy4/>
    },
    {
        code:57,
        name:'ледяная морось плотной интенсивности',
        icon:<Rainy4/>
    },
    {
        code:61,
        name:'слабый дождь',
        icon:<Rainy1/>
    },
    {
        code:63,
        name:'умеренный дождь',
        icon:<Rainy2/>
    },
    {
        code:65,
        name:'сильный дождь',
        icon:<Rainy3/>
    },
    {
        code:66,
        name:'легкий ледянной дождь',
        icon:<Rainy3/>
    },
    {
        code:67,
        name:'сильынй ледянной дождь',
        icon:<Rainy3/>
    },
    {
        code:71,
        name:'легкий снегопад',
        icon:<Snow3/>
    },
    {
        code:73,
        name:'умеренный снегопад',
        icon:<Snow3/>
    },
    {
        code:75,
        name:'сильный снегопад',
        icon:<Snow3/>
    },
    {
        code:77,
        name:'снежные зерна',
        icon:<Snow3/>
    },
    {
        code:80,
        name:'слабые ливневые дожди',
        icon:<Rainy3/>
    },
    {
        code:81,
        name:'умеренные ливневые дожди',
        icon:<Rainy3/>
    },
    {
        code:82,
        name:'сильные Ливневые дожди',
        icon:<Rainy3/>
    },
    {
        code:85,
        name:'слабый снег',
        icon:<Snow1/>
    },
    {
        code:86,
        name:'сильный снег',
        icon:<Snow2/>
    },
    {
        code:95,
        name: 'гроза',
        icon:<Thunder/>
    },
    {
        code:96,
        name:'гроза со слабым градом',
        icon:<Thunder/>
    },
    {
        code:99,
        name:'гроза со сильным градом ',
        icon:<Thunder/>
    },
]