import { catchError, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';




const handleError = ( resp: AjaxError ) => {
    console.warn( 'error:', resp.message);
    return of( {
        ok: false,
        users: []
    } );
}

const obs$ = ajax.getJSON( url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
} );

const obs2$ = ajax( url );


/*
Differences between getJson and ajax
ajax returns the response object 
*/
obs$.pipe(
    catchError( handleError )
).subscribe( {
    next: val => console.log(val),
    error: err => console.warn('error in subs:', err),
    complete: () => console.log('complete!')
} );


obs2$.pipe(
    catchError( handleError )
).subscribe( data => console.log( 'ajax:', data ) );
