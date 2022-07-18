var counter = document.querySelector("#counter")
var buttons = document.querySelector('.btn')
let count = 0;

function changeCounter(buttons) {
    if(buttons == plus){
        count ++;
    }else if(buttons == minus){
        count --;
    }else if (buttons == reset){
        count = 0;
    }
    if (count > 0){
        counter.style.color = 'green';
    }if(count < 0){
        counter.style.color = 'red';
    }
    counter.innerHTML = count;
};