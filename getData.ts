var axios = require("axios");

class TimeSlice {
    /*
     * Represents time intervals
     */

    begin: Date;
    end: Date;

    constructor(begin: Date, end: Date) {
        this.begin = begin;
        this.end = end;
    }
}

class Filter {
    country: string;
    state: string;
    interval: TimeSlice;

    constructor(country: string, state: string, interval: TimeSlice) {
        this.country = country;
        this.state = state;
        this.interval = interval;
    }

    toString() {
        return `country=${this.country}&state=${
            this.state
        }&min_date=${this.interval.begin.toISOString()}&max_date=${this.interval.end.toISOString()}`;
    }
}

class RequestBase {
    hidden_fields: Array<string>;
    base_url: string;

    constructor() {
        this.hidden_fields = [
            "_id",
            "country",
            "country_code",
            "country_iso2",
            "country_iso3",
            "loc",
            "state",
            "uid",
            "date",
            "combined_name",
        ];
        this.base_url =
            "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook";
    }

    hiddendFieldsToString() {
        return this.hidden_fields.join(", ");
    }

    apiCall(url: string) {
        axios
            .get(url)
            .then(function (response: any) {
                console.log(response.data);
            })
            .catch(function (error: any) {
                console.log(error);
            });
    }
}

class RequestGlobal extends RequestBase {
    endpoint: string;
    constructor() {
        super();
        this.endpoint = "global";
    }

    obtain(filter: Filter) {
        var url = `${this.base_url}/${
            this.endpoint
        }?${filter.toString()}&hide_fields=${this.hiddendFieldsToString()}`;

        return this.apiCall(url);
    }
}
var R = new RequestGlobal();

var filter = new Filter(
    "France",
    "Guadeloupe",
    new TimeSlice(
        new Date("2020-04-25T00:00:00.000Z"),
        new Date("2020-04-27T00:00:00.000Z")
    )
);

R.obtain(filter);
