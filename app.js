// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    nuevoAmigo = document.getElementById("amigo").value;
    
    if (nuevoAmigo == "") {
        alert("Por favor, inserte un nombre.");
    }
    else{
        amigos.push(nuevoAmigo);
        document.getElementById("amigo").value = "";

        console.log(amigos)
    }
}

function sortearAmigo(){
    if (amigos.length == 0){
        alert("Debe de agregar a sus amigos antes de sortear");
    }
    else{
        indiceAleatorio = Math.floor(Math.random() * amigos.length);
        ganador = amigos[indiceAleatorio];
        
        document.getElementById("resultado").innerHTML = `<li>${ganador}</li>`;
    }
}
