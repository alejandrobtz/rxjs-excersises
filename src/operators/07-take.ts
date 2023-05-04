import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';


const numbers$ = of(1,2,3,4,5).pipe(
    take(2)
)
//.subscribe( m => console.log('from numbers$ observable', m)):

numbers$.pipe(
    tap( n => console.log('tap', n)),
    take(4)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});
