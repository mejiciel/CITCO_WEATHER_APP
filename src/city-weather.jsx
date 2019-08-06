import React, { Component } from 'react';
import * as MY_CONSTANTS from './constants';
import * as WeatherSvc from './weather-service';
import './App.css';

export default class CityWeather extends React.Component{
    abortCtrl;
    constructor(props){
        super(props);
        this.state={cityWeather:undefined};
        this.cityWeather=undefined;
        this.on5dayClick=this.on5dayClick.bind(this);
        this.abortCtrl=new AbortController();
        //this.updateCityWeather(props.cityId);    
        //console.log('Constuctor City:',this.props.cityId);
    }

    
    componentDidMount(){
        this.updateCityWeather(this.props.cityId);
        console.log('city did mount:',this.props.cityId);
    }

    componentWillUnmount(){
        this.abortCtrl.abort();
    }

    /* componentWillUpdate(){
        this.updateCityWeather(this.props.cityId);
        console.log('city will update:',this.props.cityId);
    } */
    
    componentWillReceiveProps(nextProp){
        
        console.log('Update Prop:',nextProp.cityId);
         let cityId=nextProp.cityId;
         this.updateCityWeather(cityId);
        
          
    }

    on5dayClick(){
        if(this.props.on5dayClick){
            this.props.on5dayClick(this.props.cityId);
        }
    }

    updateCityWeather(cityId){
        if(cityId && cityId>0){
            return WeatherSvc.fetchJson(MY_CONSTANTS.CURRENT_WEATHER_URL(cityId),
                        (json)=>{
                                console.log(json);
                                this.setState({cityWeather:json})
                                this.cityWeather=json;
                            }
                        ,this.abortCtrl.signal);            
        }
    }




    render(){
        
        return (this.state.cityWeather ? <div className={this.props.class}>
            <div className="header">City: {this.state.cityWeather.name}, {this.state.cityWeather.sys.country}</div>
            <div className="body">
                <ul className="city-status">
                <li>Main: {this.state.cityWeather.weather[0].main}</li>
                <li>Description:{this.state.cityWeather.weather[0].description}</li>
                <li>Temperature: {`${Math.ceil(this.state.cityWeather.main.temp + MY_CONSTANTS.ABS_ZERO)} C` }</li>
                <li>Wind Speed: {this.state.cityWeather.wind.speed}</li>
                </ul>
                <button className="forcast-button" onClick={this.on5dayClick.bind(this)}>5 day forecast</button>
            </div>
        </div>:null);
    }
}