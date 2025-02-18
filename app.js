//Variables
//Lista de amigos
let listaAmigos = [];
//Agregar elemento a la lista HTML
let nuevoAmigo = document.getElementById('listaAmigos');

//Funcion para afregar amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById('nombreAmigo').value;
    //Verificar que la caja no este vacia
    if (!(nombre === "")) {
        //Verificar que el nombre no este en la lista
        if (!(listaAmigos.includes(nombre))) {
            listaAmigos.push(nombre);
        } else {
            alert("Ese nombre ya esta agregado");
        }
        limpiarCaja();
        actualizarListaAmigos();
        //console.log(listaAmigos);
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
    limpiarListaHtml();

    for (let i = 0; i < listaAmigos.length; i++) {
        let elementoHTML = document.createElement('li');
        elementoHTML.innerHTML = listaAmigos[i];
        nuevoAmigo.appendChild(elementoHTML);
    }
    return;
}

//Limpiar la lista HTML
function limpiarListaHtml() {
    nuevoAmigo.innerHTML = '';
    return;
}

//Funcion para conocer a el amigo secreto
function sortearAmigo() {
    //Verificar que se encuenrten dos o mas elementos para sortear
    if (listaAmigos.length > 1) {
        let nombreElegido = listaAmigos[Math.floor(Math.random()*(listaAmigos.length))];
        limpiarListaHtml();
        let nombreDeAmigoSecreto = document.querySelector("#resultado");
        nombreDeAmigoSecreto.innerHTML = `Tu amigo secreto es: ${nombreElegido}`;
        //Desabilitar botones e input para no agregar mas amigos y no volver a sortear
        desabilitarBoton("#botonAgregar");
        desabilitarBoton("#botonSortear");
        desabilitarBoton("#nombreAmigo");
        limpiarCaja();
        //console.log(numeroGenerado);
        return;
    }
}

function desabilitarBoton(identificador) {
    document.querySelector(identificador).setAttribute('disabled','true');
}