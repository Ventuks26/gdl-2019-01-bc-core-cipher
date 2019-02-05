window.onload =  function  () {
  const btnC= document.getElementById('cifrar');
    btnC.addEventListener('click', function cifrar () {
  let numDesp = document.getElementById('txNumero').value;
  let nombr = document.getElementById('txNombre').value;
  window.cipher.encode(numDesp, nombr);
  document.getElementById('result').innerHTML= window.cipher.encode(numDesp, nombr);

})

const btnD= document.getElementById('descifrar');
  btnD.addEventListener('click', function descifrar() {
let numDesp = document.getElementById('txNumero').value;
let nombr = document.getElementById('txNombre').value;
window.cipher.decode(numDesp, nombr);
document.getElementById('result').innerHTML= window.cipher.decode(numDesp, nombr);

})

}
