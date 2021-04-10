var primeiroValor = parseFloat(prompt('Digite o 1º valor:'));
var segundoValor = parseFloat(prompt('Digite o 2º valor:'));

var operacao = prompt('Digite 1 para DIVIDIR, 2 para MULTIPLICAR, 3 para SOMAR e 4 para SUBTRAIR:')

if (operacao == 1) {
    var conta = primeiroValor / segundoValor;
    var simbolo = '/'

} else if (operacao == 2) {
    var conta = primeiroValor * segundoValor;
    var simbolo = 'x'

} else if (operacao == 3) {
    var conta = primeiroValor + segundoValor;
    var simbolo = '+'

} else if (operacao == 4){
    var conta = primeiroValor - segundoValor;
    var simbolo = '-'

} else {
    document.write(`<h2> Opção Inválida! </h2>`);
}

if (operacao >=1 && operacao <= 4) {
    document.write(`<h2> ${primeiroValor} ${simbolo} ${segundoValor} = ${conta} </h2>`);
}
