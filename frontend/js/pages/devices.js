export function renderDevices(container) {
    // Top bar
    const topbar = document.createElement("div");
    const button = document.createElement("button");
    const label = document.createElement("h2");

    button.textContent = "Add device";
    label.textContent = "Devices";

    topbar.classList.add("flex", "justify-between", "border-b-1", "pb-4");
    button.classList.add("rounded-md", "bg-indigo-600", "py-2", "px-3", "text-sm/6", "font-semibold", "text-white", "shadow-xs", "hover:bg-indigo-500", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-indigo-600");
    label.classList.add("text-2xl/9", "font-bold", "tracking-tight");

    topbar.appendChild(label);
    topbar.appendChild(button);
    
    // Main
    const main = document.createElement("div");
    main.classList.add("flex", "h-full", "w-full")

    

    container.appendChild(topbar);
    container.appendChild(main);
}