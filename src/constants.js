export const CITY_JSON="cities.json";
export const DEFAULT_CITY_OPTION={id:0,name:'Select City',country:undefined};
export const CURRENT_WEATHER_URL=(cityId)=>`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=a30f79a44d74a7b2c4c8f414d958a23e`;
export const FIVEDAY_WEATHER_URL=(cityId)=>`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=a30f79a44d74a7b2c4c8f414d958a23e`;
export const ABS_ZERO=-273;