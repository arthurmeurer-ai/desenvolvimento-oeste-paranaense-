document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. EFEITO DE ENTRADA SUAVE (SCROLL REVEAL) ---
    const citySections = document.querySelectorAll(".city-section");

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.85;

        citySections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("active-view");
            }
        });
    };

    checkVisibility();
    window.addEventListener("scroll", checkVisibility);


    // --- 2. DESTAQUE AUTOMÁTICO NO MENU (ACTIVE STATE) ---
    const sections = document.querySelectorAll("section, .city-section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });
});
