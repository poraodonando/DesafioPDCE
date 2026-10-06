/* ========================================== RESPOSTA CORRETA ========================================== */
const respostaCorreta = "4"; const formulario = document.getElementById("formulario");
const resposta = document.getElementById("resposta");
const modal = document.getElementById("modal");
const fechar = document.getElementById("fechar"); /* ========================================== VERIFICAR RESPOSTA ========================================== */
formulario.addEventListener("submit", function (event) {
    event.preventDefault(); const respostaAluno = resposta.value.trim().toLowerCase(); /* SE ESTIVER CORRETA */

    if (respostaAluno === respostaCorreta || respostaAluno === "quatro") { window.location.href = "pista.html"; } /* SE ESTIVER ERRADA */ else { modal.classList.remove("oculto"); resposta.value = ""; }
}); /* ========================================== FECHAR POP-UP ========================================== */ fechar.addEventListener("click", function () { modal.classList.add("oculto"); resposta.focus(); });