import { asyncScheduler, fromEvent } from "rxjs";
import { distinctUntilChanged, pluck, throttleTime } from "rxjs/operators";

/*
throttle Time:
A soon the observable emmits its value it will start to count
the time we set and will ignore any other emmition from the 
Observable

*/

const clicks$ = fromEvent(document, 'click');

clicks$.pipe(
    throttleTime(3000)
)
.subscribe( console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    throttleTime(400, asyncScheduler, { 
        leading: true,  //receives the first element 
        trailing: true  //receives the last element
    } ),
    pluck('target', 'value'),  //investigate how to make the map work with this since pluck is deprecated.
    distinctUntilChanged()
)
.subscribe(console.log);