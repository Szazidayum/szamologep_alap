
function $(elem){
    return document.querySelectorAll(elem);
}
function CLASS(nev){
    return document.getElementsByClassName(nev);
}
function ID(elem){
    return document.getElementById(elem);
}


function init(){
   gombok();
   for (let index = 0; index < 10; index++) {
        $('.szamok button')[index].addEventListener('click',beletesz,false);
   }
   ID('osszeadas').addEventListener('click',beletesz,false);
   ID('kivonas').addEventListener('click',beletesz,false);
   ID('szorzas').addEventListener('click',beletesz,false);
   ID('osztas').addEventListener('click',beletesz,false);
   ID('.').addEventListener('click',beletesz,false);
   ID('egyenlo').addEventListener('click',beletesz,false);
   ID('torles').removeEventListener('click',beletesz,false);
}
function gombok(){
    var szam = 0;
    for (let index = 0; index < 10; index++) {
        $('.szamok button')[index].innerHTML=szam;
        szam+=1;
    }  
}
function beletesz(){
    event.target.innerHTML;
    console.log(event.target.innerHTML);
    $('.kifejezes')[0].innerHTML+=event.target.innerHTML;
}

window.addEventListener('load',init,false);
