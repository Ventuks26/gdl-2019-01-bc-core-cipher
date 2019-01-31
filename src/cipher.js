window.cipher = {
encode: function  cf (numDesp, nombr) {

    let nomCif= [];

        for(let i=0; i < nombr.length; i++){
          let caract= nombr[i];
          let comAscii= caract.charCodeAt(0);
          //console.log(comAscii);
          let codificando = (comAscii - 65 + numDesp) % 26 + 65;
          let convertir= String.fromCharCode(codificando);
          nomCif.push(convertir);
        //console.log(nomCif);

      }
      return nomCif;
    },

  decode: function df(numDesp, nombr) {

      let nomDecif= [];

          for(let i=0; i < nombr.length; i++){
            let caract= nombr[i];
            let comAscii= caract.charCodeAt(0);
            //console.log(comAscii);
            let decodificando = (comAscii + 65 -numDesp) % 26 + 65;
            let convertir= String.fromCharCode(decodificando);
            nomDecif.push(convertir);
          //console.log(nomCif);

        }
        return nomDecif;
      },


  // ...
};
