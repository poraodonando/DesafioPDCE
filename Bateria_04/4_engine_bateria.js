
/* ==========================================
   PERGUNTAS
========================================== */


const perguntas = [

    {
        pergunta:
        "Como se chama as perdas humanas, materiais ou ambientais.",

        respostas:
        ["danos"]
    },


    {
        pergunta:
        "Qual é o nome do evento que acontece quando um evento adverso causa grandes danos às pessoas, ao ambiente e aos bens, ultrapassando a capacidade da comunidade de lidar com a situação.",

        respostas:
        ["desastre"]
    },


    {
        pergunta:
        "Qual é o numero da defesa civil?",

        respostas:
        ["199"]
    },


    {
        pergunta:
        "Qual é o significado do R: acontece quando um evento adverso causa grandes danos às pessoas, ao ambiente e aos bens, ultrapassando a capacidade da comunidade de lidar com a situação.",

        respostas:
        ["repensar"]
    },


    {
        pergunta:
        "Os resíduos orgânicos podem ser colocados em composteiras e transformados em...",

        respostas:
        ["adubo"]
    },


    {
        pergunta:
        "COmo se chama a solução baseada na natureza que conectam áreas de floresta, permitindo a circulação dos animais e contribuindo para a biodiversidade.",

        respostas:
        ["corredores ecológicos"]
    },


    {
        pergunta:
        "Quem tem como principal função realizar resgates e socorros imediatos",

        respostas:
        ["bombeiros"]
    },


    {
        pergunta:
        "Qual é a cigla do Programa de Defesa Civil na Escola?",

        respostas:
        ["pdce"]
    },


    {
        pergunta:
        "Qual é a sigla do Plano Familiar de Emergência ?",

        respostas:
        ["plafe"]
    },


    {
        pergunta:
        "O que é uma atividade prática que procura reproduzir uma situação real, mas em um ambiente controlado. Ele serve para treinar, avaliar e preparar pessoas e equipes para agir diante de diferentes situações.",

        respostas:
        ["simulado"]
    }

];


/* ==========================================
   VARIÁVEIS
========================================== */


let perguntaAtual = 0;


/*
    ALTERE AQUI O SITE PARA O QUAL
    O ALUNO SERÁ ENVIADO NO FINAL.
*/

const siteFinal =
    "https://www.exemplo.com";


/* ==========================================
   MOSTRAR PERGUNTA
========================================== */


function mostrarPergunta() {

    const pergunta =
        perguntas[perguntaAtual];


    document.getElementById("pergunta")
        .textContent =
        pergunta.pergunta;


    document.getElementById("numeroPergunta")
        .textContent =
        perguntaAtual + 1;


    const porcentagem =
        ((perguntaAtual + 1) / perguntas.length) * 100;


    document.getElementById("barraProgresso")
        .style.width =
        porcentagem + "%";


    document.getElementById("resposta")
        .value = "";


    document.getElementById("resposta")
        .focus();


    document.getElementById("erro")
        .style.display = "none";


    document.getElementById("acerto")
        .style.display = "none";

}


/* ==========================================
   NORMALIZAR RESPOSTA
========================================== */


function normalizar(texto) {

    return texto
        .trim()
        .toLowerCase();

}


/* ==========================================
   VERIFICAR RESPOSTA
========================================== */


function verificarResposta() {

    const campo =
        document.getElementById("resposta");


    const resposta =
        normalizar(campo.value);


    const respostasAceitas =
        perguntas[perguntaAtual].respostas;


    if (respostasAceitas.includes(resposta)) {

        document.getElementById("erro")
            .style.display = "none";


        document.getElementById("acerto")
            .style.display = "block";


        /*
            Verifica se esta era a
            última pergunta.
        */

        if (
            perguntaAtual ===
            perguntas.length - 1
        ) {

            setTimeout(function() {

                document.getElementById("jogo")
                    .style.display = "none";


                document.getElementById("final")
                    .style.display = "block";


                /*
                    Aguarda 3 segundos
                    antes de redirecionar.
                */

                setTimeout(function() {

                    window.location.href =
                        siteFinal;

                }, 3000);

            }, 700);

        }

        else {

            /*
                Passa para a próxima pergunta.
            */

            setTimeout(function() {

                perguntaAtual++;

                mostrarPergunta();

            }, 900);

        }

    }

    else {

        document.getElementById("erro")
            .style.display = "block";


        campo.focus();

        campo.select();

    }

}


/* ==========================================
   ENTER PARA RESPONDER
========================================== */


document
    .getElementById("resposta")
    .addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                verificarResposta();

            }

        }
    );


/* ==========================================
   INICIAR
========================================== */

mostrarPergunta();