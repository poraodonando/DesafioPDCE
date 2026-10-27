
/* ==========================================
   PERGUNTAS
========================================== */


const perguntas = [

    {
        pergunta:
        "O que reune as ações que ajudam as pessoas a saber como agir durante uma emergência.",

        respostas:
        ["preparacao"]
    },


    {
        pergunta:
        "O que são as simulações computacionais que utilizam equações físicas e dados observados para prever o comportamento da atmosfera e fazer previsões do tempo e do clima.",

        respostas:
        ["modelos metereologicos"]
    },


    {
        pergunta:
        "Qual é o  instrumento utilizado para medir a quantidade de chuva que cai em determinada área.",

        respostas:
        ["pluviometro"]
    },


    {
        pergunta:
        "Durante um desastre, algumas pessoas precisam receber atenção prioritária. a primeira prioridade é: ",

        respostas:
        ["criancas e adolescentes"]
    },


    {
        pergunta:
        "Qual é o nome caminho utilizado pelas pessoas para sair de uma edificação em uma situação de emergência",

        respostas:
        ["rota de fuga"]
    },


    {
        pergunta:
        "Qual é um local seguro previamente definido para onde estudantes, professores e servidores devem se dirigir depois de deixar a escola.",

        respostas:
        ["ponto de encontro"]
    },


    {
        pergunta:
        "Quem atende os feridos",

        respostas:
        ["samu"]
    },


    {
        pergunta:
        "Quem coordena as ações e os abrigos.",

        respostas:
        ["defesa civil"]
    },


    {
        pergunta:
        "Qual é o nome do processo contínuo de observar, coletar e analisar dados meteorológicos, hidrológicos e geológicos para identificar possíveis situações de risco",

        respostas:
        ["monitoramento"]
    },


    {
        pergunta:
        "Qual é o nome sistema permite enviar mensagens diretamente para celulares que estejam em áreas com risco de desastres severos ou extremos?",

        respostas:
        ["cell broadcast"]
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
    "Detona/detona.html";


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