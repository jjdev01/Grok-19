import TimeSlice from "./TimeSlice";

export default class Filter {
    /*
     * Filter that can be applied to the
     * query to the central database
     */

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

//const _Filter = Filter;
//export { _Filter as Filter };
