const caixaprincipal = document.querySelector(".caixa-principal");
const caixaperguntas = document.querySelector(".caixa-perguntas");
const caixaalternativas = document.querySelector(".caixa-alternativas");
const caixaresposta = document.querySelector(".caixa-resposta");
const textoresultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você sabe o que é geometria?",
        alternativas: [
            {
                texto:"Parte da matemática que ocupa somente triangulos",
                afirmacao:"afirmacao",
                

            },
            {
                texto:"Parte da matemática cujo objeto é o estudo do espaço e das figuras que podem ocupá-lo.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Onde é utilizada?",
        alternativas: [
            {
                texto:"Na engenharia, a arquitetura, a astronomia, as pesquisas nas ciências exatas",
                afirmacao:"afirmacao"
            },
            {
                texto:"é pouco utilizada no dia a dia",
                afirmacao:"afirmacao"

            }
            
            
        ]
    },
    {
        enunciado: "E na engenharia civil, como é usada?",
        alternativas: [
            {
            texto:"São através de formas e cálculos geométricos, que profissionais ligados a estas áreas, esboçam as plantas das casas, prédios, ruas, praças.",
            afirmacao:"afirmacao"
        },
        {
            texto:"Não é utilizada",
                afirmacao:"afirmacao"
        }
            
        ]
    },
    {
        enunciado: "Você gostou de saber sobre?",
        alternativas: [
            {
                texto:  "Sim!",
                afirmacao: "afirmacao"
            }
            
        ]
    },
];
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
    const afirmacao = opcaoSelecionada.afirmacao;
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

