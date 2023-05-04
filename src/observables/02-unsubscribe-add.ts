import {Observable, Observer, Subscriber} from 'rxjs'


const observer: Observer<string> = {
    next: next => console.log("next[obs]: ", next),
    error: error => console.warn("error[obs]: ", error),
    complete: () => console.info("complete[obs]:")
}; 

//3
const intervalo$ = new Observable<number>( Subscriber => {
    let count = 0; 

    let id = setInterval(()=> {
        count++
        Subscriber.next(count); 
    },2500); 

    // we will reach this point when the we call the unsubscribe
    // return () => {
    //     clearInterval(id); 
    // }
   
   
}); 

//4
const subscription = intervalo$.subscribe( num => console.log('Num:', num)); 


//5 unsubscription
setTimeout(()=> {
    subscription.unsubscribe(); 
},7000); 