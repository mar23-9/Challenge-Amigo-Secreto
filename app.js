// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosObtenidos = [];

function agregarAmigo (){
    let nombreIngresado = document.getElementById("amigo").value;

    if (nombreIngresado){
        amigos.push(nombreIngresado);
    } else {
        alert('Por favor, inserte un nombre.');
    }
    console.log(amigos);
    listaAmigos();
    limpiarCaja();
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function listaAmigos(){
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = "";
    for (let i = 0; i<amigos.length; i++){
        let listaAmigo = document.createElement("li");
        listaAmigo.innerHTML = amigos[i];
        lista.appendChild(listaAmigo);
    }
}

function sortearAmigo(){
    let indiceAleratorio = Math.floor(Math.random()*amigos.length);
    let resultado = document.getElementById("resultado")
    if(amigos){
        let amigoSecreto = amigos[indiceAleratorio];
        if (!amigosObtenidos.includes(amigoSecreto)){
            amigosObtenidos.push(amigoSecreto);
            console.log(amigosObtenidos);
            resultado.innerHTML = amigoSecreto;
        } else {
            if (amigosObtenidos.length == amigos.length){
                limpiarPrograma();
            } else{
                sortearAmigo();
            }
        }
    }
}

function limpiarPrograma(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    limpiarCaja();
    amigosObtenidos = [];
    amigos = [];
}

