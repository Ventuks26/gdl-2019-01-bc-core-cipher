  const btnC= document.getElementById('cifrar');
    btnC.addEventListener('click', function cifrar () {
  let numDesp = document.getElementById('txNumero').value;
  let nombr = document.getElementById('txNombre').value;

  document.getElementById('result').innerHTML= window.cipher.encode(parseInt(numDesp), nombr);

});

const btnD= document.getElementById('descifrar');
  btnD.addEventListener('click', function descifrar() {
let numDesp = document.getElementById('txNumero').value;
let nombr = document.getElementById('txNombre').value;
document.getElementById('result').innerHTML= window.cipher.decode(parseInt(numDesp), nombr);

});
