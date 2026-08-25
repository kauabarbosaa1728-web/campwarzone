// ==========================================
// RESURGENCE 100
// SISTEMA DE ENVIO DAS INSCRIÇÕES
// ==========================================

// COLOQUE AQUI A PUBLIC KEY DO SEU EMAILJS
emailjs.init({
    publicKey: "COLOQUE_SUA_PUBLIC_KEY_AQUI"
});


// ==========================================
// FORMULÁRIO
// ==========================================

const formulario = document.querySelector(".registration-form");

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        const botao = formulario.querySelector("button[type='submit']");

        const textoOriginal = botao.innerHTML;

        botao.innerHTML = "ENVIANDO INSCRIÇÃO...";
        botao.disabled = true;


        // ==========================================
        // ENVIA PARA O EMAILJS
        // ==========================================

        emailjs.sendForm(
            "COLOQUE_SEU_SERVICE_ID_AQUI",
            "COLOQUE_SEU_TEMPLATE_ID_AQUI",
            formulario
        )

        .then(function () {

            alert(
                "🏆 INSCRIÇÃO ENVIADA COM SUCESSO!\n\n" +
                "Sua dupla foi cadastrada no Resurgence 100.\n\n" +
                "A organização entrará em contato pelo WhatsApp informado."
            );

            formulario.reset();

            botao.innerHTML = textoOriginal;
            botao.disabled = false;

        })

        .catch(function (error) {

            console.error("Erro ao enviar inscrição:", error);

            alert(
                "❌ ERRO AO ENVIAR A INSCRIÇÃO.\n\n" +
                "Tente novamente em alguns segundos."
            );

            botao.innerHTML = textoOriginal;
            botao.disabled = false;

        });

    });

}
