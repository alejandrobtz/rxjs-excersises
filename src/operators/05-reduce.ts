import { interval, take } from 'rxjs';
import { reduce, tap } from 'rxjs/operators';

const numbers = [1,2,3,4,5];

const totalReducer = (acc: number, curr: number) => {
    return acc + curr;
}



/** 
 * The JavaScript reduce method receives in the second argument the start point of 
 * the accumulator.
 * /*/
const total = numbers.reduce(totalReducer, 0 );

interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer, 0)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
})