export function openModal(modal) {
    modal.classList.remove("hidden");
}

export function closeModal(modal) {
    modal.classList.add("hidden");
}

export function closeOnBgClick(modal) {
    const modalContent = modal.querySelector(".content-modal");
    modal.addEventListener("click", (e) => {
    if (!modalContent.contains(e.target)) {
        closeModal(modal);
    }});
}