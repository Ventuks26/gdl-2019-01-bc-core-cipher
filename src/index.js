
const numDesp = document.getElementById('txNumero').value;
const nombr = document.getElementById('txNombre').value;
document.getElementById('cif').addEventListener("click", cifrar);

  function cifrar(nombr, numDesp) {

let encode= "";//variable vacia para poder guardar lo que va codificando
console.log(nombr,nombr.length);
       for(let i= 0; i <nombr.length; i++){
const nombr= text.CharCodeAt(i);// traduce las letras a ascii

        if(65 <= nombr && nombr <= 90) {
          encode += string.formCharCode(((nombr-65+numDesp)) %26)+65
        }
          else{
            encode+=nombr.charAt(i);
          }
}
    return encode;




}
console.log(cifrar(nombr, numDesp));
