const change = document.getElementById("change")

function change_data(){

    document.getElementsByTagName('div')[3].innerHTML='Dyachkova'
    document.getElementsByTagName('div')[4].innerHTML='Ekaterina'
    document.getElementsByTagName('div')[5].innerHTML='Maksimovna'
}
change.addEventListener("click",change_data)