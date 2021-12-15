import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react';

class SearchCriteria extends React.Component {
    constructor(props) {
        super(props);
        
        let cdate = new Date();
        this.state = {
            inState: "California",
            inCounty: "",
            inDate: this.get2DaysDateFromTodayDate()
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //this.getCurrentDate = this.getCurrentDate.bind(this);
        this.get2DaysDateFromTodayDate = this.get2DaysDateFromTodayDate.bind(this);
        this.get30DaysDateFromTodayDate = this.get30DaysDateFromTodayDate.bind(this);

        this.cbFunc = props.cbFunc;
    }

    /*getCurrentDate() {
        let cdate = new Date();
        return `${cdate.getFullYear()}-${cdate.getMonth() + 1}-${cdate.getDate()}`;
    }*/

    get2DaysDateFromTodayDate() {
        const today = new Date()
        const last2Days = new Date(today);
        last2Days.setDate(last2Days.getDate() - 2);
        var result = last2Days.toISOString().split('T')[0];
        return result;
    }

    get30DaysDateFromTodayDate() {
        const today = new Date()
        const last30Days = new Date(today);
        last30Days.setDate(last30Days.getDate() - 30);
        var result = last30Days.toISOString().split('T')[0];
        return result;
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        //console.log(event.target.name + " => " + event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        //console.log(this.state.inState + "; " + this.state.inCounty + "; " + this.state.inDate);
        this.cbFunc(this.state);
    }

    render() {
        return (
            <div className="search-criteria" style={{"background-color":"black"}}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.inState} name="inState" onChange={this.handleChange} placeholder="State, i.e. California"/>
                    <input type="text" value={this.state.inCounty} name="inCounty" onChange={this.handleChange} placeholder="County, i.e. Orange"/>
                    
                    { // possible obsolete feature. read note in SearchResults about "lastdays" param.
                    true===false ?
                    <input type="date" value={this.state.inDate} name="inDate" onChange={this.handleChange} min={this.get30DaysDateFromTodayDate()} max={this.get2DaysDateFromTodayDate()} />
                    : "" }
                    
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchCriteria;
