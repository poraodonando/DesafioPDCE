
/* ==========================================
   PERGUNTAS
========================================== */


const perguntas = [

    {
        pergunta:
        "O que representa tranquilidade, equilibrio e serenidade?",

        respostas:
        ["azul"]
    },


    {
        pergunta:
        "Qual é o numero dos bombeiros?",

        respostas:
        ["193"]
    },


    {
        pergunta:
        "O que representa solidariedade, auxílio e calor humano.",

        respostas:
        ["laranja"]
    },


    {
        pergunta:
        "Qual animal representa a defesa civil ?",

        respostas:
        ["cachorro"]
    },


    {
        pergunta:
        "Em que ano foi a criação da Política Nacional de Proteção e Defesa Civil.",

        respostas:
        ["2012"]
    },


    {
        pergunta:
        "Qual o nome que damos a tentativa de diminuir um risco que já existe.",

        respostas:
        ["mitigação"]
    },


    {
        pergunta:
        "O que é o acontecimento inesperado e não planejado que causa danos.",

        respostas:
        ["acidente"]
    },


    {
        pergunta:
        "Qual é o nome do período prolongado com pouca ou nenhuma chuva.",

        respostas:
        ["estiagem"]
    },


    {
        pergunta:
        "A pessoa que precisou deixar sua casa, mas pode não precisar de abrigo, pois pode ficar na casa de familiares ou amigos, por exemplo",

        respostas:
        ["desalojado"]
    },


    {
        pergunta:
        "As perdas relacionadas principalmente ao valor econômico tem o nome de.",

        respostas:
        ["prejuizo"]
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
    "cantina.html";


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