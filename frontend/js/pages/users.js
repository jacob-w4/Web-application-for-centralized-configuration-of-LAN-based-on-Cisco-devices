import { setupAddModal, setupDeleteModal } from "../modals/modalUsers.js";
import { openModal } from "../modals/modalUtils.js";


export function renderUsers(container) {
    // Top bar
    const topbar = document.createElement("div");
    const button = document.createElement("button");
    const label = document.createElement("p");

    button.textContent = "Add user";
    label.textContent = "Users";

    topbar.classList.add("flex", "justify-between", "items-end", "border-b-1", "pb-4");
    button.classList.add("rounded-md", "bg-indigo-600", "py-2", "px-3", "text-sm/6", "font-semibold", "text-white", "shadow-xs", "hover:bg-indigo-500", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-indigo-600");
    label.classList.add("text-[24px]", "font-bold", "leading-none");

    const modal = document.getElementById("add-user");
    setupAddModal();
    button.addEventListener("click", () => openModal(modal));

    topbar.appendChild(label);
    topbar.appendChild(button);

    // Search form
    const searchForm = document.createElement("form");
    const labelForm = document.createElement("label");
    const img_btnContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const search_input = document.createElement("input");
    const serach_button = document.createElement("button");

    labelForm.textContent = "Search";
    serach_button.textContent = "Search";
    search_input.setAttribute("placeholder", "Search users");

    labelForm.setAttribute("for", "default-search");
    search_input.setAttribute("type" ,"search");
    search_input.setAttribute("id", "default-search");
    search_input.required = true;
    imgContainer.innerHTML = `<svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/></svg>`
    serach_button.setAttribute("type", "submit");
    
    searchForm.classList.add("w-full", "my-4");
    labelForm.classList.add("mb-2", "text-sm", "font-medium", "text-gray-900", "sr-only");
    img_btnContainer.classList.add("relative");
    imgContainer.classList.add("absolute", "inset-y-0", "start-0", "flex", "items-center", "ps-3", "pointer-events-none");
    search_input.classList.add("block", "w-full", "p-4", "ps-10", "text-sm", "text-gray-900", "border", "border-gray-300", "rounded-lg", "bg-gray-50")
    serach_button.classList.add("absolute", "end-2.5", "bottom-2.5", "rounded-lg", "text-sm", "px-4", "py-2", "bg-gray-600", "font-semibold", "text-white", "shadow-xs", "hover:bg-gray-500", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-gray-600")

    img_btnContainer.appendChild(imgContainer);
    img_btnContainer.appendChild(search_input);
    img_btnContainer.appendChild(serach_button);    
    
    searchForm.appendChild(labelForm);
    searchForm.appendChild(img_btnContainer);


    // Main
    const main = document.createElement("div");
    const table = document.createElement("table");
    const thead = document.createElement("tr");

    table.classList.add("w-full", "h-full", "text-left", "text-gray-500", "table-auto")
    thead.classList.add("text-[16px]", "text-gray-700", "uppercase", "bg-gray-50", "sticky" , "top-0")
    main.classList.add("w-full", "h-full", "overflow-y-auto");
    
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const th4 = document.createElement("th");
    const th7Btn = document.createElement("th");

    th1.textContent = "Username";
    th2.textContent = "Permission";
    th3.textContent = "Devices";
    th4.textContent = "Created at";

    thead.appendChild(th1);
    thead.appendChild(th2);
    thead.appendChild(th3);
    thead.appendChild(th4);
    thead.appendChild(th7Btn);

    const users = [
        {
            "username": "admin123",
            "permission": "admin",
            "devices": "Test123, R1, R5",
            "created_at": "27/06/2025"
        },
        {
            "username": "jakub123",
            "permission": "read",
            "devices": "Test123",
            "created_at": "29/06/2025"
        },
        {
            "username": "admin123",
            "permission": "admin",
            "devices": "Test123, R1, R5",
            "created_at": "27/06/2025"
        },
                {
            "username": "admin123",
            "permission": "admin",
            "devices": "Test123, R1, R5",
            "created_at": "27/06/2025"
        },
                {
            "username": "admin123",
            "permission": "admin",
            "devices": "Test123, R1, R5",
            "created_at": "27/06/2025"
        },
                {
            "username": "admin123",
            "permission": "admin",
            "devices": "Test123, R1, R5",
            "created_at": "27/06/2025"
        },
                {
            "username": "admin123",
            "permission": "admin",
            "devices": "Test123, R1, R5",
            "created_at": "27/06/2025"
        },
                {
            "username": "admin123",
            "permission": "admin",
            "devices": "Test123, R1, R5",
            "created_at": "27/06/2025"
        },
                {
            "username": "admin123",
            "permission": "admin",
            "devices": "Test123, R1, R5",
            "created_at": "27/06/2025"
        },
                {
            "username": "admin123",
            "permission": "admin",
            "devices": "Test123, R1, R5",
            "created_at": "27/06/2025"
        },
                {
            "username": "admin123",
            "permission": "admin",
            "devices": "Test123, R1, R5",
            "created_at": "27/06/2025"
        },
                {
            "username": "admin123",
            "permission": "admin",
            "devices": "Test123, R1, R5",
            "created_at": "27/06/2025"
        },
                {
            "username": "admin123",
            "permission": "admin",
            "devices": "Test123, R1, R5",
            "created_at": "27/06/2025"
        },
                {
            "username": "admin123",
            "permission": "admin",
            "devices": "Test123, R1, R5",
            "created_at": "27/06/2025"
        },
    ]
    


    table.appendChild(thead);
    createTableRow(users, table)
    main.appendChild(table);

    //// ALL
    container.appendChild(topbar);
    container.appendChild(searchForm);
    container.appendChild(main);
}

function createTableRow(users, table) {
    users.forEach(user => {
        const row = document.createElement("tr");

        const username = document.createElement("td");
        const permission = document.createElement("td");
        const devices = document.createElement("td");
        const created_at = document.createElement("td");
        const buttons = document.createElement("td");
        const configBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");

        const modal = document.getElementById("delete-user");
        setupDeleteModal(user);
        deleteBtn.addEventListener("click", () => openModal(modal));

        row.classList.add("bg-white", "border-b", "border-gray-200")
        username.classList.add("highlight");

        configBtn.textContent = "Edit";
        deleteBtn.textContent = "Delete";
        configBtn.classList.add("rounded-md", "mr-3", "bg-gray-600", "py-2", "px-3", "text-sm/6", "font-semibold", "text-white", "shadow-xs", "hover:bg-gray-500", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-gray-600");
        deleteBtn.classList.add("rounded-md", "bg-red-600", "py-2", "px-3", "text-sm/6", "font-semibold", "text-white", "shadow-xs", "hover:bg-red-500", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-red-600");

        buttons.appendChild(configBtn);
        buttons.appendChild(deleteBtn);

        username.textContent = user.username;
        permission.textContent = user.permission;
        devices.textContent = user.devices;
        created_at.textContent = user.created_at;

        row.appendChild(username);
        row.appendChild(permission);
        row.appendChild(devices);
        row.appendChild(created_at);
        row.appendChild(buttons);
    
    
        table.appendChild(row)
    });
}