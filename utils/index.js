function encriptar(texto_encriptar) {
  texto_encriptar = texto_encriptar.toLowerCase()
  const letras = texto_encriptar.split("")
  letras.map((letra, indice) => {
    if(letra === "a") letras[indice] = combinaciones.a
    if(letra === "e") letras[indice] = combinaciones.e
    if(letra === "i") letras[indice] = combinaciones.i
    if(letra === "o") letras[indice] = combinaciones.o
    if(letra === "u") letras[indice] = combinaciones.u
  })
  const nuevo_texto = letras.join("")
  return nuevo_texto
}

function desencriptar(texto_encriptado) {
  texto_encriptado = texto_encriptado.toLowerCase()
  let nuevo_texto = texto_encriptado
  nuevo_texto = nuevo_texto.replaceAll(combinaciones.a, "a")
  nuevo_texto = nuevo_texto.replaceAll(combinaciones.e, "e")
  nuevo_texto = nuevo_texto.replaceAll(combinaciones.i, "i")
  nuevo_texto = nuevo_texto.replaceAll(combinaciones.o, "o")
  nuevo_texto = nuevo_texto.replaceAll(combinaciones.u, "u")
  return nuevo_texto
}

function copiar(texto_encriptado) {
  navigator.clipboard
  .writeText(texto_encriptado)
  .then(() => {
    alert("Texto copiado!")
  })
}