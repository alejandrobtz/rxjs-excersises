import { asyncScheduler } from 'rxjs';



//Asyn scheduler es un equivalente o parecida 
//a las dos funciones a continuación 
// setTimeout(() => { }, 3000);
// setInterval(() => { },3000);


//As a reminder have to take into account the parameters that we have to pass
// to the asyncScheduler, the saludar example allows as to pass an arrow function
// and the state is not a parameter itself is the what we are gonna change once the 
// the observer has emmitted.

// In the example of the subs we created a "timeout" using the asyncScheduler,
//we couldnt pass an arrow function since this kind of functions don't have the 
// access to 'this' and we need to use the this.keyword for access to the same instance 
// of the observable and call the schedule funtion withe new parameters and the 
//status or 'change' of the state


//its more a subscription than an observable

const saludar = () => console.log('Hola Mundo');
const saludar2 = nombre => console.log(`Hola ${nombre.a} ${nombre.c}!!!`);


asyncScheduler.schedule(saludar2, 2000, {a: 'Mario', b:'Alejandro', c:'Benítez' });


const subs = asyncScheduler.schedule(function(state){
    console.log('state', state);
    this.schedule(state + 1, 1000);

}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// },6000);

//creted am async scheduler for unsubscribing from the second one created
asyncScheduler.schedule(() => subs.unsubscribe(), 6000);

