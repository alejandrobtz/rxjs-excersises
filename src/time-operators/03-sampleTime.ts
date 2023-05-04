import {  fromEvent } from "rxjs";
import {  map,  sampleTime } from "rxjs/operators";

/*
SampleTime:
Allows us to get the latest value emmited in an specific period of 
time, ie: when you subscribe will start to count depending on the time defined as 
argument sampleTime(1000) => will count 1000 milsecs, and the will look for the last 
value emmited, if no value was emmited, then won't emmit anything.

*/

const clicks$ = fromEvent<MouseEvent>( document, 'click');

clicks$.pipe(
    sampleTime(2000), // is possible to put it at the end, but is better for avoiding memory consumption.
    map(({x, y}) => ({x, y})),
)
.subscribe( console.log);