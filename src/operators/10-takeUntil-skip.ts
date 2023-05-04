import { fromEvent, interval} from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";


const button = document.createElement('button');

button.innerHTML = 'Stop Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(button, 'click').pipe(
    tap(() => console.log( 'before skip')),
    skip(1),
    tap(() => console.log('after skip'))
)


// We want to stop the timer when the button is clicked

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('btn next:', val),
    complete: () => console.log('btn complete!!')
})

///////////////////////////////////////////////////////

// skip allows us to skip or jump (N) ammount of initial emmitions

// in the example there is the question how to make cancel the 
// subscription when the button is clicked twice.