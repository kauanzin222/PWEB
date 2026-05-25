function validarForm(event) {
    event.preventDefault()

    const form = event.target
    const nome = document.form.elements['name'].value.trim()
    const comentario = document.getElementById('comentario').value.trim()

    if (nome.length < 10) {
        alert('Erro! Nome não pode ter menos que 10 caracteres!')
        return
    }
    if (comentario.length < 20) {
        alert('Erro! Comentário não pode ter menos que 20 caracteres!')
        return
    }

    form.reset()
    enviarFeedback()
}

function enviarFeedback() {
    const valorSelecionado = document.querySelector('input[name="radioDefault"]:checked').value

    if (valorSelecionado === "SIM") {
        alert('Formulário Enviado!\nVolte sempre à está página!')
    }
    else {
        alert('Formulário Enviado!\nQue bom que você voltou a visitar esta página!')
    }
}