
class Retangulo {

    constructor(base, altura) {
        this.base = base
        this.altura = altura
    }

    calcArea() {
        return this.base * this.altura
    }
}

document.getElementById('retanguloForm').addEventListener('submit', function (event) {
    const retangulo = new Retangulo(
        parseFloat(document.getElementById("base").value),
        parseFloat(document.getElementById("altura").value))

    alert("A área do Retângulo é: " + retangulo.calcArea())
})
