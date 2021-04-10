var cotacaoDolar = 5.50

function calcular() {
    var inputValue = document.querySelector("#valorEmDolar").value;
    var valorEmReal = (inputValue * cotacaoDolar).toFixed(2);

    var conversaoArea = document.querySelector('#conversao');

    conversaoArea.style.display = 'block'

    conversaoArea.innerHTML = `U$ ${inputValue} = R$ ${valorEmReal}`;

    document.querySelector("#valorEmDolar").value = ''
}

// const urlCotDolar = 'https://economia.awesomeapi.com.br/json/all/USD-BRL';
// let valorDolarReal = getCotDolar();

// async function getCotDolar () {
//     const response = await fetch(urlCotDolar);
//     const dolar = await response.json();
//     valorDolarReal = dolar.USD;
// }

// console.log(valorDolarReal);