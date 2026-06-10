// 1. Seleciona o botão e o corpo da página
const botao = document.querySelector('.theme-btn');
const body = document.querySelector('body');

// 2. Verifica o tema salvo assim que a página carrega
const temaSalvo = localStorage.getItem('theme');

if (temaSalvo === 'light') {
    body.classList.add('light-mode');
    botao.textContent = '☀️'; // Define o sol se o usuário preferir o modo claro
} else {
    botao.textContent = '🌙'; // Mantém a lua se for o modo escuro padrão
}

// 3. Escuta o clique do botão para alternar o tema e salvar a escolha
botao.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        botao.textContent = '☀️';
        localStorage.setItem('theme', 'light'); // Salva "light" no navegador
    } else {
        botao.textContent = '🌙';
        localStorage.setItem('theme', 'dark');  // Salva "dark" no navegador
    }
});

// ano do footer

document.getElementById("ano-atual").textContent = new Date().getFullYear();