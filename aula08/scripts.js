var carta01 = {
    nome: "Messi",
    imagem: "https://img.estadao.com.br/resources/jpg/1/9/1582391516491.jpg",
    atributos: {
        ataque: 93,
        defesa: 38,
        drible: 95
    }
}

var carta02 = {
    nome: "Cristiano Ronaldo",
    imagem: "https://img.estadao.com.br/resources/jpg/8/4/1550670262848.jpg",
    atributos: {
        ataque: 92,
        defesa: 36,
        drible: 89
    }  
}

var carta03 = {
    nome: "Neymar",
    imagem: "https://medias.cnnbrasil.com.br/neymar-comemora-gol-contra-o-olympique-lyonnais.jpeg?format=JPEG&image=https://mediastorage.cnnbrasil.com.br/IMAGES/00/00/00/8661_E70738C3CB0FD632.jpg&width=804&height=588&resize=CROP",
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

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;

    exibeCartaJogador();
}

function exibeCartaJogador() {
    var divCartaJogador = document.querySelector("#carta-jogador");
    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;
    
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    var opcoesTexto = "";
    for(var atributo in cartaJogador.atributos) {
        opcoesTexto += `<input type="radio" name="atributo" value="${atributo}">${atributo} ${cartaJogador.atributos[atributo]} <br>`
    }

    var html = "<div id='opcoes' class='carta-status'>"
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
    
}

function obterAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo');
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    var divResultado = document.querySelector("#resultado");
    var atributoSelecionado = obterAtributoSelecionado();

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = `<p class="resultado-final">Venceu!</p>`;
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = `<p class="resultado-final">Perdeu!</p>`;
    } else {
        htmlResultado = `<p class="resultado-final">Empatou!</p>`;
    }
    divResultado.innerHTML = htmlResultado;
    exibeCartaMaquina();
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.querySelector("#carta-maquina");
    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;
    
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    var opcoesTexto = "";
    for(var atributo in cartaMaquina.atributos) {
        opcoesTexto += `<p type="text" name="atributo" value="${atributo}">${atributo} ${cartaMaquina.atributos[atributo]} </p>`
    }

    var html = "<div id='opcoes' class='carta-status'>"
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
}