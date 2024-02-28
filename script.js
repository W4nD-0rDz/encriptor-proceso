/*variables*/
const textIn = document.querySelector(".text-in");
const textOut = document.querySelector(".text-out");

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
function encriptar(string) {
   let stringAEncriptar = string.toLowerCase();

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

//Eventos
function btnEncriptar() {
   const stringEncriptado = encriptar(textIn.value);
   textOut.value = stringEncriptado;
   textIn.value = "";

   //si se quiere ocultar la imagen que debería estar en el textOut
   //textOut.style.backgroundImage = "none";

}
