
const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

function aplic() {

    let num = [
        Number(document.getElementById('num1').value),
        Number(document.getElementById('num2').value),
        Number(document.getElementById('num3').value)
    ]

    let palin = document.getElementById('stringPalindromo').value.toUpperCase().replace(/\s/g, '')
    let palinInvertida = palin.split("").reverse().join("")


    let plvr1 = document.getElementById('plvr1').value
    let plvr2 = document.getElementById('plvr2').value

    let date = document.getElementById('data').value
    let objetoData = new Date(date + 'T00:00:00')

    alert(
        "O maior número: " + num.reduce((anterior, atual) => { return (atual > anterior) ? atual : anterior })
        + "\nNúmeros em ordem crescente: " + num.sort((a, b) => a - b)
        + "\nA palavra: " + (palin == palinInvertida ? "É UM PALÍNDROMO" : "NÃO É UM PALÍNDROMO")
        + (plvr1 === "" || plvr2 === "" ? "\nERRO" : "")
        + (plvr1.includes(plvr2) ? "\nA 2º palavra é um subconjunto da 1º" : "\nA 2º NÃO é um subconjunto da 1º")
        + "\nO dia da semana é: " + diasDaSemana[objetoData.getDay()])
}


