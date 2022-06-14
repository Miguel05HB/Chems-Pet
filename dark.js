document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");

    /*GUARDANDO EL MODO NOCTURNO EN LOCALSTORAGE.*/

    if(document.body.classList.contains('dark-theme')){
        localStorage.setItem('dark-mode', 'true');
    }else{
        localStorage.setItem('dark-mode', 'false');
    }
});


    //   OBTENER EL MODO ACUTAL DEL BOTON

    if(localStorage.getItem('dark-mode') === 'true'){
        document.getElementsByTagName('body')[0].classList.add("dark-theme");
    }else{
        document.getElementsByTagName('body')[0].classList.remove("dark-theme");
    }