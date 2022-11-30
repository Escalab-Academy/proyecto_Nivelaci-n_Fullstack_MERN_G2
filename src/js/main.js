import { card, btnCloseModal } from "./nodes.js";
import { openModal } from "./interactions.js"
import { closeModal } from "./interactions.js"

card.addEventListener('click', () => {
    openModal();
});

btnCloseModal.addEventListener('click', () => {
    closeModal();
});
