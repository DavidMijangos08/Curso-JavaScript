//Agrega a la pantalla el valor del botón que toquemos
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

//Borra los elementos de la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}

//Toma el valor de la pantalla y ejecuta los calculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    let resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}