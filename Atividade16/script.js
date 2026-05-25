const select = document.getElementById('cursos')
const confirmacao = document.getElementById('confirmacao')

select.addEventListener('change', function () {
    confirmacao.removeAttribute('hidden')
})

function mostrarCurso() {
    const url = select.value

    if (url) {
        const config = 'width=600,height=300,popup=yes'

        window.open(url, '_blank', config)
        confirmacao.hidden = true
    }
}

function fecharCaixa() {
    confirmacao.hidden = true
}