
funtion cifrar () =>{
  const numDesp = document.getElementById('txNumero').value;
  const nombr = document.getElementById('txNombre').value;
  document.getElementById("result").value= window.cipher.encode(numDesp, nombr);
}

  document.getElementById("cif").addEventListener("click", cifrar);
