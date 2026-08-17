document.addEventListener("DOMContentLoaded", () => {

    /*
    =========================================================
    CARTÓRIOS PRÓXIMOS
    =========================================================
    */

    const botoesLocalizacao = document.querySelectorAll(
        ".cartorio-button"
    );

    botoesLocalizacao.forEach((botao) => {

        botao.addEventListener("click", () => {

            // Evita qualquer comportamento estranho
            // caso o botão não tenha um link válido.
            const link = botao.getAttribute("href");

            if (!link || link === "#") {
                console.warn(
                    "Localização deste cartório ainda não foi configurada."
                );
            }

        });

    });


    /*
    =========================================================
    ANIMAÇÃO DOS CARDS
    =========================================================
    */

    const cards = document.querySelectorAll(
        ".cartorio-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "cartorio-card-visible"
                        );

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        cards.forEach((card) => {
            observer.observe(card);
        });

    } else {

        cards.forEach((card) => {
            card.classList.add(
                "cartorio-card-visible"
            );
        });

    }


    /*
    =========================================================
    ACESSIBILIDADE
    =========================================================
    */

    cards.forEach((card) => {

        card.addEventListener("keydown", (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                const botao =
                    card.querySelector(".cartorio-button");

                if (botao) {
                    botao.click();
                }

            }

        });

    });

});