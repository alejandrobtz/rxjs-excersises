import { fromEvent } from 'rxjs';


// eventos del dom

const src1$ = fromEvent<PointerEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');
const observer = {
    next: val => console.log('next', val)
}

src1$.subscribe( ({x, y}) => {
    console.log(x, "clientX");
    console.log(y, "clientY")
} );


src2$.subscribe(observer);




