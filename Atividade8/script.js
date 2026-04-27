class Pessoa {

    constructor(idade, opiniao, sexo) {
        this.idade = idade;
        this.opiniao = opiniao;
        this.sexo = sexo;
    }
}

const listaPessoas = []

function cadOpiniao() {
    event.preventDefault();

    listaPessoas.push(new Pessoa(
        Number(document.getElementById('idadeInput').value),
        document.getElementById('selectOpiniao').value,
        document.querySelector('input[name="radioSexo"]:checked').value
    ))

    console.log(listaPessoas.at(0).idade)
    console.log(listaPessoas.at(0).opiniao)
    console.log(listaPessoas.at(0).sexo)

    alert("Pesquisa enviada!")

    document.getElementById('formPesquisa').reset();
}

function finalizarPesquisa() {
    let totalIdade = 0
    let qntdPessimo = 0, qntdOtimoBom = 0
    let qntdFem = 0, qntdMasc = 0, qntdOutro = 0

    let pessoaMaisJovem = listaPessoas[0];
    let pessoaMaisVelha = listaPessoas[0];

    listaPessoas.forEach((pessoa) => {
        totalIdade += pessoa.idade

        if (pessoa.opiniao == 0) qntdPessimo++
        else if (pessoa.opiniao == 2 || pessoa.opiniao == 3) qntdOtimoBom++

        if (pessoa.sexo == 0) qntdMasc++
        else if (pessoa.sexo == 1) qntdFem++
        else if (pessoa.sexo == 2) qntdOutro++

        if (idade < pessoaMaisJovem.idade) pessoaMaisJovem = pessoa;
        if (idade > pessoaMaisVelha.idade) pessoaMaisVelha = pessoa;
    })


    alert("Média idade: " + (totalIdade / listaPessoas.length).toFixed(2)
        + "\nMaior idade: " + pessoaMaisVelha.idade
        + "\nMenor idade: " + pessoaMaisJovem.idade
        + "\nQntd de Péssimos: " + qntdPessimo
        + "\nPorcentagem Bom e Ótimo: " + qntdOtimoBom / listaPessoas.length
        + "\nQntd homens: " + qntdMasc
        + "\nQntd mulheres: " + qntdFem
        + "\nQntd outros: " + qntdOutro)

    listaPessoas = []
}

