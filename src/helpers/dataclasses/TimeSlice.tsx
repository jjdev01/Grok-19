export default class TimeSlice {
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

//const _TimeSlice = TimeSlice;
//export { _TimeSlice as TimeSlice };
