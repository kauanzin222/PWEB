document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }
    
    const imc = peso / (altura * altura);
    let categoria = '';
    
    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        categoria = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        categoria = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 40) {
        categoria = 'Obesidade grau 2';
    } else {
        categoria = 'Obesidade grau 3';
    }
    
    alert(`Seu IMC é ${imc.toFixed(2)}. Categoria: ${categoria}`);
});