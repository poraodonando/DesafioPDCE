
/* ==========================================
   PERGUNTAS
========================================== */


const perguntas = [

    {
        pergunta:
        "Como se da o nome das alterações na temperatura e na distribuição das chuvas do planeta",

        respostas:
        ["mudancas climaticas"]
    },


    {
        pergunta:
        "O que ocorre quando as águas do Oceano Pacífico ficam mais frias que o normal",

        respostas:
        ["la nina"]
    },


    {
        pergunta:
        "O que ocorre quando as águas do Oceano Pacífico ficam mais quentes que o normal",

        respostas:
        ["el nino"]
    },


    {
        pergunta:
        "é um fenômeno natural e fundamental para a vida na Terra. Sem ele, a temperatura média do planeta seria muito mais baixa.",

        respostas:
        ["efeito estufa"]
    },


    {
        pergunta:
        "O que é sistemas que armazenam água da chuva para atividades como irrigação e limpeza.",

        respostas:
        ["sisterna"]
    },


    {
        pergunta:
        "materiais, substâncias ou objetos que são descartados como resultado da natureza ou das atividades humanas e chamado de",

        respostas:
        ["residuo"]
    },


    {
        pergunta:
        "Quem são encaminhados para aterros sanitários.",

        respostas:
        ["rejeitos"]
    },


    {
        pergunta:
        "permite que determinados produtos, depois de utilizados, retornem ao setor empresarial para serem reinseridos no processo produtivo ou receberem uma destinação ambiental adequada. O consumidor deve entregar esses resíduos nos locais indicados pelos sistemas de...",

        respostas:
        ["logistica reversa"]
    },


    {
        pergunta:
        "Qual R significa: Dar uma nova utilidade para objetos que iriam para o lixo, evitando novas compras",

        respostas:
        ["reutilizar"]
    },


    {
        pergunta:
        "Qual o nome da ação de doar tempo, trabalho e talento para ajudar outras pessoas ou a comunidade, sem receber pagamento por isso.?",

        respostas:
        ["voluntariado"]
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
    "bebedouro.html";


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