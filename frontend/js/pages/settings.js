export function renderSettings(container) {
    // Top bar
    const topbar = document.createElement("div");
    const label = document.createElement("h2");

    label.textContent = "Settings";

    topbar.classList.add("flex", "justify-between", "border-b-1", "pb-4");
    label.classList.add("text-2xl/9", "font-bold", "tracking-tight");

    topbar.appendChild(label);

    container.appendChild(topbar)
}