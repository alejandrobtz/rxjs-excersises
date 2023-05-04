import {  fromEvent } from "rxjs";
import {   auditTime, map, tap   } from "rxjs/operators";

/*
AuditTime:
Emmits the last value emmited by the observable in an determined period of
time

*/

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    map(({x, y}) => x),
    tap(val => console.log(val, "tap")),
    auditTime(5000)
).subscribe( x => console.log("audittime", x) );