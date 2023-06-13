const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar(stringEncriptada) {
  const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      const regex = new RegExp(matrizCodigo[i][0], "g");
      stringEncriptada = stringEncriptada.replace(regex, matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
  const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
  for (let i = 0; i < matrizCodigo.length; i++) {
    const regex = new RegExp(matrizCodigo[i][1], "g");
    stringDesencriptada = stringDesencriptada.replace(regex, matrizCodigo[i][0]);
  }
  return stringDesencriptada;
}

function btnEncriptar() {
  const textoEncriptado = textArea.value;
  if (/^[a-z]+$/.test(textoEncriptado)) {
    const textoEncriptadoModificado = encriptar(textoEncriptado);
    mensaje.value = textoEncriptadoModificado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
  } else {
    alert("Ingrese solo letras minúsculas y sin acentos");
  }
}

function btnDesencriptar() {
  let textoDesencriptado;
  if (mensaje.value === "") {
    textoDesencriptado = desencriptar(textArea.value);
    textArea.value = "";
  } else {
    textoDesencriptado = desencriptar(mensaje.value);
  }
  mensaje.value = textoDesencriptado;
}

function btnCopiar() {
  mensaje.select();
  document.execCommand("copy");
  mensaje.value = "";
}

const btnCopiarTexto = document.querySelector(".btn-copiar");
btnCopiarTexto.addEventListener("click", btnCopiar);

const btnDesencriptarTexto = document.querySelector(".btn-desencriptar");
btnDesencriptarTexto.addEventListener("click", btnDesencriptar);