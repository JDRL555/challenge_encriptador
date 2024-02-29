const input = document.getElementById("texto_encriptar")
const output = document.getElementById("texto_encriptado")

const no_encontrado = document.getElementById("texto_no_encontrado")

const btn_encriptar = document.getElementById("btn_encriptar")
const btn_desencriptar = document.getElementById("btn_desencriptar")
const btn_copiar = document.getElementById("btn_copiar")

btn_encriptar.addEventListener("click", () => {
  if(!input.value) {
    output.style.display = "none"
    no_encontrado.style.display = "block"
    btn_copiar.style.display = "none"
  } else {
    output.style.display = "block"
    no_encontrado.style.display = "none"
    btn_copiar.style.display = "block"
    const texto_encriptado = encriptar(input.value)
    output.innerText = texto_encriptado
  }
})

btn_desencriptar.addEventListener("click", () => {
  if(!input.value) {
    output.style.display = "none"
    no_encontrado.style.display = "block"
    btn_copiar.style.display = "none"
  } else {
    output.style.display = "block"
    no_encontrado.style.display = "none"
    btn_copiar.style.display = "block"
    const texto_encriptado = desencriptar(input.value)
    output.innerText = texto_encriptado
  }
})

btn_copiar.addEventListener("click", () => copiar(output.innerText))