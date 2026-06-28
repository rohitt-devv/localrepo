const words = [
    "Python Developer",
    "Frontend Developer",
    "Programmer",
    "Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;
        }

    }

    else{

        typing.textContent = currentWord.substring(0,charIndex-1);

        charIndex--;

        if(charIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex===words.length){

                wordIndex=0;
            }

        }

    }

    setTimeout(typeEffect,deleting?60:120);

}

typeEffect();

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

    cards.forEach(card=>{

        const top=card.getBoundingClientRect().top;

        if(top<window.innerHeight-100){

            card.style.opacity="1";

            card.style.transform="translateY(0)";
        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(80px)";

    card.style.transition=".8s";

});