import { fromEvent } from 'rxjs';
import { debounceTime,  map, mergeAll, pluck} from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';


//References

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

//streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

/*
tranformation operators (MergeALl)
Its used when our observable returns another observable, 
so it will merge all the observables emmited by my first subscription and it does not
get complited until all children observables are completed. 
*/
input$.pipe(
    debounceTime(500),
    pluck('target', 'value'),
    map( text => ajax.getJSON(
            `https://api.github.com/search/users?q=${ text }`
        )
    ),
    mergeAll(),
    pluck('items')

).subscribe( resp => {
    console.log(resp)
});