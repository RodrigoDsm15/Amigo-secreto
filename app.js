// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('nombreAmigo').value;

    if (!(nombre === "")) {
        listaAmigos.push(nombre);
        limpiarCaja();
  
        console.log(listaAmigos);
    } else {
        alert("Por favor, inserte un nombre");
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#nombreAmigo').value = '';
    return;
}