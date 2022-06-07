
const whole_doc = document.querySelector('main');
const inner_ball = document.getElementsByClassName('styl_inner_eye');
const sec = document.querySelector('section');

const p = document.querySelector('p');

// console.log(whole_doc);

whole_doc.addEventListener('mousemove',function(e){
    let x = e.clientX*70 / window.innerWidth + '%';
    let y = e.clientY*70 / window.innerHeight + '%';
    
    // let ye = e.clientY; 
    // p.innerHTML = ye;

    // for (var i= 0; i < 2; i++){
    //     inner_ball[i].style.left = x;
    //     inner_ball[i].style.top = y;   


    // }

    for (let move of inner_ball) {
        
        let xx = e.clientX*5 / window.innerWidth + '%';
        let yy = e.clientY*5 / window.innerHeight + '%';

        if (whole_doc) {
            move.style.left = x;
            move.style.top = y; 
            move.style.transform = "translate(-"+xx+",-"+yy+")";   
        }else{

        }
    }
});

                // move.style.top = `${12.7}vw`; 
                // move.style.left = `${6.5}vw`;