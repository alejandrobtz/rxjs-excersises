

/*
The Scan function works in the same way as the reduce, with the difference
that is emmitting the accummulator, while in the reduce just emmits the value
when the observable is completed. 
*/

import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";


const numbers = [1,2,3,4,5];

// const totalAccumulator = (acc: number, curr: number) => {
//     return acc + curr;
// }


//is the same as the above but with implicit return. 
const totalAccumulator = (acc: number, curr: number) => acc + curr;

//Reduce

from( numbers ).pipe(
    reduce( totalAccumulator, 0 )
)
.subscribe( console.log );


//Scan
from( numbers ).pipe(
    scan( totalAccumulator, 0 )
)
.subscribe( val =>  console.log('scan', val) );

//Scan could be the base of the pattern Redux
interface IUser {
    id?: string;
    autheticated?: boolean;
    token?: string;
    age?: number;
}

const user: IUser[] = [
    {id: 'Ale', autheticated: false, token: null },
    {id: 'Ale', autheticated: true, token: 'ABC' },
    {id: 'Ale', autheticated: true, token: 'ABC123'},
];

const state$ = from( user ).pipe(
    scan<IUser, IUser>( (acc, curr) => {
        return { ...acc, ...curr }
    }, {age: 33 })
);

const id$ = state$.pipe(
    map( state => state.id )
);

id$.subscribe( console.log );


