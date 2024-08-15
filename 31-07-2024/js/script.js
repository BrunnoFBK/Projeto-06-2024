import { aleatorio } from "./aleatorio.js";
import { perguntas } from "./perguntas.js";

const caixaprincipal = document.querySelector(".caixa-principal");
const caixaperguntas = document.querySelector(".caixa-perguntas");
const caixaalternativas = document.querySelector(".caixa-alternativas");
const caixaresposta = document.querySelector(".caixa-resposta");
const textoresultado = document.querySelector(".texto-resultado");


let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;

    }
    perguntaAtual = perguntas[atual];
    caixaperguntas.textContent = perguntaAtual.enunciado;
    caixaalternativas.textContent = "";
    mostraAlternativas();

}

function mostraAlternativas() {
    for (const alternativas of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativas));
        caixaalternativas.appendChild(botaoAlternativas);
    };
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacao + "";
    atual++;
    mostraPergunta()
}

function mostraResultado (){
    caixaperguntas.textContent = "Obrigado!";
    textoresultado.textContent = historiaFinal;
    caixaalternativas.textContent = "";
}

mostraPergunta();

