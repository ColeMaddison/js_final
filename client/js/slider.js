"use strict";

$(document).ready(() => {
    let sampleText = $('.rslides li');
    let current = 0;
    change();

    $('.slideLeft').click(() => {
        change(-1);
    });
    $('.slideRight').click(() => {
        change(1);
    });
    function change(slide){
        if(slide < 0){current--;}
        if(current < 1){current = sampleText.length}
        if(slide < 0){current--;}
        current++;
        if(current > sampleText.length){current = 1;}

        if(slide){
            clearInterval(timer);
            timer = setInterval(change, 2000);
        }
        for(let i = 0; i < sampleText.length; i++){
            sampleText[i].classList.add('hideLi');
        }
        sampleText[current-1].classList.remove('hideLi');
    };
    let timer = setInterval(change, 2000); 

});

