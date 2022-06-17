const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
const tronco = document.querySelector('.tronco');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    },600);

    
}

const loop = setInterval(()=>{
   /*tronco.style.display = 'none';*/
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' ,'');
    window.console.log(pipePosition);

    if(pipePosition <= 50 && pipePosition > 0 && marioPosition < 50){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src= './img/gamer-over-2.png';
        mario.style.width = '75px';
        cloud.style.animation = 'none';
       

        clearInterval(loop);

    }else if(pipePosition <= 5  && pipePosition > 2 ) {
        /*após chegar no fim 3 vezes alterar o obstáculo */
        pipe.style.display = 'none';
        const troncoPosition = tronco.offsetLeft;
        tronco.style.display = 'inline';



    }



    
}, 10);


document.addEventListener('keydown', jump);


