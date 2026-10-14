const anoElement = document.getElementById("ano-atual");
if (anoElement) {
    anoElement.textContent = new Date().getFullYear();
}

// Seletor de Idiomas Dinâmico
const selector = document.getElementById('language-selector');

if (selector) {
    const currentPath = window.location.pathname;

    // Percorre as opções e marca como selected baseando-se na URL
    for (let option of selector.options) {
        // Se a URL atual contém a pasta do idioma (ex: "/en/") ou é a raiz ("/index.html" ou "/")
        if (
            (currentPath.includes('/en/') && option.value.includes('/en/')) ||
            (currentPath.includes('/es/') && option.value.includes('/es/')) ||
            (currentPath.includes('/ru/') && option.value.includes('/ru/')) ||
            (currentPath.includes('/ja/') && option.value.includes('/ja/')) ||
            ((currentPath === '/' || currentPath.endsWith('/index.html')) && option.value === '/index.html')
        ) {
            option.selected = true;
            break;
        }
    }

    // Evento para mudar de página ao selecionar
    selector.addEventListener('change', function() {
        location.href = this.value;
    });
}