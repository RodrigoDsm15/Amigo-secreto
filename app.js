//Variables
//Lista de amigos
let listaAmigos = [];
//Elemento <li> a HTML 
let nuevoAmigo = document.getElementById('listaAmigos');
//nombre del amigo secreto
let nombreDeAmigoSecreto = "";

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
        alert("Por favor, ingrese un nombre");
    }
    return;
}

//Actualizar las lista de amigos en HTML
function actualizarListaAmigos() {
    limpiarListaHtml();

    for (let i = 0; i < listaAmigos.length; i++) {
        let elementoHTML = document.createElement('li');
        elementoHTML.innerHTML = listaAmigos[i];
        nuevoAmigo.appendChild(elementoHTML);
    }
    return;
}

//Funcion para limpiar la caja
function limpiarCaja() {
    document.querySelector('#nombreAmigo').value = '';
    return;
}

//Limpiar la lista HTML
function limpiarListaHtml() {
    nuevoAmigo.innerHTML = '';
    return;
}

function sortearAmigo() {
    //Verificar que se encuenrten dos o mas elementos para sortear
    if (listaAmigos.length > 1) {
        //Sorteo aleatonio de amigos
        let nombreElegido = listaAmigos[Math.floor(Math.random()*(listaAmigos.length))];

        limpiarListaHtml();

        nombreDeAmigoSecreto = document.querySelector("#resultado");
        nombreDeAmigoSecreto.innerHTML = `Tu amigo secreto es: ${nombreElegido}`;
        
        desabilitarBoton("#botonAgregar");
        desabilitarBoton("#botonSortear");
        desabilitarBoton("#nombreAmigo");
        habilitarBoton("botonNuevoSorteo");

        limpiarCaja();
        //console.log(numeroGenerado);
        return;
    }
}

//Desabilitar botones
function desabilitarBoton(identificador) {
    document.querySelector(identificador).setAttribute('disabled','true');
    return;
}
//Habilitar botones
function habilitarBoton(element) {
    document.getElementById(element).removeAttribute('disabled');
    return;
}

function condicionesIniciales(params) {
    listaAmigos = [];
    nombreDeAmigoSecreto.innerHTML = "";

    habilitarBoton("botonAgregar");
    habilitarBoton("botonSortear");
    habilitarBoton("nombreAmigo");
    desabilitarBoton("#botonNuevoSorteo");
    return;
}

condicionesIniciales();