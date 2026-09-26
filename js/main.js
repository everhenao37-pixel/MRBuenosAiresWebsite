// Toggles the "Nuestros Servicios" cascade panel in the header.
(function () {
    const toggle = document.getElementById("services-toggle");
    const panel = document.getElementById("services-panel");
    const chevron = document.getElementById("services-chevron");
    if (!toggle || !panel) return;

    function closePanel() {
        panel.classList.add("hidden");
        toggle.setAttribute("aria-expanded", "false");
        chevron.style.transform = "";
    }

    function openPanel() {
        panel.classList.remove("hidden");
        toggle.setAttribute("aria-expanded", "true");
        chevron.style.transform = "rotate(180deg)";
    }

    toggle.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        isOpen ? closePanel() : openPanel();
    });

    document.addEventListener("click", (event) => {
        if (!panel.contains(event.target) && !toggle.contains(event.target)) {
            closePanel();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closePanel();
    });
})();
