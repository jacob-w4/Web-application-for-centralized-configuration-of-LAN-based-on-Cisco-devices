import { renderDevices } from "./pages/devices.js";
import { renderIconCredits } from "./pages/icon-credits.js";
import { renderSettings } from "./pages/settings.js";
import { renderUsers } from "./pages/users.js";

const pages = {
    "devices": renderDevices,
    "icon-credits" : renderIconCredits,
    "users" : renderUsers, 
    "settings" : renderSettings
};

function onclickEffect(page) {
    document.querySelectorAll("[data-page]").forEach(div => {
        div.classList.remove("bg-gray-700", "font-semibold")
    });
    const div = document.querySelector(`[data-page=${page}]`)
    div.classList.add("bg-gray-700", "font-semibold")
}

function navigate(page) {
    const renderPage = pages[page];
    const main = document.getElementById("main");
    main.innerHTML = "";
    onclickEffect(page)
    renderPage(main)
}

document.querySelectorAll("[data-page]").forEach(link => {
    link.addEventListener('click', () => {
        navigate(link.dataset.page);
    });
});

navigate("devices"); // default