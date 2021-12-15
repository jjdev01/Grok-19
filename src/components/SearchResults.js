import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react';

var axios = require("axios");

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        
        this.results = [];
        this.date = "";
        this.state = { rows: [] };

        this.fetchData = this.fetchData.bind(this);
        this.getDaysSinceCurrentDate = this.getDaysSinceCurrentDate.bind(this);
    }

    componentDidMount() {
        this.results = [];
        this.fetchData(this.props.criteria);
    }

    componentWillReceiveProps(nextProps) {
        this.results = [];
        //console.log("componentDidUpdate =>\n");
        //console.log(nextProps.criteria);
        this.fetchData(nextProps.criteria);
    }

    /*fetchData(criteria) {
        if (criteria.inCounty.length === 0) {
            var url = `https://disease.sh/v3/covid-19/nyt/states/${criteria.inState}?lastdays=${this.getDaysSinceCurrentDate(criteria.inDate)}`;
            axios
                .get(url)
                .then(function (response) {
                    //console.log(response);
                    response.data.map(elem => {
                        console.log(elem);
                    });
                });
        }
        else {
            var url = `https://disease.sh/v3/covid-19/nyt/counties/${criteria.inCounty}?lastdays=${this.getDaysSinceCurrentDate(criteria.inDate)}`; // max lastdays = 30
            axios
                .get(url)
                .then(function (response) {
                    //console.log(response);
                    response.data.map(elem => {
                        if (criteria.inState !== 0 && elem.state === criteria.inState) {
                            console.log("acceptable => " + elem);
                        }
                    });
                });
        }
    }*/

    fetchData(criteria) {
        this.date = new Date(criteria.inDate).toLocaleDateString();
        // NOTE: Only getting data from yesterday. Setting lastdays > 1 will mean more oncoming data, therefore heavier load / longer wait.
        var url = `https://disease.sh/v3/covid-19/historical/usacounties/${criteria.inState.toLowerCase()}?lastdays=3`;
        axios
            .get(url)
            .then(function (response) {
                response.data.map(elem => {
                    if (criteria.inCounty.length !== 0) {
                        if (criteria.inCounty.toLowerCase() === elem.county) {
                            console.log("matches county");
                            
                            var date = new Date(criteria.inDate).toLocaleDateString();
                            // fix year
                            date = date.substring(0, date.length - 4) + date.substring(date.length - 2, date.length);

                            //console.log(date);
                            //console.log(elem.timeline.cases);

                            this.results.push({
                                state: elem.province,
                                county: elem.county,
                                cases: elem.timeline.cases[date],
                                deaths: elem.timeline.deaths[date]
                            });
                        }
                    }
                    else {
                        console.log("matches all");

                        var date = new Date(criteria.inDate).toLocaleDateString();
                        // fix year
                        date = date.substring(0, date.length - 4) + date.substring(date.length - 2, date.length);

                        this.results.push({
                            state: elem.province,
                            county: elem.county,
                            cases: elem.timeline.cases[date],
                            deaths: elem.timeline.deaths[date]
                        });
                    }
                });

                this.setState({ rows: this.results });
            }.bind(this));
    }

    // https://stackoverflow.com/questions/12986068/how-to-calculate-number-of-days-between-today-and-given-date-and-code-for-gettim
    getDaysSinceCurrentDate(date) {
        var today = new Date();
        var date_to_reply = new Date(date);
        var timeinmilisec = date_to_reply.getTime() - today.getTime();
        return Math.abs(Math.ceil(timeinmilisec / (1000 * 60 * 60 * 24)));
    }

    renderRows() {
        const rows = this.state.rows;
        return rows.map(elem => {
            return (
                <tr>
                    <td>{elem.state}</td>
                    <td>{elem.county}</td>
                    <td>{elem.cases}</td>
                    <td>{elem.deaths}</td>
                </tr>
            );
        })
    }

    render() {
        return (
            <div className="search-results">
                <br/>
                <p>Cases since {this.date}</p>
                <table className="table" style={{"width":"600px","marginLeft":"auto","marginRight":"auto"}}>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">State</th>
                            <th scope="col">County</th>
                            <th scope="col">Deaths</th>
                            <th scope="col">Cases</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SearchResults;
