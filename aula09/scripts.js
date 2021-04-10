// Base de dados futura
// https://www.easports.com/fifa/ultimate-team/api/fut/item

init();
var cartaMaquina;
var cartaJogador;
var cartas;
var pontosJogador = 0;
var pontosMaquina = 0;

async function init(){
    await carregarDados();
    await atualizaPlacar();
    await atualizaQuantidadeDeCartas();
}

async function carregarDados() {
    const response = await fetch("./dados.json");
    const json = await response.json();
    cartas = json;
}

// var carta01 = {
//     nome: "Messi",
//     imagem: "https://img.estadao.com.br/resources/jpg/1/9/1582391516491.jpg",
//     atributos: {
//         ataque: 93,
//         defesa: 38,
//         drible: 95
//     }
// }

// var carta02 = {
//     nome: "Cristiano Ronaldo",
//     imagem: "https://img.estadao.com.br/resources/jpg/8/4/1550670262848.jpg",
//     atributos: {
//         ataque: 92,
//         defesa: 36,
//         drible: 89
//     }
// }

// var carta03 = {
//     nome: "Neymar",
//     imagem: "https://medias.cnnbrasil.com.br/neymar-comemora-gol-contra-o-olympique-lyonnais.jpeg?format=JPEG&image=https://mediastorage.cnnbrasil.com.br/IMAGES/00/00/00/8661_E70738C3CB0FD632.jpg&width=804&height=588&resize=CROP",
//     atributos: {
//         ataque: 91,
//         defesa: 36,
//         drible: 94
//     }
// }

// var carta04 = {
//     nome: "Halland",
//     imagem: "https://lagambeta.com/wp-content/uploads/2020/11/0000000000000000000000000000.jpg",
//     atributos: {
//         ataque: 84,
//         defesa: 43,
//         drible: 76
//     }
// }

// var carta05 = {
//     nome: "Mbappé",
//     imagem: "https://futebolatino.lance.com.br/wp-content/uploads/2020/10/mbappe-monta-seu-psg-historico-com-dani-alves-e-yepes-Futebol-Latino-27-10.jpg",
//     atributos: {
//         ataque: 90,
//         defesa: 39,
//         drible: 91
//     }
// }

// var carta06 = {
//     nome: "Lewandowski",
//     imagem: "https://esportenewsmundo.com.br/wp-content/uploads/2020/12/fc-bayern-muenchen-v-1-fc-union-berlin-bundesliga-scaled.jpg",
//     atributos: {
//         ataque: 91,
//         defesa: 43,
//         drible: 86
//     }
// }
//var cartasOld = [carta01, carta02, carta03, carta04, carta05, carta06];


function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.querySelector("#quantidade-cartas");
    var html = `Quantidade de cartas no jogo: ${cartas.length}`;

    divQuantidadeCartas.innerHTML = html;
}

function atualizaPlacar() {
    var divPlacar = document.querySelector("#placar")
    var html = `Jogador ${pontosJogador} | ${pontosMaquina} Máquina`;

    divPlacar.innerHTML = html;
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length - 1);
    cartaMaquina = cartas[numeroCartaMaquina];
    cartas.splice(numeroCartaMaquina, 1);

    var numeroCartaJogador = parseInt(Math.random() * cartas.length - 1);
    cartaJogador = cartas[numeroCartaJogador];
    cartas.splice(numeroCartaJogador, 1);

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;

    exibeCartaJogador();
}

function exibeCartaJogador() {
    var divCartaJogador = document.querySelector("#carta-jogador");
    divCartaJogador.innerHTML = desenhaCarta(cartaJogador, true);

    // var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;

    // divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    // var opcoesTexto = "";
    // for (var atributo in cartaJogador.atributos) {
    //     opcoesTexto += `<input type="radio" name="atributo" value="${atributo}">${atributo} ${cartaJogador.atributos[atributo]} <br>`
    // }

    // var html = "<div id='opcoes' class='carta-status'>"
    // divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.querySelector("#carta-maquina");
    divCartaMaquina.innerHTML = desenhaCarta(cartaMaquina);

    // var moldura = `<img src="https://static.wefut.com/assets/images/fut21/gold1.png?21" style=" width: inherit; height: inherit; position: absolute;">`;

    // divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    // var opcoesTexto = "";
    // for (var atributo in cartaMaquina.atributos) {
    //     opcoesTexto += `<p type="text" name="atributo" value="${atributo}">${atributo} ${cartaMaquina.atributos[atributo]} </p>`
    // }

    // var html = "<div id='opcoes' class='carta-status'>"
    // divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
}

function desenhaCarta(jogador, isUsuario = false){

    let opcoes = ""
    if(isUsuario){
        for (var atributo in jogador.atributos) {
            opcoes += `<label><input type="radio" name="atributo" value="${atributo}">${atributo} ${jogador.atributos[atributo]}</label>`;
        }
    }
    else{
        for (var atributo in jogador.atributos) {
            opcoes += `<label type="text" name="atributo" value="${atributo}"> ${atributo} ${jogador.atributos[atributo]}</label>`;
        }
    }

    const html = 
    `<div class="card">
        <div class="nome">
            <label>${jogador.nome}</label>
        </div>
        <div class="imagem">
            <img src="${jogador.imagem}"/>
        </div>
        <div class="atributos">
            <label>Atributos</label>
            <div class="opcoes">
                ${opcoes}
            </div>
        </div>
    </div>`

    return html;
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
        pontosJogador++;
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = `<p class="resultado-final">Perdeu!</p>`;
        pontosMaquina++;
    } else {
        htmlResultado = `<p class="resultado-final">Empatou!</p>`;
    }

    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;

    atualizaPlacar();
    exibeCartaMaquina();
    atualizaQuantidadeDeCartas();
    verificaResultado();
}

function verificaResultado() {
    if (cartas.length == 0) {
        if (pontosJogador > pontosMaquina) {
            exibeAlerta("Você venceu. Parabéns!");
        } else if (pontosJogador < pontosMaquina) {
            exibeAlerta("Você perdeu. Tente novamente!");
        } else {
            exibeAlerta("Empate. Por pouco!");
        }
        // document.querySelector("#resultado").innerHTML = "";
        
    } else {
        document.getElementById("btnProximaRodada").disabled = false;
    }
}

function exibeAlerta(mensagem) {
    setTimeout(() => {
        alert(`Fim de jogo! ${mensagem}`);
    }, 1000);
}

function proximaRodada() {
    var divCartas = document.querySelector("#cartas");
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnProximaRodada").disabled = true;

    var divResultado = document.querySelector("#resultado");
    divResultado.innerHTML = "";
}