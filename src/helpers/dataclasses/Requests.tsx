var axios = require("axios");

import Filter from "./Filter";

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

export default class RequestGlobal extends RequestBase {
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
