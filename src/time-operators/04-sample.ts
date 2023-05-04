import {  fromEvent, interval } from "rxjs";
import {   sample   } from "rxjs/operators";

/*
Sample:
Emmits the last value emmited by the observable, until the other observable
within the sample operator emmits another value. 

*/

const interval$ = interval(500);

const click$ = fromEvent<MouseEvent>( document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);