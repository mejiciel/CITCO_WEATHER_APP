import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherDropdown from './components/my-dropdown';
import { tsConstructorType } from '@babel/types';
import City5dWeather from './components/city-5d-weather';
import CityWeather from './components/city-weather';
import ReactDOMServer from 'react-dom/server';
import {createStore} from 'redux';
import weatherReducer from './reducers/weather-reducer';
import {ACTION_TYPE,currentWeatherAction,forcastWeatherAction,closeForcastAction} from './actions';

const store=createStore(weatherReducer);

class App extends React.Component{


  
  constructor(props) {
    super(props)
    this.state={selectedCity:0,show5day:false};
    this.onCitySelection=this.onCitySelection.bind(this);
    store.subscribe(this.updateRender.bind(this));
  }
  updateRender(){
    //console.log('update');
    this.forceUpdate();
  }
  onCitySelection(city) {
    //this.setState({selectedCity:city});
    store.dispatch(currentWeatherAction(city));
  }
  on5dayClick(cityId){
    store.dispatch(forcastWeatherAction(cityId));
  }

  

  render() {
    let reduxState=store.getState();
    let t = (

      <div className="App">
        <header className="App-header">
          <p>React/Redux Weather App</p>
        </header>
        <div className='App-body'>
          <WeatherDropdown onChange={this.onCitySelection} className="weather-dropdown"></WeatherDropdown>
          {reduxState.showCurWeather ? <CityWeather cityId={reduxState.cityId} on5dayClick={this.on5dayClick.bind(this)} class="city-weather"></CityWeather>:null}
          {reduxState.showForcast? <City5dWeather cityId={reduxState.cityId} store={store} class="city-5d-weather"></City5dWeather>:null}
        </div>
      </div>
    );
    
    return t;
  }
}

export default App;
