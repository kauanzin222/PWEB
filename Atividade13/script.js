const janela = document.getElementById("imagem")
const titulo = document.getElementById("titulo")
const aviso = document.getElementById("aviso")

const audFechando = new Audio('sons/jan_fec.mp3')
const audAbrindo = new Audio('sons/jan_abri.mp3')
const audQuebrando = new Audio('sons/jan_quebr.mp3')

let estaQuebrada = false

janela.addEventListener('mouseenter', () => {
    if (!estaQuebrada) {
        titulo.innerHTML = "Feche a Janela!"
        janela.src = "src/janelaaberta.jpg"
        audAbrindo.play()
    }
})
janela.addEventListener('mouseleave', () => {
    if (!estaQuebrada) {
        titulo.innerHTML = "Abra a Janela!"
        janela.src = "src/janela_fe.jpg"
        audFechando.play()
    }
})
janela.addEventListener('click', () => {
    titulo.innerHTML = "Meu Deus! Você quebrou a Janela!"
    janela.src = "src/janelaquebrada.jpg"
    audQuebrando.play()

    estaQuebrada = true

    aviso.innerHTML = "Reinicie a página para restaurar a sua Janela :)"
})