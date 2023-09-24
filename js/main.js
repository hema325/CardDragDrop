
const cards = document.querySelectorAll(".card");
let currentDraggedImage = null;

cards.forEach(card => {

    card.addEventListener("dragstart", () => {
        currentDraggedImage = card.firstElementChild;
    });

    card.addEventListener("dragenter", () => {
        card.classList.add("draggingHovered");
    });

    card.addEventListener("dragleave", () => {
        card.classList.remove("draggingHovered");
    });

    card.addEventListener("dragover", e => {
        e.preventDefault();
    });

    card.addEventListener("drop", () => {
        if (currentDraggedImage != null) {
            card.append(currentDraggedImage);
            card.classList.remove("draggingHovered");
        }
    });

})
