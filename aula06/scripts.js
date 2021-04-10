var jogador01 = {
    nome: "Gabriel",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
}

var jogador02 = {
    nome: "Ranan",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
}

jogador01.pontos = calculaPontos(jogador01);
jogador02.pontos = calculaPontos(jogador02);

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

var jogadores = [jogador01, jogador02];

exibirJogadoresNaTela(jogadores);

function exibirJogadoresNaTela(jogadores) {
    var html = "";
    
    for (let i = 0; i < jogadores.length; i++) {
        html += `<tr><td>${jogadores[i].nome}</td>`
        html += `<td>${jogadores[i].vitorias}</td>`
        html += `<td>${jogadores[i].empates}</td>`
        html += `<td>${jogadores[i].derrotas}</td>`
        html += `<td>${jogadores[i].pontos}</td>`

        html += "<td><button onClick='adicionarVitoria("+ i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td></tr>"
    }
    
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias ++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    for (let ind = 0; ind < jogadores.length; ind++) {
        var jogador = jogadores[ind];
        jogador.empates ++;
        jogador.pontos = calculaPontos(jogador);
        exibirJogadoresNaTela(jogadores);
    }
    
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas ++;
    exibirJogadoresNaTela(jogadores);
}