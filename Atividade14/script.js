
function transformarTexto(event) {
    event.preventDefault()

    const valorSelecionado = document.querySelector('input[name="radioDefault"]:checked').value
    const input = document.getElementById('texto')

    if (valorSelecionado == 1) {
        input.value = input.value.toLowerCase()
    }
    else {
        input.value = input.value.toUpperCase()
    }
}