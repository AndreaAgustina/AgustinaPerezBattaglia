window.onbeforeunload = preguntarAntesDeSalir;

function preguntarAntesDeSalir(){
return "¿Seguro que quieres salir?";
}