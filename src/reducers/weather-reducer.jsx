export const ACTION_TYPE={
    SHOW_CURRENT_WEATHER:'showCurrent',
    SHOW_FORCAST_WEATHER:'SHOW_FORCAST_WEATHER',
    CLOSE_FORCAST:'CLOSE_FORCAST'

}

export default function weatherReducer(state, action){
    switch(action.type){
        case ACTION_TYPE.SHOW_CURRENT_WEATHER:
            state={}
        case ACTION_TYPE.SHOW_FORCAST_WEATHER:
        case CLOSE_FORCAST:
        default:
            console.log(state);
    }

    return state;
}