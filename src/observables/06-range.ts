import { asyncScheduler, of, range } from 'rxjs';


//const src$ = of(1,2,3,4,5);

//using the asyncScheduler object we can transform
//the obs to an async object
const src2$ = range(1,5, asyncScheduler);
console.log("inicio");
src2$.subscribe(console.log);
console.log("Fin");
