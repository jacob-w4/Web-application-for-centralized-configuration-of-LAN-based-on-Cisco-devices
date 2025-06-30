import { closeModal, closeOnBgClick } from "./modalUtils.js";



export function setupAddModal() {
    const modal = document.getElementById("add-device");
    const closeBtn = document.getElementById("close-add-device");
    
    
    // Close modal buttons
    closeBtn.addEventListener("click", () => closeModal(modal));
    closeOnBgClick(modal);

}

export function setupDeleteModal(device) {
    const modal = document.getElementById("delete-device");
    const closeBtn = document.getElementById("close-delete-device");
    const denyBtn = document.getElementById("deny-delete-device");

    // Close modal buttons
    denyBtn.addEventListener("click", () => closeModal(modal));
    closeBtn.addEventListener("click", () => closeModal(modal));
    closeOnBgClick(modal);
}