import {Observable, Observer} from 'rxjs'

// const obs$ = Observable.create();

const obs$ = new Observable<string>(subs => {
    subs.next("hola");
    subs.next("mundo");

    subs.next("mundo");
    
    subs.complete(); 
}); 

// obs$.subscribe(
//     valor => console.log("valor:", valor),
//     error => console.warn("error:", error),
//     () => console.info("completado")
// ); 

const observer: Observer<string> = {
    next: next => console.log("next[obs]: ", next),
    error: error => console.warn("error[obs]: ", error),
    complete: () => console.info("completed[obs]:")
}; 

obs$.subscribe(observer); 

obs$.subscribe()