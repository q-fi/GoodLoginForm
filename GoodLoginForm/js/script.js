
function change(){
    document.getElementById('cont1').style.zIndex = -1;
    document.getElementById('cont1').style.opacity = 0;
    document.getElementById('cont2').style.zIndex = 1;
}

function change2(){
    document.getElementById('cont1').style.zIndex = 1;
    document.getElementById('cont1').style.opacity = 1;
    document.getElementById('cont2').style.zIndex = -1;
}
