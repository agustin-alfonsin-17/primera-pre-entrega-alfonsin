
const txtOp1 = document.getElementById("op1")
const txtOperador = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)

function calcular(){
    const operacion = txtOperador.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/" ) 
    && !isNaN(op1) && !isNaN(op2)){
       
       let resultado;
       switch (operacion){
        case "+":
            resultado = op1 + op2
            break;
        case "-":
            resultado = op1 - op2
            break;
        case "*":
            resultado = op1 * op2
            break;
        case "/":
            resultado = op1 / op2
            break;
       }
       pResultado.style = "color:black"
        pResultado.innerText = "= " + resultado

    } else{
        pResultado.style = "color:red"
        pResultado.innerText = "calculo imposible"
    }
}



let seleccionUsuario

while (seleccionUsuario != 'casio' && seleccionUsuario != 'hp' && seleccionUsuario != 'royal' && seleccionUsuario != 'kadizz') {

seleccionUsuario = prompt('seleccione que marca de calculadora quiere usar: casio, hp, royal o kadizz').toLocaleLowerCase();

switch (seleccionUsuario){
    case 'casio':
    console.log('usted utilizara calculadora casio');
    break;

    case 'hp':
        console.log('usted utilizara calculadora hp')
        break;

    case 'royal':
        console.log('usted utilizara calculadora royal')
        break;

    case 'kadizz':
        console.log('usted utilizara calculadora kadizz')
        break;
}

}

// for
// sentencia break
for (let i = 1; i <= 25; i++){
  if (i == 11){
    break;
   }
   console.log(i);
}
console.log('termino el ciclo for')