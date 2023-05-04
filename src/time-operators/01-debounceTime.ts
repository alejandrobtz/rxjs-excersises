import { from, fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, distinctUntilKeyChanged, map, pluck } from "rxjs/operators";


/*
    Debounce time works on interval time based
    we can restrict the ammount of emmitions our source is emmiting,
    it allows to control observables that can emmit in  a 
    fast way large ammounts of data 
*/

//example 1

const clicks$ = fromEvent(document, 'click');

clicks$.pipe(
    debounceTime(3000)
)
.subscribe( console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),  //investigate how to make the map work with this since pluck is deprecated.
    distinctUntilChanged()
)
.subscribe(console.log);


// input$
// .subscribe( val => console.log(val.target.) );