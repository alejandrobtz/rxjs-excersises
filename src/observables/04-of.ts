import { of } from 'rxjs';


//puede manejar datos sincronos
const obs$ = of(1,2,3,4,5,6);

console.log('inicio del Obs');
obs$.subscribe( 
    next => console.log('next', next),
    null,
    () => console.log('terminamos la secuencia')
);

console.log('fin del Obs');




