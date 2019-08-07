import {ACTION_TYPE} from '../actions'
export default function weatherReducer(state, action){
    let newstate;
    if(!state){
        state={showCurWeather:false,showForcast:false};
    }
    switch(action.type){
        case ACTION_TYPE.SHOW_CURRENT_WEATHER:
            newstate={...state,...{showCurWeather:true,"cityId":action.cityId}};
            break;
        case ACTION_TYPE.SHOW_FORCAST_WEATHER:
            newstate={...state,...{showForcast:true,"cityId":action.cityId}};
            break;
        case ACTION_TYPE.CLOSE_FORCAST:
            newstate={...state,...{showForcast:false}};
            break;
        default:
            newstate={...state};
    }

    return newstate;
}
