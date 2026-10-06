
/* ==========================================
   PERGUNTAS
========================================== */


const perguntas = [

    {
        pergunta:
        "Qual é o planeta conhecido como Planeta Vermelho?",

        respostas:
        ["marte"]
    },


    {
        pergunta:
        "Quantos lados possui um triângulo?",

        respostas:
        ["3", "três"]
    },


    {
        pergunta:
        "Qual é o maior oceano da Terra?",

        respostas:
        ["pacifico", "pacífico"]
    },


    {
        pergunta:
        "Quanto é 5 × 6?",

        respostas:
        ["30", "trinta"]
    },


    {
        pergunta:
        "Qual é o satélite natural da Terra?",

        respostas:
        ["lua"]
    },


    {
        pergunta:
        "Quantos dias aproximadamente possui um ano?",

        respostas:
        ["365", "trezentos e sessenta e cinco"]
    },


    {
        pergunta:
        "Qual é o nome do processo pelo qual as plantas produzem seu alimento?",

        respostas:
        ["fotossintese", "fotossíntese"]
    },


    {
        pergunta:
        "Qual é o resultado de 100 ÷ 10?",

        respostas:
        ["10", "dez"]
    },


    {
        pergunta:
        "Qual é o maior continente do planeta?",

        respostas:
        ["asia", "ásia"]
    },


    {
        pergunta:
        "Quantos minutos existem em uma hora?",

        respostas:
        ["60", "sessenta"]
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