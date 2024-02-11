
// establecer un puente 
// a traves de  document
// querySelect es un objecto de una clase con metodos
// esto se  le conoce como DOM document Object Model 
let numeroSecreto ;
let intentos;
let listaNumeros = [];
let numeroMax = 10;
let intMax = 5;



function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let Idusuario = document.getElementById("v").value;
    let numeroDeusuario = parseInt(Idusuario);
    
    if(numeroDeusuario===numeroSecreto){
        asignarTextoElemento('p',`adivinaste el numero secreto en  ${intentos-1} ${(intentos === 1)? ' vez':'veces'}!!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else{
        // el usuario no acerto
        if(numeroDeusuario>numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor ');
        }else{
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos++;
        clearBox();
        
        if(intentos > intMax +1){
            asignarTextoElemento('p',`Perdiste, recuerda solo tienes ${intMax} intentos`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }

    }

    return;

}

function condicionesIniciales(){
    asignarTextoElemento('p',`Escoge un numero entre el 1 y ${numeroMax}, solo tienes ${intMax} intentos `);
    asignarTextoElemento('h1','Adivina el Numero Secreto!!!');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMax)+1;
    console.log(numeroGenerado);
    console.log(listaNumeros);
    if(listaNumeros.length == numeroMax){
        asignarTextoElemento('p','Juego Finalizado');
    }else{
    // Si el numero generado esta incluida en la lista
        if (listaNumeros.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function clearBox(){
    document.querySelector('#v').value = '';
    
}


function reiniciarJuego(){
    // limpiar caja
    clearBox();
    // Indicar  mensaje de intervalo de numeros
    // Generar   nuevo y mostrarlo al jugador
    //Desabilitar  el boton de nuevo juego
    condicionesIniciales();
    //Inicializat el numero de intentos
    document.getElementById('reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
/// remind of funtios xd    try to be better 
