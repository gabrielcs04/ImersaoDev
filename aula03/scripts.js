let numeroSecreto = parseInt(Math.random() * 10);
let tentativas = 3;

let acertoArea = document.querySelector('#acerto');
acertoArea.innerHTML = `Você tem ${tentativas} tentativa(s)`;

function verificar() {

    if (tentativas > 0) {
        var chute = document.querySelector('#chute').value
        
        if (numeroSecreto == chute) {
            var text = 'Acertou!';
            tentativas = 0;
    
        } else if (chute > numeroSecreto) {
            var text = 'O número secreto é menor!';
            tentativas --;
    
        } else if (chute < numeroSecreto) {
            var text = 'O número secreto é maior!';
            tentativas --;
        }

        if (text != 'Acertou!') {
            acertoArea.innerHTML = `${text} Você tem ${tentativas} tentativa(s)`;
        } else {
            acertoArea.innerHTML = `${text}`;
        }

        document.querySelector("#chute").value = '';
    }

    if (chute != numeroSecreto && tentativas == 0) {
        acertoArea.innerHTML = `Suas tentativas acabaram. O número secreto era ${numeroSecreto}`;
    }

    if (tentativas == 0) {
        var buttonR = document.querySelector('#buttonR');
        buttonR.style.display = 'inline-block';
    }
}

function reiniciar() {
    numeroSecreto = parseInt(Math.random() * 10);
    tentativas = 3;
    
    acertoArea.innerHTML = `Você tem ${tentativas} tentativa(s)`;
    buttonR.style.display = 'none';
}