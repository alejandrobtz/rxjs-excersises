

/*
Distinct emmits values that has not been 
emmited before
*/

import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";



const numbers$ = of<any>('1,',1,1,1,3,3,2,4,3,4,5,1);

numbers$.pipe(
    distinctUntilChanged() // ===
)
.subscribe( console.log );


interface character {
    name: string;
}

const characters: character[] = [
    {
        name: 'Megaman'
    },
    {
        name: 'Megaman'
    },
    {
        name: 'X'
    },
    {
        name: 'X'
    },
    {
        name: 'Megaman'
    },
    {
        name: 'Zero'
    }
];

from( characters).pipe(
    distinctUntilChanged((prev, curr) => prev.name === curr.name)
)
.subscribe( console.log );

/*

Distinct until changhed
if the previous value is exact the same, won't be emmitted 

*/