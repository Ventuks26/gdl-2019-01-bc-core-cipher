window.cipher = {
encode: function  cf (numDesp, nombr) {
  console.log(typeof numDesp + " "+ nombr );

    let nomCif= [];


        for(let i=0; i < nombr.length; i++){
          let comAscii= nombr.charCodeAt(i);
          let codificando = ((comAscii - 65 + numDesp) % 26) + 65;
          let convertir = String.fromCharCode(codificando);
          nomCif.push(convertir);


      }
      return nomCif;
    },

  decode: function df(numDesp, nombr) {

      let nomDescif= [];

          for(let i=0; i < nombr.length; i++){
            let comAscii= nombr.charCodeAt(i);
            let decodificando = (comAscii + 65 -numDesp) % 26 + 65;
            let convertir= String.fromCharCode(decodificando);
            nomDescif.push(convertir);


        }
        return nomDescif;
      },


  // ...
};
