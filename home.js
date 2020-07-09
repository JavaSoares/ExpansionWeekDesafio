/* Aqui quando clicar para fechar e remover o modalOverlay (tela) */
document.querySelector('.close-modal').addEventListener("click", function () {
    modalOverlay.classList.remove('active')

    /* Quando fechar parar o video */
    modalOverlay.querySelector("iframe").src = ""
})

const modalOverlay = document.querySelector('.modal-overlay')

const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function () {

        const imageId = card.getAttribute("id")
        const title = card.querySelector('.card__content p').textContent;
        const autor = card.querySelector('.card__info p').textContent;

        modalOverlay.classList.add("active")

        modalOverlay.querySelector("img").src = `/layouts/assets/${imageId}.png`
        modalOverlay.querySelector('h3').innerHTML = title
        modalOverlay.querySelector('p').innerHTML = autor
    })
}
