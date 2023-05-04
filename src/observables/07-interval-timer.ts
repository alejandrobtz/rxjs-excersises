import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
}

//const interval$ = interval(1);

console.log('inicio');
//interval$.subscribe(observer);
console.log('fin');

//inicia el timer en 2 secs y lo complete inmediatamente
//const timer$ = timer(2000);

// inicio el timer en 2 secs pero continua haciendo un conteo de 1sec
//comportandose como el interval
//const timer$ = timer(2000,1000);


// le estamos pasando un date especifico que para el ejemplo es la fecha Now +
// 5 secs, lo que hará que el timer empiece a ejecutarse en 5secs y completarse 
//tambien
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer$ = timer(hoyEn5);

timer$.subscribe(observer);