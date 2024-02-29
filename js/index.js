const input = document.getElementById("texto_encriptar")
const output = document.getElementById("texto_encriptado")

const btn_encriptar = document.getElementById("btn_encriptar")
const btn_desencriptar = document.getElementById("btn_desencriptar")

btn_encriptar.addEventListener("click", () => {
  const texto_encriptado = encriptar(input.value)
  output.innerText = texto_encriptado
})

btn_desencriptar.addEventListener("click", () => {
  const texto_encriptado = desencriptar(input.value)
  output.innerText = texto_encriptado
})