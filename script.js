const anoElement = document.getElementById("ano-atual");
if (anoElement) {
    anoElement.textContent = new Date().getFullYear();
}

// Dropdown de idiomas
const dropdown = document.getElementById('lang-dropdown');

if (dropdown) {
    const botao = document.getElementById('lang-current');
    const bandeira = document.getElementById('lang-current-flag');
    const codigo = document.getElementById('lang-current-code');
    const links = dropdown.querySelectorAll('.lang-menu a');

    function marcarIdiomaAtual() {
        const caminho = window.location.pathname;
        let atual = '/index.html'; // padrão: português

        ['en', 'es', 'ru', 'ja'].forEach(function (lang) {
            if (caminho.startsWith('/' + lang + '/') || caminho === '/' + lang) {
                atual = '/' + lang + '/';
            }
        });

        links.forEach(function (link) {
            const ativo = link.getAttribute('href') === atual;
            link.classList.toggle('active', ativo);

            if (ativo) {
                bandeira.src = 'https://flagcdn.com/w40/' + link.dataset.flag + '.png';
                codigo.textContent = link.dataset.code;
            }
        });
    }

    function fechar() {
        dropdown.classList.remove('open');
        botao.setAttribute('aria-expanded', 'false');
    }

    botao.addEventListener('click', function (e) {
        e.stopPropagation();
        const aberto = dropdown.classList.toggle('open');
        botao.setAttribute('aria-expanded', aberto);
    });

    document.addEventListener('click', fechar);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') fechar();
    });

    marcarIdiomaAtual();
    window.addEventListener('pageshow', marcarIdiomaAtual);
}