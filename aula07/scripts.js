var carta01 = {
    nome: "Messi",
    atributos: {
        ataque: 93,
        defesa: 38,
        drible: 95
    }
}

var carta02 = {
    nome: "Cristiano Ronaldo",
    atributos: {
        ataque: 92,
        defesa: 36,
        drible: 89
    }  
}

var carta03 = {
    nome: "Neymar",
    atributos: {
        ataque: 91,
        defesa: 36,
        drible: 94
    }  
}

var cartaMaquina;
var cartaJogador;

var cartas = [carta01, carta02, carta03];

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;
    exibirOpcoes();
}

function exibirOpcoes() {
    var opcoes = document.querySelector("#opcoes");
    var opcoesTexto = "";
    for(var atributo in cartaJogador.atributos) {
        opcoesTexto += `<input type="radio" name="atributo" value="${atributo}">${atributo}`
    }
    opcoes.innerHTML = opcoesTexto;
}

function obterAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo');
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            console.log(radioAtributo[i].value);
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obterAtributoSelecionado();

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        alert("Você venceu a carta da máquina!")
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        alert("Você perdeu para a carta da máquina!")
    } else {
        alert("Você empatou com a carta da máquina!")
    }
    console.log(cartaMaquina)
}