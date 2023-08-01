function incognita() {
    var x = parseInt(document.getElementById("valorx").value);
    var resultadoElement = document.getElementById("resultado");
    
    if (x === numeroAleatorio) {
    resultadoElement.textContent = "Parabéns! Você acertou o número. Jogue mais uma vez!";
    } else if (x < numeroAleatorio) {
    resultadoElement.textContent = "O número digitado é MENOR do que o número gerado para adivinhação. Tente mais uma vez.";
resultadoElement.textContent = `numero incorreto, tente dnv `
    } else {
    resultadoElement.textContent = "O número digitado é MAIOR do que o número gerado para adivinhação. Tente mais uma vez.";
    }
}
    
    var numeroAleatorio = Math.floor(Math.random() * 100) + 1;