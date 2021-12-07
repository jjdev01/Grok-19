import React, { Component } from "react";
import "./App.css"; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
import LeftHandSide from "./components/LeftHandSide";
var axios = require("axios");

const Title = () => (
    <h1>
        <b>United States Map</b>
    </h1>
);

class App extends Component {
    /* mandatory */
    mapHandler = (event) => {
        var state_name = event.target.textContent.replace(" ", "%20");

        var url = `https://disease.sh/v3/covid-19/states/${state_name}`;
        console.log(
            `getting information for the state: ${event.target.textContent}`
        );
        axios
            .get(url)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        //alert(event.target.dataset.name);
    };

    //<USAMap
    //customize={this.statesCustomConfig()}
    //onClick={this.mapHandler}
    ///>

    /* optional customization of filling per state and calling custom callbacks per state */
    statesCustomConfig = () => {
        return {
            NJ: {
                fill: "navy",
                clickHandler: (event) =>
                    console.log("Custom handler for NJ", event.target.dataset),
            },
            NY: {
                fill: "#CC0000",
            },
        };
    };

    render() {
        return (
            <div className="App">
                <Title />
                <LeftHandSide />
            </div>
        );
    }
}

export default App;
