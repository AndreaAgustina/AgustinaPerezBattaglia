let edad;
edad = Number((prompt("¿Que edad tienes?")));
if (edad >=18){
    alert("Puedes entrar, eres mayor de edad");
} else {
    alert("Eres menor de edad, ingresa bajo tu responsabilidad");
    
}

window.onbeforeunload = preguntarAntesDeSalir;

function preguntarAntesDeSalir(){
return "¿Seguro que quieres salir?";
}