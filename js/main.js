
const buttonMenu = document.getElementById('icon');
const links = document.getElementById('links');
let opening = true;

buttonMenu.addEventListener('click', ()=>{
    if(opening){
        links.className = ('links open');
        buttonMenu.classList.toggle('white-text');
        opening = false;
    }else{
        links.className = ('links close');
        buttonMenu.classList.toggle('white-text');
        opening = true;
    }
})
