const caixaprincipal = document.querySelector(".caixa-principal");
const caixaperguntas = document.querySelector(".caixa-perguntas");
const caixaalternativas = document.querySelector(".caixa-alternativas");
const caixaresposta = document.querySelector(".caixa-resposta");
const textoresultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você sabe o que é geometria?",
        alternativas: [
            "Parte da matemática cujo objeto é o estudo do espaço e das figuras que podem ocupá-lo.",
            "Parte da matemática que utiliza somente de triangulos e suas funções"
        ]
    },
    {
        enunciado: "Onde é utilizada?",
        alternativas: [
            "Na engenharia, a arquitetura, a astronomia, as pesquisas nas ciências exatas",
            "É pouco utilizada no dia a dia"
        ]
    },
    {
        enunciado: "E na engenharia civil, como é usada?",
        alternativas: [
            "São através de formas e cálculos geométricos, que profissionais ligados a estas áreas, esboçam as plantas das casas, prédios, ruas, praças.",
            "Não é utilizada"
        ]
    },
    {
        enunciado: "Exemplo de uso, Resolva,Em um terreno retangular, com 25 metros de comprimento e 36 metros de largura, será separada uma região com o formato de um quadrado de lado medindo 7 metros para a construção de um jardim. A área restante do terreno mede:",
        alternativas: [
            "A) 951",
            "B) 949",
            "C) 900",
            "D) 851",
            "E) 849"
        ]
    },
];
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaperguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();

}

function mostraAlternativas() {
    for (const alternativas of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas;
        caixaalternativas.appendChild(botaoAlternativas);
    };
}

mostraPergunta();

