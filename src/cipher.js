window.cipher = {
encode: function  cf (numDesp, nombr) {

    let nomCif= [];

        for(let i=0; i < nombr.length; i++){
          let caract= nombr[i];
          let comAscii= caract.charCodeAt(0);
          let codificando = (comAscii - 65 + numDesp) % 26 + 65;
          let convertir= String.fromCharCode(codificando);
          nomCif.push(convertir);


      }
      return nomCif;
    },

  decode: function df(numDesp, nombr) {

      let nomDescif= [];

          for(let i=0; i < nombr.length; i++){
            let caract= nombr[i];
            let comAscii= caract.charCodeAt(0);
            let decodificando = (comAscii + 65 -numDesp) % 26 + 65;
            let convertir= String.fromCharCode(decodificando);
            nomDescif.push(convertir);


        }
        return nomDescif;
      },


  // ...
};
