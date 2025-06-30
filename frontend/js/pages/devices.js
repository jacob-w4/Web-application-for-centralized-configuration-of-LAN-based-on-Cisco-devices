import { setupAddModal, setupDeleteModal } from "../modals/modalDevices.js";
import { openModal } from "../modals/modalUtils.js";

export function renderDevices(container) {
    // Sticky top bar
    const topbar = document.createElement("div");
    const button = document.createElement("button");
    const label = document.createElement("p");

    button.textContent = "Add device";
    label.textContent = "Devices";

    topbar.classList.add(
        "flex", "justify-between", "items-end", "border-b", "pb-4",
        "bg-white"
    );
    button.classList.add(
        "rounded-md", "bg-indigo-600", "py-2", "px-3", "text-sm/6",
        "font-semibold", "text-white", "shadow-xs", "hover:bg-indigo-500",
        "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-indigo-600"
    );
    label.classList.add("text-[24px]", "font-bold", "leading-none");

    const modal = document.getElementById("add-device");
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
    search_input.setAttribute("placeholder", "Search devices");

    labelForm.setAttribute("for", "default-search");
    search_input.setAttribute("type", "search");
    search_input.setAttribute("id", "default-search");
    search_input.required = true;
    imgContainer.innerHTML = `<svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/></svg>`;
    serach_button.setAttribute("type", "submit");

    searchForm.classList.add("w-full", "my-4");
    labelForm.classList.add("mb-2", "text-sm", "font-medium", "text-gray-900", "sr-only");
    img_btnContainer.classList.add("relative");
    imgContainer.classList.add("absolute", "inset-y-0", "start-0", "flex", "items-center", "ps-3", "pointer-events-none");
    search_input.classList.add("block", "w-full", "p-4", "ps-10", "text-sm", "text-gray-900", "border", "border-gray-300", "rounded-lg", "bg-gray-50");
    serach_button.classList.add(
        "absolute", "end-2.5", "bottom-2.5", "rounded-lg", "text-sm", "px-4", "py-2", "bg-gray-600", "font-semibold", "text-white", 
        "shadow-xs", "hover:bg-gray-500", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-gray-600");

    img_btnContainer.appendChild(imgContainer);
    img_btnContainer.appendChild(search_input);
    img_btnContainer.appendChild(serach_button);

    searchForm.appendChild(labelForm);
    searchForm.appendChild(img_btnContainer);

    // Main content
    const main = document.createElement("div");

    main.classList.add("w-full", "h-full", "bg-gray-50", "shadow-md", "rounded-md", "p-8", "flex", "flex-col", "overflow-y-auto");
    

    const devices = [
        {
            "name": "Test145",
            "type": "Router",
            "vendor": "Cisco",
            "model": "c1921",
            "ip": "192.168.1.12",
        },
        {
            "name": "Test",
            "type": "Switch",
            "vendor": "Cisco",
            "model": "c2900",
            "ip": "192.168.1.14", 
        },
        {
            "name": "Test145",
            "type": "Router",
            "vendor": "Cisco",
            "model": "c1921",
            "ip": "",
        },
                {
            "name": "Test145",
            "type": "Router",
            "vendor": "Cisco",
            "model": "c1921",
            "ip": "192.168.1.12",
        }, 
                {
            "name": "Test",
            "type": "Switch",
            "vendor": "Cisco",
            "model": "c2900",
            "ip": "192.168.1.14",  
        },
                {
            "name": "Test",
            "type": "Switch",
            "vendor": "Cisco",
            "model": "c2900",
            "ip": "192.168.1.14",  
        },
                {
            "name": "Test",
            "type": "Switch",
            "vendor": "Cisco",
            "model": "c2900",
            "ip": "192.168.1.14", 
        },
        
    ];

    createDeviceRow(devices, main);


    container.appendChild(topbar);
    container.appendChild(searchForm);
    container.appendChild(main);
}


function createDeviceRow(devices, main) {
    devices.forEach(device => {
        const deviceWrapper = document.createElement("div");
        const deviceIcon = document.createElement("div");

        deviceWrapper.classList.add("flex", "items-center", "mb-4", "bg-white", "p-4", "rounded", "shadow", "justify-between");
        

        const icons = {
            "router" : `<svg class="w-20 h-20" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                        <path d="M77 403.4v228.5c1.5 93.7 195.7 183.5 435 183.5s433.4-89.8 435-183.5V403.4H77z" fill="#4f39f6"></path>
                        <path d="M947 402.7c0 99.4-194.8 194-435 194s-435-94.6-435-194 194.8-180 435-180 435 80.5 435 180z" fill="#615fff">
                        </path><path d="M474.1 311.4H503l0.1 63.2h29.5l-0.7-63.2h28.9l-43.7-75.1zM533 417.2h-29.9l0.1 73.9h-30.6l46.2 75.2 45.5-75.2h-30.6zM654.5 380.9l-1.4-30-72.1 45 76.4 45.1-1.4-30h126.2l-2.6-30.1zM381.1 380.9h-125l-2.3 30.1H380l-1.1 30 75.9-45.1-72.5-45z" fill="#FFFFFF"></path></g></svg>`,
            "switch":  `<svg class="w-20 h-20" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"><path d="M537 820.3l-470-230v-222l470 212z" fill="#4f39f6"></path><path d="M537 820.3l420-230v-220l-420 210z" fill="#3e00d7">
                        </path><path d="M67 368.3l470 212 420-210-494.4-166.6z" fill="#615fff"></path><path d="M532 266.7l-117.1-7.1 28.7 48 29.5-13.6 102.7 39.2 29.6-14.4-102.9-38.4zM406.8 324.6L290.2 315l28.3 50.4 29.4-13.6L450 394.5l29.6-14.4-102.2-41.9zM605.8 438.1l117.4 5.8-28-52.2-29.8 15.5-102.5-40.5-29.6 14.7 102.3 41.2zM538.8 472.9L437 429l-29.7 14.7 101.8 44.6-29.8 15.5 116.9 8.2-27.6-54.6z" fill="#FFFFFF"></path></g></svg>`
        }

        if (device.type == "Router") {
            deviceIcon.innerHTML = icons["router"];
        } else if (device.type == "Switch") {
            deviceIcon.innerHTML = icons["switch"];
        }

        const info = document.createElement("div");
        info.classList.add("flex", "flex-col");

        const name = document.createElement("p");
        name.classList.add("text-sm", "font-semibold");
        name.textContent = device.name;

        const vendor = document.createElement("p");
        vendor.classList.add("text-sm");
        vendor.textContent = `Vendor: ${device.vendor}`;

        const model = document.createElement("p");
        model.classList.add("text-sm");
        model.textContent = `Model: ${device.model}`;

        const ip = document.createElement("p")
        ip.classList.add("text-sm");
        ip.textContent = `IP Address: ${device.ip}`;


        const configBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");

        const modal = document.getElementById("delete-device");
        setupDeleteModal(device);
        deleteBtn.addEventListener("click", () => openModal(modal));

        const buttonWrapper = document.createElement("div");
        buttonWrapper.classList.add("flex", "flex-col", "gap-2");

        configBtn.textContent = "Test Connectivity";
        deleteBtn.textContent = "Delete";
        configBtn.classList.add(
            "rounded-md", "bg-gray-600", "py-2", "px-3", "text-sm/6", "font-semibold", "text-white", "shadow-xs", "hover:bg-gray-500", "focus-visible:outline-2", 
            "focus-visible:outline-offset-2", "focus-visible:outline-gray-600"
        );
        deleteBtn.classList.add("rounded-md", "bg-red-600", "py-2", "px-3", "text-sm/6", "font-semibold", "text-white", "shadow-xs", "hover:bg-red-500", 
            "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-red-600"
        );

        buttonWrapper.appendChild(configBtn);
        buttonWrapper.appendChild(deleteBtn);
        

        info.appendChild(name);
        info.appendChild(vendor);
        info.appendChild(model);
        info.appendChild(ip);

        const deviceCard = document.createElement("div");
        deviceCard.classList.add("flex", "items-center", "gap-4");

        deviceCard.appendChild(deviceIcon);
        deviceCard.appendChild(info);

        deviceWrapper.appendChild(deviceCard);
        deviceWrapper.appendChild(buttonWrapper);

        main.appendChild(deviceWrapper);
    });
}