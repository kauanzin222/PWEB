
function mediaResult() {
    nome = document.getElementById('nameInput').value;

    const notas = [
        Number(document.getElementById('nota1').value),
        Number(document.getElementById('nota2').value),
        Number(document.getElementById('nota3').value),
        Number(document.getElementById('nota4').value),
    ];

    let totalNota = 0;
    notas.forEach((nota) => {
        totalNota += nota;
    });

    alert("Nome aluno: " + nome
        + "\nNota aritmética: " + (totalNota / 4)
    );
}

function operResult() {
    num1 = Number(document.getElementById('num1').value);
    num2 = Number(document.getElementById('num2').value);

    alert("Somatória: " + (num1 + num2)
        + "\nSubtração do primeiro pelo segundo: " + (num1 - num2)
        + "\nProduto: " + (num1 * num2)
        + "\nDivisão do primeiro pelo segundo: " + (num1 / num2)
        + "\nResto da divisão do primeiro pelo segundo: " + (num1 % num2)  
    );
}


