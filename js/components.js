/* ===================================================
   COMPONENTS.JS — Header y Footer dinámicos
=================================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ---------- Detectar página actual ----------
    const path = window.location.pathname.split("/").pop() || "index.html";

    const paginas = {
        "index.html": "Inicio",
        "notas.html": "Notas",
        "biografia.html": "Biografía",
        "proyectos.html": "Proyectos",
        "produccion.html": "Prod. & Clases",
        "medios.html": "Medios",
        "shows.html": "Shows",
        "contacto.html": "Contacto"
    };

    // ---------- HEADER ----------
    function generarNav() {
        let items = "";
        for (const [href, texto] of Object.entries(paginas)) {
            const activo = href === path ? ' class="activo"' : "";
            items += `<li><a href="${href}"${activo}>${texto}</a></li>`;
        }
        return items;
    }

    const headerHTML = `
        <div class="logo">
            <a href="index.html">
                <img src="img/logos/logocalidadsinfnd.png" alt="Chungo Roy">
            </a>
        </div>
        <button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav>
            <ul>${generarNav()}</ul>
        </nav>
    `;

    const headerEl = document.getElementById("site-header");
    if (headerEl) {
        headerEl.innerHTML = headerHTML;
    }

    // ---------- FOOTER ----------
    const esHome = path === "index.html";

    const footerHomeHTML = `
        <div class="footer-overlay">
            <div class="footer-nombre">CHUNGO<br>ROY</div>
            <div class="footer-credits">
                <p>Diseño & Desarrollo</p>
                <a href="mailto:maleb3609@gmail.com" class="signature">Malena Bernal</a>
            </div>
            <div class="footer-copy">
                <p>© 2026 Chungo Roy - Pianista</p>
            </div>
        </div>
    `;

    const footerInternaHTML = `
        <div class="footer-overlay">
            <div class="footer-nombre">CHUNGO<br>ROY</div>
            <div class="footer-redes">
                <a href="https://www.instagram.com/chungoroymusico?igsh=a2cyb2hiYXdscjZw" target="_blank" rel="noopener noreferrer">
                    <img src="img/logos/instagram.png" alt="Instagram">
                </a>
                <a href="https://open.spotify.com/playlist/2OCQnKmQpFRT2Ff9qnFyWs?si=woIp__VkTAuPn74NKSieSQ&pi=--3U6XzLT5ucb" target="_blank" rel="noopener noreferrer">
                    <img src="img/logos/spotify.png" alt="Spotify">
                </a>
                <a href="https://www.youtube.com/c/ChangoSpasiukoficial" target="_blank" rel="noopener noreferrer">
                    <img src="img/logos/youtube.png" alt="YouTube">
                </a>
            </div>
            <div class="footer-copy">
                <p>© 2026 Chungo Roy - Pianista</p>
            </div>
        </div>
    `;

    const footerEl = document.getElementById("site-footer");
    if (footerEl) {
        footerEl.innerHTML = esHome ? footerHomeHTML : footerInternaHTML;
    }

    // ---------- SCROLL HEADER ----------
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 50);
        }
    });

    // ---------- MENÚ HAMBURGUESA (mobile) ----------
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            const abierto = nav.classList.toggle("nav-abierto");
            toggle.classList.toggle("activo", abierto);
            toggle.setAttribute("aria-expanded", abierto ? "true" : "false");
        });

        // Cerrar el menú al tocar un link (mobile)
        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("nav-abierto");
                toggle.classList.remove("activo");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }

});