window.cipher = {
encode: function  cf (numDesp, nombr) {
  let nombre= nombr.toUpperCase();
  let arreglo= nombre.split(" ");
  let nomCif= [];

   for (let j=0; j<arreglo.length; j++) {
     let palabra= arreglo[j];
     for(let i=0; i < palabra.length; i++){
       let letra= palabra[i];
       let comAscii= letra.charCodeAt(0);
       let codificando = (comAscii - 65 +numDesp) % 26 + 65;
       let convertir= String.fromCharCode(codificando);
       nomCif.push(convertir);


     }
     nomCif.push(" ");
    }
     let cadenaFinal= nomCif.join("");
      return cadenaFinal.trim();
    },

  decode: function df(numDesp, nombr) {

      let nombre= nombr.toUpperCase();
      let arreglo= nombre.split(" ");
      let nomDescif= [];

       for (let j=0; j<arreglo.length; j++) {
         let palabra= arreglo[j];
         for(let i=0; i < palabra.length; i++){
           let letra= palabra[i];
           let comAscii= letra.charCodeAt(0);
           let decodificando = (comAscii + 65 -numDesp) % 26 + 65;
           let convertir= String.fromCharCode(decodificando);
           nomDescif.push(convertir);


         }
         nomDescif.push(" ");
        }
         let cadenaFinal= nomDescif.join("");
          return cadenaFinal.trim();
        },




  // ...
};
