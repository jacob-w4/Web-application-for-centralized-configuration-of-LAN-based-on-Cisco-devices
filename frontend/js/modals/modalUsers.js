import { closeModal, closeOnBgClick } from "./modalUtils.js";



export function setupAddModal() {
    const modal = document.getElementById("add-user");
    const modalContent = modal.querySelector(".content-modal");
    const closeBtn = document.getElementById("close-add-user");
    
    // Close modal buttons
    closeBtn.addEventListener("click", () => closeModal(modal));
    closeOnBgClick(modal);

}

export function setupDeleteModal(user) {
    const modal = document.getElementById("delete-user");
    const closeBtn = document.getElementById("close-delete-user");
    const denyBtn = document.getElementById("deny-delete-user");

    // Close modal buttons
    denyBtn.addEventListener("click", () => closeModal(modal));
    closeBtn.addEventListener("click", () => closeModal(modal));
    closeOnBgClick(modal);
}