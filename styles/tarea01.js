////EJERCICIO 01

let num01;
let num02;

function sumar(num01, num02){
    let suma;
    return suma = num01 + num02; 
}

//EJERCICIO 02

let nota01;
let nota02;
let nota03;
let nota04;

function SumaNotas(nota01, nota02, nota03,nota04){
    let sumaDatos
    sumaDatos = nota01 + nota02 + nota03 + nota04
    return sumaDatos
}

//EJERCIcio 03-04-05

let base;
let altura;
let perimetro;
let area;

function areaRectangulo(base,altura){
 
    area = base*altura;
    return area; 
}

function areaTriangulo(base,altura){
 
    area = (base * altura)/2;
     return area;
}

function areaCircunferencia(radio){
     
    area = (radio**2)*3.14;
    return area;
}


//EJERCICIO 06

let salarioHoraHombre
let horaTrabajo

function sueldoTrabajador(salarioHoraHombre,horaTrabajo){
    let sueldoSemanal;
    sueldoSemanal =salarioHoraHombre*horaTrabajo;
    console.log("sueldo semanal",sueldoSemanal)
    return sueldoSemanal

}

//Ejercicio 07
let   pulgadas;	

function convertirPulgadas(pulgadas){
        let convertirAPulgadas
        convertirAPulgadas = pulgadas*39.37
        console.log("total de tela en pulgadas a pedir",convertirAPulgadas)
        return convertirAPulgadas;
} 

//Ejercicio 08

let soles;
let valorSol = 4.10;
	
function convertirDolaresAmericanos(soles) {
    console.log("tipo de cambio dolar 4.10");
    let dolares=soles/valorSol;
    console.log("dolares a cambiar es $$$$", dolares);
     
}

//ejericio09
let anio
function edadPostulante(anio){
  let edad;
  edad = 2021-anio;
  console.log("Edad del postulante es: ", edad)
 
}

//ejericio10
function persona() {
    

    let persona01 = {
        nombre: "jose luis Garcia",
        edad: 16,
    }

    let persona02 = {
        nombre: "adriel quintana",
        edad: 181,
    }

    let persona03 =  {
        nombre: "luis alberto",
        edad: 31,
    }

    if (persona01.edad > persona02.edad && persona01.edad > persona03.edad){
        for (const key in persona01) {
            console.log("persona de menor edad es: ",`${key}: ${persona01[key]}`);
        }

    } else if (persona02.edad > persona01.edad && persona02.edad > persona03.edad){

        for (const key in persona02) {
            console.log("persona de menor edad es: ",`${key}: ${persona02[key]}`);
      }
    } else {
        for (const key in persona03) {
            console.log("persona de menor edad es: ",`${key}: ${persona03[key]}`);

        }
    }
}
//persona();
//Ejercicio11
function antiguedadTienda(){
    
    const antiguedad = 7;
    
    switch (antiguedad) {
      case 1:
        console.log('bono de $100');
        break;
      case 2:
        console.log('bono de $200');
        break;

      case 3:
        console.log('bono de $300');
        break;
      case 4:
        console.log('bono de $400');
        break;
      case 5:
        console.log('bono de $500');
        break;
      
      default:
        console.log(`bono de $1000`);
    }
}

//antiguedadTienda();


//12.	Un profesor tiene un salario inicial de $1500, y recibe un incremento de
// 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario
// ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la
// solución, utilizando el ciclo apropiado.

//ejercicio12
function  salarioTotal() {
  let salario = 1500;
  let incremento = 0.1;
  let salarioxAño;

  for (let i = 1; i <= 6; i++){
    salarioAño = salario + (salario*incremento);
    console.log("salario para el año  ["+i+"]",Math.round(salarioAño));
    salario=salarioAño;
  }

}

//salarioTotal();
//ejercicio 13
function alumnosAyD() {
  let aprobado = 0;
  let desaprobado = 0;
  let nroEstudiantes = prompt("Ingrese nro estudiantes:");
  for (i = 0; i < nroEstudiantes; i++) {
      let nota = prompt(`Ingrese nota ${i + 1}`)
      if (nota >= 11)
          aprobado = aprobado + 1;
      else
          desaprobado = desaprobado + 1;
  }
  console.log(`Total de aprobados: ${aprobado}`);
  console.log(`Total de desaprobados: ${desaprobado}`);
}

//alumnosAyD();

//Ejercicio 14:

//14.	Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea
//contabilizar, de un lote de N focos, el número de focos de cada color que hay
// en existencia.

function focosColores() {

  let focoVerde = 0;
  let focoBlanco = 0;
  let focoRojo = 0 ;

  debugger;
  let numeroFocos = prompt("ingrese numero de focos");
  for (i = 0; i < numeroFocos; i++) {
    const foco = prompt(`Ingrese color foco ${i + 1}`)
    switch (foco) {
       
        case 'verde':
            focoVerde ++;
            break;
        case 'blanco':
            focoBlanco ++;
            break;
        case 'rojo':
            focoRojo ++;
            break;
        default:
            prompt(`elige color verde , blanco  u rojo no otros: ${foco}`);
            break;
    }
    
   
}
console.log("total de focos verdes:",focoVerde);
console.log("total de focos verdes:",focoRojo);
console.log("total de focos verdes:",focoBlanco);
  
}

//focosColores();