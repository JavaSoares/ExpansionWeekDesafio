/* O document vai receber na DOM o .modal-overlay e mover na variável modalOverlay*/
const modalOverlay = document.querySelector('.modal-overlay')

/* Aqui é igual só que vai mover todos .card
  e depois vai em cada card esperando o click para 
  ativar a modalOverlay
*/
const cards = document.querySelectorAll('.card')
for (let card of cards) {
    card.addEventListener("click", function () {
        modalOverlay.classList.add('active')

        const videoId = card.getAttribute("id")
        /* Vou usar a variável modalOverlay e informar o src para iframe */
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    })
}

/* Aqui quando clicar para fechar e remover o modalOverlay (tela) */
document.querySelector('.close-modal').addEventListener("click", function () {
    modalOverlay.classList.remove('active')

    /* Quando fechar parar o video */
    modalOverlay.querySelector("iframe").src = ""
})

