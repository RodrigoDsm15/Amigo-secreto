// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Lista amigos
let listaAmigos = [];
//Variable para agregar elemento a la lista HTML
let nuevoAmigo = document.getElementById('listaAmigos');

//Funcion para afregar amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById('nombreAmigo').value;
    //Estado de la caja
    if (!(nombre === "")) {
        listaAmigos.push(nombre);
        limpiarCaja();
        actualizarListaAmigos();
        console.log(listaAmigos);
    } else {
        alert("Por favor, inserte un nombre");
        listaAmigos.innerHTML = "";
    }
    return;
}

//Funcion para limpiar la caja
function limpiarCaja() {
    document.querySelector('#nombreAmigo').value = '';
    return;
}

//funcion que actualizar las lista de amigos en HTML
function actualizarListaAmigos() {
    nuevoAmigo.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        let elementoHTML = document.createElement('li');
        elementoHTML.innerHTML = listaAmigos[i];
        nuevoAmigo.appendChild(elementoHTML);
    }
}

/*
function asignarTextoElemento(elemento) {
    listaAmigo.innerHTML = '';
    for (let i = 0; i < listaAmigo.length; i++) {
        let elementoHTML = document.createElement(elemento);
        elementoHTML.innerHTML = listaAmigo[i];
        document.getElementById("listaAmigos").appendChild(elementoHTML);
    }
    return;
}
    */