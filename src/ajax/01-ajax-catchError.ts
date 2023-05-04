import { catchError,of } from 'rxjs';
import {  map } from 'rxjs/operators';

import { AjaxError, ajax } from 'rxjs/ajax';


const url = 'https://api.github.com/users?per_page=5';


const errorHandler = ( response: Response ) => {
    if(!response.ok){
        throw new Error( response.statusText );
    }

    return response;
}

const catchedError = (error: AjaxError) => {
    console.warn('Error in:', error.message);
    return of([]);
}

const fetchPromise = fetch( url );

// fetchPromise
// .then( errorHandler )
// .then(res => res.json())
// .then(data => console.log("data:", data))
// .catch(err => console.warn('Error en los usuarios',err));

// fetchPromise
// .then( errorHandler )
// .then(res => res.json())
// .then(data => console.log("data:", data))
// .catch(err => console.warn('Error en los usuarios',err));


ajax( url ).pipe(
    map( x => x.response ),
    catchError( catchedError )
).subscribe(usr => console.log("usr",usr) );