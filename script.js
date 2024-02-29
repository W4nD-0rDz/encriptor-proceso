/*variables*/
let textIn = document.querySelector(".text-in");
let textOut = document.querySelector(".text-out");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
const codigoEncriptacion = [
   ["e", "enter"],
   ["i", "imes"],
   ["a", "ai"],
   ["o", "ober"],
   ["u", "ufat"],
];
console.log(codigoEncriptacion);

/*funciones*/

/*pasar cadena a minúsculas*/
function minuscula(string){
   let stringMinusculas = string.toLowerCase();
   return stringMinusculas;
}
/*encriptar*/
function encriptar(string) {
   let stringAEncriptar = minuscula(string);

   for (let index = 0; index < codigoEncriptacion.length; index++) {
      if (stringAEncriptar.includes(codigoEncriptacion[index][0])) {
         stringAEncriptar = stringAEncriptar.replaceAll(
            codigoEncriptacion[index][0],
            codigoEncriptacion[index][1]
         );
      }
   }
   return stringAEncriptar;
}

/*desencriptar*/
function desencriptar(string) {
   let stringADesencriptar = string.value;

   for (let index = 0; index < codigoEncriptacion.length; index++) {
      if (stringADesencriptar.includes(codigoEncriptacion[index][1])) {
         stringADesencriptar = stringADesencriptar.replaceAll(
            codigoEncriptacion[index][1],
            codigoEncriptacion[index][0]
         );
      }
   }
   return stringADesencriptar;
}



//Eventos
function btnEncriptar() {
   let stringEncriptado = encriptar(textIn.value);
   textOut.value = stringEncriptado;
   textIn.value = "";

   //para ocultar la imagen que debería estar en el textOut
   textOut.style.backgroundImage = "none";

}

function btnDesencriptar(){
   textOut.value="";
   let stringDesencriptado = desencriptar(textIn);
   textOut.value =stringDesencriptado;
}