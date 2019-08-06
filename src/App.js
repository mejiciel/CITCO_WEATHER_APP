import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherDropdown from './my-dropdown';
import { tsConstructorType } from '@babel/types';
import City5dWeather from './city-5d-weather';
import CityWeather from './city-weather';
import ReactDOMServer from 'react-dom/server';

class App extends React.Component{


  
  constructor(props) {
    super(props)
    this.state={selectedCity:0,show5day:false};
    this.onCitySelection=this.onCitySelection.bind(this);
  }
  onCitySelection(city) {
    this.setState({selectedCity:city});
  }
  showCity(){
    
    return this.state.selectedCity && this.state.selectedCity>0;
  }
  show5day(){
    return this.showCity() && this.state.show5day;
  }

  on5dayClick(cityId){
    this.setState({show5day:true});
  }

  render() {
    
    let t = (

      <div className="App">
        <header className="App-header">
          <p>React/Redux Weather App</p>
        </header>
        <div className='App-body'>
          <WeatherDropdown onChange={this.onCitySelection} className="weather-dropdown"></WeatherDropdown>
          {this.showCity() ? <CityWeather cityId={this.state.selectedCity} on5dayClick={this.on5dayClick.bind(this)} class="city-weather"></CityWeather>:null}
          {this.show5day() ? <City5dWeather cityId={this.state.selectedCity} class="city-5d-weather"></City5dWeather>:null}
        </div>
      </div>
    );
    
    return t;
  }
}

export default App;
