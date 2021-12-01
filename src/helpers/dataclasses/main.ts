import Filter from "./Filter";
import RequestGlobal from "./Requests";
import TimeSlice from "./TimeSlice";

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
