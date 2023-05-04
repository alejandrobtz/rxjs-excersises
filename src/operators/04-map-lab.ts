import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";


const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio ut sem nulla. Ut tristique et egestas quis ipsum suspendisse ultrices. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Urna et pharetra pharetra massa. Id diam maecenas ultricies mi. In mollis nunc sed id. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Sed elementum tempus egestas sed sed risus pretium. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Nulla aliquet enim tortor at auctor urna nunc id cursus. Sapien faucibus et molestie ac feugiat.
<br></br>
At ultrices mi tempus imperdiet nulla malesuada. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Blandit aliquam etiam erat velit. Lectus vestibulum mattis ullamcorper velit sed. Vitae suscipit tellus mauris a. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Lacus viverra vitae congue eu consequat ac felis. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Leo a diam sollicitudin tempor id eu nisl. Tincidunt augue interdum velit euismod in pellentesque massa.
<br></br>
Egestas integer eget aliquet nibh. Suspendisse in est ante in nibh. Porttitor leo a diam sollicitudin tempor. Enim eu turpis egestas pretium. Eget nullam non nisi est sit amet. Consectetur adipiscing elit duis tristique. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Orci phasellus egestas tellus rutrum. Sed enim ut sem viverra aliquet eget. Lectus proin nibh nisl condimentum id venenatis. Pellentesque id nibh tortor id aliquet lectus proin.
<br></br>
Vel facilisis volutpat est velit egestas. Elementum facilisis leo vel fringilla est ullamcorper. Nulla porttitor massa id neque. Ante in nibh mauris cursus mattis molestie. Neque sodales ut etiam sit. Sed faucibus turpis in eu mi bibendum neque. Ut placerat orci nulla pellentesque. Nec nam aliquam sem et tortor consequat id porta nibh. Fames ac turpis egestas maecenas pharetra. Lectus proin nibh nisl condimentum. Vel quam elementum pulvinar etiam non quam lacus. Dignissim diam quis enim lobortis. Vivamus at augue eget arcu dictum varius duis.
<br></br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus et netus. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Eget nullam non nisi est sit amet facilisis magna. Nibh praesent tristique magna sit. In ornare quam viverra orci sagittis eu. Neque viverra justo nec ultrices. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Amet est placerat in egestas erat imperdiet. Quis vel eros donec ac. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Convallis a cras semper auctor neque vitae tempus. Aliquet risus feugiat in ante. Leo vel orci porta non pulvinar neque laoreet suspendisse. In eu mi bibendum neque egestas. Tortor consequat id porta nibh venenatis cras. Consectetur purus ut faucibus pulvinar elementum integer.

`;


const body = document.querySelector('body');
body.append(text);


const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

//function for calculate

//we need the:
//scrollTop, scrolheight and clientHieght
const calculateScroll = (event) => {
    const {
        scrollTop, 
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;

    console.log({scrollTop, scrollHeight, clientHeight},"evento");
}


//Streams

const scroll$ = fromEvent(document, 'scroll');

//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map( calculateScroll ),
    tap( console.log )
)

progress$.subscribe(porcentage => {
    progressBar.style.width = ` ${porcentage}%`;
})
