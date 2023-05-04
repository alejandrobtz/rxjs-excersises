

import { fromEvent } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

//will log the first event that matches the condition in the first
click$.pipe(
    tap<MouseEvent>( x => console.log(tap, "tap")),
    map<MouseEvent, any>(({ clientY, clientX }) => ({ clientY , clientX })), //Using destructuring EcmaScript 6
    first(x => x.clientX > 250)
)
.subscribe( {
    next: val => console.log('next:', val), 
    complete: () => console.log('complete')
} );


//Same as the de destructuring
// map<MouseEvent, any>( event => ({
//     clientY: event.clientY,
//     clientX: event.clientX
// })),