export const ACTION_TYPE={
    SHOW_CURRENT_WEATHER:'showCurrent',
    SHOW_FORCAST_WEATHER:'SHOW_FORCAST_WEATHER',
    CLOSE_FORCAST:'CLOSE_FORCAST'

}

export function currentWeatherAction(cityId){
    return {type:ACTION_TYPE.SHOW_CURRENT_WEATHER,"cityId":cityId};
}

export function forcastWeatherAction(cityId){
    return {type:ACTION_TYPE.SHOW_FORCAST_WEATHER,"cityId":cityId};
}

export function closeForcastAction(){
    return {type:ACTION_TYPE.CLOSE_FORCAST}
}