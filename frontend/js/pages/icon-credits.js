export function renderIconCredits(container) {
    // Top bar
    const topbar = document.createElement("div");
    const label = document.createElement("p");

    label.textContent = "Icon Credits";

    topbar.classList.add("flex", "justify-between", "items-end", "border-b-1", "pb-4", "h-[57px]", "mb-4");
    label.classList.add("text-[24px]", "font-bold", "leading-none");

    topbar.appendChild(label);


    // Main
    const main = document.createElement("div");
    const infoLabel = document.createElement("h2");

    infoLabel.textContent = "This application uses icons from the following sources:"

    infoLabel.classList.add("font-semibold" , "mb-4");
    main.classList.add("w-full", "h-full", "bg-gray-50", "shadow-md", "rounded-md", "p-8", "flex", "flex-col");

    main.appendChild(infoLabel);

    const icons = [
        {
            "html": `<svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.2255 5.33199C8.92208 5.86298 8.93352 6.58479 9.55278 6.89443C10.3201 7.27808 10.7664 6.59927 11.1323 6.04284C11.4473 5.56389 11.8013 5.11292 12.2071 4.70711C13.0981 3.8161 14.3588 3 16 3C17.6412 3 18.9019 3.8161 19.7929 4.70711C20.1967 5.11095 20.5495 5.5595 20.8632 6.03593C21.2289 6.59127 21.6809 7.27759 22.4472 6.89443C23.0634 6.58633 23.0765 5.86043 22.7745 5.33199C22.7019 5.20497 22.5962 5.02897 22.4571 4.8203C22.1799 4.40465 21.7643 3.8501 21.2071 3.29289C20.0981 2.1839 18.3588 1 16 1C13.6412 1 11.9019 2.1839 10.7929 3.29289C10.2357 3.8501 9.82005 4.40465 9.54295 4.8203C9.40383 5.02897 9.29809 5.20497 9.2255 5.33199Z" fill="#0F0F0F"></path> <path d="M14.4762 6.71292C14.2768 6.90911 14.1223 7.10809 14.0182 7.2579C13.6696 7.75991 13.1966 8.23817 12.5294 7.88235C11.9766 7.58751 11.8923 6.8973 12.193 6.39806C12.2358 6.327 12.2967 6.23053 12.3755 6.1171C12.5319 5.89191 12.7649 5.59089 13.0738 5.28708C13.6809 4.68987 14.6689 4 15.9999 4C17.3309 4 18.3189 4.68986 18.9261 5.28706C19.235 5.59087 19.468 5.89188 19.6244 6.11707C19.7031 6.2305 19.764 6.32697 19.8069 6.39803C20.1082 6.8983 20.0212 7.58858 19.4705 7.88233C18.8032 8.23829 18.3304 7.76001 17.9817 7.25793C17.8776 7.10812 17.7231 6.90913 17.5236 6.71294C17.1141 6.31014 16.6021 6 15.9999 6C15.3977 6 14.8857 6.31013 14.4762 6.71292Z" fill="#0F0F0F"></path> <path d="M5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18Z" fill="#0F0F0F"></path> <path d="M7 19C7 18.4477 7.44771 18 8 18C8.55229 18 9 18.4477 9 19C9 19.5523 8.55229 20 8 20C7.44771 20 7 19.5523 7 19Z" fill="#0F0F0F"></path> <path d="M10 19C10 18.4477 10.4477 18 11 18C11.5523 18 12 18.4477 12 19C12 19.5523 11.5523 20 11 20C10.4477 20 10 19.5523 10 19Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 7.44771 15.4477 7 16 7C16.5523 7 17 7.44771 17 8V15H20C21.6569 15 23 16.3431 23 18V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V18C1 16.3431 2.34315 15 4 15H15V8ZM20 17C20.5523 17 21 17.4477 21 18V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V18C3 17.4477 3.44772 17 4 17H20Z" fill="#0F0F0F"></path> </g></svg>`,
            "Author": "Konstantin Filatov",
            "link": "https://www.svgrepo.com/svg/521814/router",
            "license": "CC BY"
        },
        {
            "html": `<svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="User / Users"> <path id="Vector" d="M21 19.9999C21 18.2583 19.3304 16.7767 17 16.2275M15 20C15 17.7909 12.3137 16 9 16C5.68629 16 3 17.7909 3 20M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5M9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9C13 11.2091 11.2091 13 9 13Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>`,
            "Author": "krystonschwarze",
            "link": "https://www.svgrepo.com/svg/511199/users",
            "license": "CC BY"
        },
        {
            "html": `<svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 3H13C13.5523 3 14 3.44772 14 4V4.56879C14 4.99659 14.2871 5.36825 14.6822 5.53228C15.0775 5.69638 15.5377 5.63384 15.8403 5.33123L16.2426 4.92891C16.6331 4.53838 17.2663 4.53838 17.6568 4.92891L19.071 6.34312C19.4616 6.73365 19.4615 7.36681 19.071 7.75734L18.6688 8.1596C18.3661 8.46223 18.3036 8.92247 18.4677 9.31774C18.6317 9.71287 19.0034 10 19.4313 10L20 10C20.5523 10 21 10.4477 21 11V13C21 13.5523 20.5523 14 20 14H19.4312C19.0034 14 18.6318 14.2871 18.4677 14.6822C18.3036 15.0775 18.3661 15.5377 18.6688 15.8403L19.071 16.2426C19.4616 16.6331 19.4616 17.2663 19.071 17.6568L17.6568 19.071C17.2663 19.4616 16.6331 19.4616 16.2426 19.071L15.8403 18.6688C15.5377 18.3661 15.0775 18.3036 14.6822 18.4677C14.2871 18.6318 14 19.0034 14 19.4312V20C14 20.5523 13.5523 21 13 21H11C10.4477 21 10 20.5523 10 20V19.4313C10 19.0034 9.71287 18.6317 9.31774 18.4677C8.92247 18.3036 8.46223 18.3661 8.1596 18.6688L7.75732 19.071C7.36679 19.4616 6.73363 19.4616 6.34311 19.071L4.92889 17.6568C4.53837 17.2663 4.53837 16.6331 4.92889 16.2426L5.33123 15.8403C5.63384 15.5377 5.69638 15.0775 5.53228 14.6822C5.36825 14.2871 4.99659 14 4.56879 14H4C3.44772 14 3 13.5523 3 13V11C3 10.4477 3.44772 10 4 10L4.56877 10C4.99658 10 5.36825 9.71288 5.53229 9.31776C5.6964 8.9225 5.63386 8.46229 5.33123 8.15966L4.92891 7.75734C4.53838 7.36681 4.53838 6.73365 4.92891 6.34313L6.34312 4.92891C6.73365 4.53839 7.36681 4.53839 7.75734 4.92891L8.15966 5.33123C8.46228 5.63386 8.9225 5.6964 9.31776 5.53229C9.71288 5.36825 10 4.99658 10 4.56876V4C10 3.44772 10.4477 3 11 3Z" stroke="#000000" stroke-width="1.5"></path> <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="#000000" stroke-width="1.5"></path> </g></svg>`,
            "Author": "Software Mansion",
            "link": "https://www.svgrepo.com/svg/506315/settings",
            "license": "CC BY"
        },
        {
            "html": `<svg class="w-10 h-10" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M77 403.4v228.5c1.5 93.7 195.7 183.5 435 183.5s433.4-89.8 435-183.5V403.4H77z" fill="#1B9BDB"></path><path d="M947 402.7c0 99.4-194.8 194-435 194s-435-94.6-435-194 194.8-180 435-180 435 80.5 435 180z" fill="#3ED6FF"></path><path d="M474.1 311.4H503l0.1 63.2h29.5l-0.7-63.2h28.9l-43.7-75.1zM533 417.2h-29.9l0.1 73.9h-30.6l46.2 75.2 45.5-75.2h-30.6zM654.5 380.9l-1.4-30-72.1 45 76.4 45.1-1.4-30h126.2l-2.6-30.1zM381.1 380.9h-125l-2.3 30.1H380l-1.1 30 75.9-45.1-72.5-45z" fill="#FFFFFF"></path></g></svg>`,
            "Author": "coolbile",
            "link": "https://www.svgrepo.com/svg/499810/router",
            "license": "CC BY"
        },
        {
            "html": `<svg class="w-10 h-10" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M537 820.3l-470-230v-222l470 212z" fill="#37BBEF"></path><path d="M537 820.3l420-230v-220l-420 210z" fill="#2481BA"></path><path d="M67 368.3l470 212 420-210-494.4-166.6z" fill="#3ED6FF"></path><path d="M532 266.7l-117.1-7.1 28.7 48 29.5-13.6 102.7 39.2 29.6-14.4-102.9-38.4zM406.8 324.6L290.2 315l28.3 50.4 29.4-13.6L450 394.5l29.6-14.4-102.2-41.9zM605.8 438.1l117.4 5.8-28-52.2-29.8 15.5-102.5-40.5-29.6 14.7 102.3 41.2zM538.8 472.9L437 429l-29.7 14.7 101.8 44.6-29.8 15.5 116.9 8.2-27.6-54.6z" fill="#FFFFFF"></path></g></svg>`,
            "Author": "coolbile",
            "link": "https://www.svgrepo.com/svg/499817/switch",
            "license": "CC BY"
        }

    ]

    createIconCredits(icons, main);

    container.appendChild(topbar);
    container.appendChild(main);
}

function createIconCredits(icons, main) {
icons.forEach(icon => {
        const iconWrapper = document.createElement("div");
        iconWrapper.classList.add("flex", "items-center", "gap-4", "mb-4", "bg-white", "p-4", "rounded", "shadow");

        const iconElement = document.createElement("div");
        iconElement.innerHTML = icon.html;

        const info = document.createElement("div");
        info.classList.add("flex", "flex-col");

        const author = document.createElement("p");
        author.classList.add("text-sm");
        author.textContent = `Author: ${icon.Author}`;

        const link = document.createElement("a");
        link.href = icon.link;
        link.target = "_blank";
        link.classList.add("text-indigo-600", "hover:underline", "text-sm");
        link.textContent = "View icon";

        const license = document.createElement("p");
        license.classList.add("text-sm", "text-gray-600");
        license.textContent = `License: ${icon.license}`;

        info.appendChild(author);
        info.appendChild(link);
        info.appendChild(license);

        iconWrapper.appendChild(iconElement);
        iconWrapper.appendChild(info);

        main.appendChild(iconWrapper);
    });
}