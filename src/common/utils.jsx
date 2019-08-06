import React from 'react'; 
import dataFormat from 'dateformat';
import * as CONSTANTS from './constants';
var dateFormat = require('dateformat');
export function dateFormatter(cell,row){
    let dateNum=Number.parseInt(cell);
    let weatherTimeStamp='N/A';
    
    if(!isNaN(dateNum)){
      let date=new Date(dateNum*1000);
      weatherTimeStamp= dateFormat(date,'shortDate')+' @ '+ dateFormat(date,'shortTime');
    }
    return(<span>{weatherTimeStamp}</span>);
}

export function kCelConverter(cell,row){
    let degNum=Number.parseInt(cell);
    let outcel;
    if(!isNaN(degNum)){
        degNum+=CONSTANTS.ABS_ZERO;
    }
    else 
        degNum="N/A";
    return (<span>{degNum}</span>)
}