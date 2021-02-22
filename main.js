var character = document.getElementById('character');
let block = document.getElementById('block');

const score = document.getElementById('score');

function jump(){
    if(character.classList != 'animate'){
        character.classList.add('animate')
    }
    setTimeout(()=>{
        character.classList.remove('animate')
    },500)
}


const dead = setInterval(() => {
    
   let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
   let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

   if(blockLeft< 20 && blockLeft > 0 && characterTop >= 123){
       block.style.animation = 'none';
       block.style.display = "none";
    alert('u lose')
   }
},10)


