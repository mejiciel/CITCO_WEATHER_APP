import React, { Component } from 'react';
import * as MY_CONSTANTS from '../common/constants';
import BootstrapTable from 'react-bootstrap-table-next';
import * as weatherSvc from '../common/weather-service';
import * as utils from '../common/utils';
import paginationFactory from 'react-bootstrap-table2-paginator';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import '../App.css';
import {closeForcastAction} from '../actions'
const columns=[
    {
       dataField:'dt',
       text:'Date',
       formatter:utils.dateFormatter
    },
    {
        dataField:'main.temp',
        text:'Temp',
        formatter:utils.kCelConverter
    },
    {
        dataField:'main.temp_min',
        text:'Min Temp',
        formatter:utils.kCelConverter
    },
    
    {
        dataField:'main.temp_max',
        text:'Max Temp',
        formatter:utils.kCelConverter
    },
    
    {
        dataField:'wind.speed',
        text:'Wind'
    },
    
    {
        dataField:'weather[0].description',
        text:'Description'
    },

]

const pagingOptions={
    sizePerPage:5
}
export default class City5dWeather extends React.Component{
    constructor(props){
        super(props);
        this.state={forcast:undefined}
        this.onClose=this.close.bind(this);
        
        
    }

    componentDidMount(){
        weatherSvc.fetchJson(MY_CONSTANTS.FIVEDAY_WEATHER_URL(this.props.cityId),(forcast)=>{
            this.setState({"forcast":forcast});
        });
    }

    close(){
        this.props.store.dispatch(closeForcastAction());
    }

    

    render(){
        return (this.state.forcast? <div className={this.props.class}>
            <div className="header">Weather Forcast for {this.state.forcast.city.name},{this.state.forcast.city.country}    <span><button className="forcast-close-btn" onClick={this.onClose.bind(this)}>close</button></span></div>
            <div className="body">
                <BootstrapTable keyField='dt' data={ this.state.forcast.list } columns={ columns } pagination={ paginationFactory(pagingOptions)}/>
            </div>

        </div>:null
        );
    }
}