
// -----------------------------------------------------------------------------

const container = document.getElementById("container")
const rdCorrente = document.getElementById("radioCorrente")
const rdPoupanca = document.getElementById("radioPoupanca")

rdCorrente.addEventListener('change', (event) => {
    container.innerHTML =
        `<div class="col-md-6 mt-3">
            <label for="saldoEsp" class="form-label fw-bold">Saldo Especial:</label>
            <input type="number" class="form-control" id="saldoEsp" step="0.01" required>
        </div>`
})

rdPoupanca.addEventListener('change', (event) => {
    container.innerHTML =
        `<div class="col-md-6 mt-3">
            <label for="juros" class="form-label fw-bold">Juros:</label>
            <input type="number" class="form-control" id="juros" step="0.01" required>
        </div>
        <div class="col-md-6">
            <label for="dataVenc" class="form-label fw-bold">Data Vencimento:</label>
            <input type="date" class="form-control" id="dataVenc" step="0.01" required>
        </div>`
})

class Conta {

    constructor(nome, banco, numeroConta, saldo) {
        this.nome = nome
        this.banco = banco
        this.numeroConta = numeroConta
        this.saldo = saldo
    }

    mostrarDados(){
        return "\nNome: " + this.nome + 
                "\nBanco: " + this.banco +
                "\nNúmero da Conta: " + this.numeroConta +
                "\nSaldo: " + this.saldo
    }
}

class Poupanca extends Conta {

    constructor(nome, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nome, banco, numeroConta, saldo)
        this.juros = juros
        this.dataVencimento = dataVencimento
    }

    mostrarDados() {
        return super.mostrarDados() + "\nJuros: " + this.juros +
                                    "\nData Vencimento: " + this.dataVencimento + "\n\n"
    }
}

class Corrente extends Conta {

    constructor(nome, banco, numeroConta, saldo, saldoEsp) {
        super(nome, banco, numeroConta, saldo)
        this.saldoEsp = saldoEsp
    }

    mostrarDados() {
        return super.mostrarDados() + "\nSaldo Especial: " + this.saldoEsp + "\n\n"
    }
}

let contas = []
document.getElementById('contaForm').addEventListener('submit', function (event) {
    const tipoConta = document.querySelector('input[name="radioDefault"]:checked')

    const nome = document.getElementById('nome').value
    const banco = document.getElementById('banco').value
    const numeroConta = parseInt(document.getElementById('numero').value)
    const saldo = parseFloat(document.getElementById('saldo').value)

    if (tipoConta === "CORRENTE") {
        let novaConta = new Corrente(nome, banco, numeroConta, saldo,
            parseFloat(document.getElementById('saldoEsp').value)
        )
    }
    else {
        let novaConta = new Poupanca(nome, banco, numeroConta, saldo,
            parseFloat(document.getElementById('juro')),
            document.getElementById('dataVenc')
        )
    }

    contas.push(novaConta)

    alert("Conta criada com sucesso!")
})

const resultContainer = document.getElementById("resultContainer");

function atualizarExibicao() {
    let htmlGerado = "";
    
    const formatador = new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });

    contas.forEach((conta, index) => {
        let dadoExtra = "";
        let badgeColor = "";

        if (conta instanceof Corrente) {
            dadoExtra = `<p class="card-text"><strong>Saldo Especial:</strong> ${formatador.format(conta.saldoEsp)}</p>`;
            badgeColor = "text-bg-primary";
        } else {
            dadoExtra = `
                <p class="card-text"><strong>Juros:</strong> ${conta.juros}%</p>
                <p class="card-text"><strong>Vencimento:</strong> ${conta.dataVencimento}</p>`;
            badgeColor = "text-bg-success";
        }

        htmlGerado += `
            <div class="col-md-4 mb-3">
                <div class="card shadow-sm">
                    <div class="card-header ${badgeColor} d-flex justify-content-between">
                        <span>Conta #${conta.numeroConta}</span>
                        <small>${conta instanceof Corrente ? 'Corrente' : 'Poupança'}</small>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${conta.nome}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${conta.banco}</h6>
                        <hr>
                        <p class="card-text text-success fw-bold">Saldo: ${formatador.format(conta.saldo)}</p>
                        ${dadoExtra}
                    </div>
                </div>
            </div>`;
    });

    resultContainer.innerHTML = `<div class="row">${htmlGerado}</div>`;
}



