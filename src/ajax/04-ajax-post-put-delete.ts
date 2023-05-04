import { ajax } from 'rxjs/ajax'; 

const url = 'https://httpbin.org/delay/1';

// ajax.put( url, {
//     id: 1,
//     nombre: 'Alejandro'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe( console.log );


//We can change the method for PUT DELETE, an not error will appear
//it's matter of how you will handle this request in your 
//backend
ajax( {
    url: url,
    method: 'POST', 
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Alejandro'
    }
}).subscribe( console.log );