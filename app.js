function get_num_aleatorio() {
    if (listaDeNumerosNaoSorteados.length == 0) {
        listaDeNumerosNaoSorteados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    let indexSorteado = parseInt(Math.random() * listaDeNumerosNaoSorteados.length);
    let numeroSorteado = listaDeNumerosNaoSorteados[indexSorteado];
    listaDeNumerosNaoSorteados.splice(indexSorteado, 1);
    return numeroSorteado;
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    tentativas++;
    
    if (chute == numero_secreto){
        exibirNaTela('h1', 'Você Acertou!');
        mensagemFimDoJogo();
        ativarReiniciar();
    } else if (chute > numero_secreto) {
        exibirNaTela('p', 'O número secreto é menor.');
    } else {
        exibirNaTela('p', 'O número secreto é maior.');
    }
    limparCampo();
}

function mensagemFimDoJogo() {
    if (tentativas == 1) {
        exibirNaTela('p', `Você descobriu o número secreto de primeira!!!`);
    } else {
        exibirNaTela('p', `Você descobriu o número secreto com \n${tentativas} tentativas.`);
    }
}

function comecarJogo() {
    exibirNaTela('h1', 'Jogo do número secreto');
    exibirNaTela('p', 'Escolha um número de 1 a 10');
    numero_secreto = get_num_aleatorio();
    tentativas = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chutar').removeAttribute('disabled');
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function ativarReiniciar() {
    console.log(document.getElementById('reiniciar').getAttribute('disabled'));
    document.getElementById('reiniciar').removeAttribute('disabled');
    console.log(document.getElementById('reiniciar').getAttribute('disabled'));
    document.getElementById('chutar').setAttribute('disabled', true);
}

function exibirNaTela(alvo, conteudo) {
    let area = document.querySelector(alvo);
    area.innerHTML = conteudo;
    responsiveVoice.speak(conteudo, "Brazilian Portuguese Female", {rate: 1.2});
}

let numero_secreto;
let tentativas;
let listaDeNumerosNaoSorteados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
comecarJogo();