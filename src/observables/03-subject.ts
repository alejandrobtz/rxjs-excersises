import {Observable, Observer, Subject} from 'rxjs'


const observer: Observer<any> = {
    next: next => console.log("next: ", next),
    error: error => console.warn("error: ", error),
    complete: () => console.info("complete:")
}; 


const intervalo$ = new Observable<number>(subs => {
    const intervalId = setInterval(() => subs.next(Math.random()), 1000); 

    return () => {
        clearInterval(intervalId); 
        console.log("intervalo destruido"); 
    }

})

const subject$ = new Subject(); 
const subscription = intervalo$.subscribe( subject$ ); 

const subs1 = subject$.subscribe( observer ); 
const subs2 = subject$.subscribe( observer ); 

setTimeout(() => {
    subject$.next(10); 
    subject$.complete()
    subscription.unsubscribe(); 
}, 3500 ); 
