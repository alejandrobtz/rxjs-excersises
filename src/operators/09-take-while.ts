import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(( {x, y} ) => ({x, y})),
    takeWhile(({ y }) => y <= 150, true) // last argument includes the argument that reaches my while
)
.subscribe({
    next: val => console.log('next:', val), 
    complete: () => console.log('complete!!')
})