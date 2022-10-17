import { ReactComponent as Clear } from '../icons/day.svg';
import { ReactComponent as Cloudy } from '../icons/cloudy.svg';
import { ReactComponent as Mist } from '../icons/mist.svg';
import { ReactComponent as Frost } from '../icons/frost.svg';
import { ReactComponent as Rainy1 } from '../icons/rainy-4.svg';
import { ReactComponent as Rainy2 } from '../icons/rainy-5.svg';
import { ReactComponent as Rainy3 } from '../icons/rainy-6.svg';
import { ReactComponent as Rainy4 } from '../icons/rainy-7.svg';
import { ReactComponent as Thunder } from '../icons/thunder.svg';
import { ReactComponent as Snow1 } from '../icons/snowy-4.svg';
import { ReactComponent as Snow2 } from '../icons/snowy-5.svg';
import { ReactComponent as Snow3 } from '../icons/snowy-6.svg';
import { getStartAndEndDate } from 'shared/utils';
export const weatherCode = [
  {
    code: 0,
    name: 'чистое небо',
    icon: (className: string = '') => (
      <Clear className={` w-[50px] h-[50px] fill-yellow-400 stroke-yellow-400 ${className}`} />
    ),
  },
  {
    code: 1,
    name: 'ясно',
    icon: (className: string = '') => (
      <Clear className={` w-[50px] h-[50px] fill-yellow-400 stroke-yellow-400 ${className}`} />
    ),
  },
  {
    code: 2,
    name: 'преимущественно ясно',
    icon: (className: string = '') => (
      <Clear className={` w-[50px] h-[50px] fill-yellow-400 stroke-yellow-400 ${className}`} />
    ),
  },
  {
    code: 3,
    name: 'переменная облачность',
    icon: (className: string = '') => (
      <Cloudy className={`w-[50px] h-[50px] stroke-blue-500 fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 45,
    name: 'туман',
    icon: (className: string = '') => <Mist className={`${className} stroke-gray-500  w-[50px] h-[50px]`} />,
  },
  {
    code: 48,
    name: 'изморозь',
    icon: (className: string = '') => <Frost className={`stroke-blue-500 ${className} w-[50px] h-[50px]`} />,
  },
  {
    code: 51,
    name: 'морось легкой интенсивности',
    icon: (className: string = '') => (
      <Rainy4 className={`w-[50px] h-[50px] stroke-blue-500 fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 53,
    name: 'морось умеренной интенсивности',
    icon: (className: string = '') => (
      <Rainy4 className={`w-[50px] h-[50px] stroke-blue-500 fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 55,
    name: 'морось плотной интенсивности',
    icon: (className: string = '') => (
      <Rainy4 className={`w-[50px] h-[50px] stroke-blue-500 fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 56,
    name: 'ледяная морось легкой интенсивности',
    icon: (className: string = '') => (
      <Rainy4 className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 57,
    name: 'ледяная морось плотной интенсивности',
    icon: (className: string = '') => (
      <Rainy4 className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 61,
    name: 'слабый дождь',
    icon: (className: string = '') => (
      <Rainy1 className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 63,
    name: 'умеренный дождь',
    icon: (className: string = '') => (
      <Rainy2 className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 65,
    name: 'сильный дождь',
    icon: (className: string = '') => (
      <Rainy3 className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 66,
    name: 'легкий ледянной дождь',
    icon: (className: string = '') => (
      <Rainy3 className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 67,
    name: 'сильынй ледянной дождь',
    icon: (className: string = '') => (
      <Rainy3 className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 71,
    name: 'легкий снегопад',
    icon: (className: string = '') => (
      <Snow3 className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 73,
    name: 'умеренный снегопад',
    icon: (className: string = '') => (
      <Snow3 className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 75,
    name: 'сильный снегопад',
    icon: (className: string = '') => (
      <Snow3 className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 77,
    name: 'снежные зерна',
    icon: (className: string = '') => (
      <Snow3 className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 80,
    name: 'слабые ливневые дожди',
    icon: (className: string = '') => (
      <Rainy3 className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 81,
    name: 'умеренные ливневые дожди',
    icon: (className: string = '') => (
      <Rainy3 className={`stroke-blue-500 w-[50px] h-[50px]  fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 82,
    name: 'сильные Ливневые дожди',
    icon: (className: string = '') => (
      <Rainy3 className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 85,
    name: 'слабый снег',
    icon: (className: string = '') => (
      <Snow1 className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 86,
    name: 'сильный снег',
    icon: (className: string = '') => (
      <Snow2 className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 95,
    name: 'гроза',
    icon: (className: string = '') => (
      <Thunder className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 96,
    name: 'гроза со слабым градом',
    icon: (className: string = '') => (
      <Thunder className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
  {
    code: 99,
    name: 'гроза со сильным градом ',
    icon: (className: string = '') => (
      <Thunder className={`stroke-blue-500 w-[50px] h-[50px] fill-blue-500 ${className}`} />
    ),
  },
];
export const REQUEST_PARAMS = {
  daily: {
    daily:
      'precipitation_sum,temperature_2m_max,temperature_2m_min,weathercode,winddirection_10m_dominant,windspeed_10m_max',
    timezone: 'auto',
    end_date: getStartAndEndDate().endDate,
    start_date: getStartAndEndDate().startDate,
  },
  hourly: {
    hourly: 'relativehumidity_2m,temperature_2m,weathercode,winddirection_10m,windspeed_10m',
  },
};
export const DEFAULT_CITY = 'Minsk';

export enum ROUTES {
  MAIN = '/',
  MORE = 'more',
}
export enum SEARCH_QUERY_PARAMS {
  SEARCH = 'search',
}
