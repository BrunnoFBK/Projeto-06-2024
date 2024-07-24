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
        enunciado: "Exemplo de uso, Resolva,Em um terreno retangular, com 25 metros de comprimento e 36 metros de largura, será separada uma região com o formato de um quadrado de lado medindo 7 metros para a construção de um jardim. A área restante do terreno mede",
        alternativas: [
            {
                texto:  "A) 951",
                afirmacao : "errada"
            },
            {
                texto:  "A) 949",
                afirmacao : "errada"
            },
            {
                texto:  "A) 900",
                afirmacao : "errada"
            },
            {
                texto:  "A) 852",
                afirmacao : "afirmacao"
            }
            
            
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
        botaoAlternativas.textContent = alternativas.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        })
        caixaalternativas.appendChild(botaoAlternativas);
    };
}

mostraPergunta();

