import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

range(1,5).pipe(
    map<number, string>( val => (val * 10).toString())
)
.subscribe( console.log );

const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyUpCode$ = keyUp$.pipe(
    map( event => event.code)
);

// const keyUpPluck$ = keyUp$.pipe(
//     pluck('key')
// );

// const keyUpPluck$ = keyUp$.pipe(
//     pluck('target', 'baseURI')
// );

// keyUpCode$.subscribe( code => console.log('map', code) );
// keyUpPluck$.subscribe( code => console.log('pluck', code) );

const keyUpMapTo$ = keyUp$.pipe(
    mapTo('tecla presionada')
);

keyUpMapTo$.subscribe( code => console.log('mapto', code) );

