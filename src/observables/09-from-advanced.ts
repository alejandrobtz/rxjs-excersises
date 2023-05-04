import { of, from, observable } from 'rxjs';


/**
 * of = createas an observable => take arguments and creates a secuence
 * from = creates an observable in base => array, objects, promise, iterable
 * other observable among others. 
 */

const observer = {
    next: val => console.log('next', val), 
    complete: () => console.log('complete')
}

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from('Alejandro');
// source$.subscribe( observer );


// const source$ = from( fetch('https://api.github.com/users/klerith') );

// source$.subscribe( async(resp) => {
//     const dataresp = await resp.json()
    
//     console.log(dataresp);
// } );

const source$ = from( fetch('https://api.github.com/users/klerith'));

const miGenerator = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const myIterable = miGenerator();

//how we would loop into the generator function using for loop
for(let id of myIterable){
    console.log(id);
}

// How we can do it using the observable from
from( myIterable ).subscribe( observer );