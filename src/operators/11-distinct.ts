

/*
Distinct emmits values that has not been 
emmited before
*/

import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";



const numbers$ = of<any>('1,',1,1,1,3,3,2,4,4,5,1);

numbers$.pipe(
    distinct() // ===
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
        name: 'Dr. Willi'
    },
    {
        name: 'X'
    },
    {
        name: 'Megaman'
    },
    {
        name: 'Zero'
    },
    {
        name: 'Zero'
    }
];
/*
when dealing with objects we need to add a condition 
cause objects are not equal cause are store in different memory spaces.
*/
from( characters).pipe(
    distinct( x => x.name)
)
.subscribe( console.log );