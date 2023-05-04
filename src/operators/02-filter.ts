import { from, fromEvent, of, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// // range(1,10).pipe(
// //     filter( val => val % 2 == 1)
// // ).subscribe(console.log);

range(20,30).pipe(
    filter( (val, i) =>
        { 
            console.log('index', i)
            return val % 2 == 1
        })
)

interface ICharacters {
    tipo: string;
    nombre: string;
}

const characters: ICharacters[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
];

from(characters).pipe(
    filter( x => x.tipo == 'heroe')
).subscribe( console.log );


const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code ),
    filter(key => key === 'Enter')
);

keyUp$.subscribe( console.log );