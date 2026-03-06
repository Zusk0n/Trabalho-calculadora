// Função que é executada toda vez que clicamos em um número ou operador
function digitar(caractere) {
    // 1. Criamos um "atalho" para encontrar o visor do HTML pelo ID
    let visor = document.getElementById("visor");
 
    // 2. Se o visor estiver mostrando apenas o "0" (estado inicial)...
    if (visor.value == "0") {
        // ...nós substituímos esse "0" pelo caractere que o usuário clicou
        visor.value = caractere;
    } else {
        // 3. Caso contrário, nós "grudamos" o novo caractere ao que já estava lá
        // Exemplo: se já tinha "1" e clicou "2", o visor passa a ter "12"
        visor.value = visor.value + caractere;
    }
}
// Função responsável por resetar a calculadora (botão C)
function limpar() {
    // Localiza o visor e volta o texto dele para "0"
    document.getElementById("visor").value = "0";
}

// Função que processa toda a expressão matemática (botão =)
function calcular() {
    // Busca o visor para ler a conta que está escrita nele
    let visor = document.getElementById("visor");
    
    // 1. O comando 'eval' lê o texto (ex: "5+5") e o resolve como matemática (10)
    let resultado = eval(visor.value);
    
    // 2. TRATAMENTO DE ERRO: Se o resultado for infinito (divisão por zero)
    // ou se o resultado não for um número (NaN)...
	
    if (resultado == Infinity ) {
        // ...nós forçamos o valor a ser "0" para não assustar o usuário
        resultado = 0;
    }

    // 3. Finalmente, mostramos o resultado final (limpo) de volta no visor
    visor.value = resultado;

}
//  BHASKARA
function calcularBhaskara() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let resultado2 = document.getElementById("resultado2");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultado2.innerHTML = "Digite valores válidos.";
        return;
    }

    if (a === 0) {
        resultado2.innerHTML = "A não pode ser 0.";
        return;
    }

    let delta = b*b - 4*a*c;

    if (delta < 0) {
        resultado2.innerHTML = "Sem raízes reais.";
        return;
    }

    let x1 = (-b + Math.sqrt(delta)) / (2*a);
    let x2 = (-b - Math.sqrt(delta)) / (2*a);

    resultado2.innerHTML =
        "Delta: " + delta + "<br>" +
        "X1: " + x1 + "<br>" +
        "X2: " + x2;
    }