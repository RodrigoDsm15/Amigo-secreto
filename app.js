// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables
//Lista amigos
let listaAmigos = [];
//Agregar elemento a la lista HTML
let nuevoAmigo = document.getElementById('listaAmigos');
//Nombre sorteado
let nombreSorteado = sortearAmigo;

//Funcion para afregar amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById('nombreAmigo').value;
    //Estado de la caja
    if (!(nombre === "")) {
        if (!(listaAmigos.includes(nombre))) {
            listaAmigos.push(nombre);
        } else {
            alert("Ese nombre ya esta agregado");
        }
        limpiarCaja();
        actualizarListaAmigos();
        console.log(listaAmigos);
    } else {
        alert("Por favor, inserte un nombre");
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
    return;
}

//Funcion para conocer a el amigo secreto
function sortearAmigo() {
    if (listaAmigos.length > 0) {
        let numeroGenerado = listaAmigos[Math.floor(Math.random()*(listaAmigos.length))];
        nuevoAmigo.innerHTML = '';
        let nombreDeAmigoSecreto = document.querySelector("#resultado");
        nombreDeAmigoSecreto.innerHTML = `Tu amigo secreto es: ${numeroGenerado}`;
        console.log(numeroGenerado);
        return numeroGenerado;
    }
}