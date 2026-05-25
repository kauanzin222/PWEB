
var contId = 0
var mediaAlunos = []

function cadastrarAluno(event) {
    event.preventDefault()

    const form = event.target
    const nome = document.getElementById('nome').value
    const ra = document.getElementById('ra').value
    const media = (
        parseFloat(document.getElementById('nota1').value)
        + parseFloat(document.getElementById('nota2').value)
        + parseFloat(document.getElementById('nota3').value)) / 3;

    mediaAlunos.push(media)
    const tab = document.getElementById('corpoTab')

    tab.innerHTML +=
        `<tr>
      <th scope="row">${++contId}</th>
      <td>${nome}</td>
      <td>${ra}</td>
      <td>${media.toFixed(1)}</td>
    </tr>`

    form.reset()
}

function mostrarMediaGeral() {
    let soma = 0

    mediaAlunos.forEach((media) =>
        soma += media
    )

    alert(`Média Geral: ${(soma / contId).toFixed(1)}`)
}