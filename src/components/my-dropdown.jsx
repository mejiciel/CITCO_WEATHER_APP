import React, { Component } from 'react';
import * as MY_CONSTANTS from '../common/constants';
import '../App.css';

export default class WeatherDropdown extends React.Component {
    citylist;
    constructor(props) {
        super(props);
        this.state = { citylist: [] };


        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        if (this.props.onChange) {
            this.props.onChange(evt.target.value);
        }
    }
    componentDidMount() {

        fetch(MY_CONSTANTS.CITY_JSON)
            .then(results => results.json())
            .then(json => {
                let ct = json;
                ct.unshift(MY_CONSTANTS.DEFAULT_CITY_OPTION);
                this.setState({ citylist: ct })

            }
            );
    }
    render() {
        return (<div className={this.props.className}>
                    <select onChange={this.handleChange}>
                        {
                            this.state.citylist.map(city => {
                                return (<option key={city.id} value={city.id}>{`${city.name}${city.country ? ',' + city.country : ''}`}</option>)
                            }
                            )
                        }

                    </select>
                </div>
        );
    }
}

//export default MyDropdown;