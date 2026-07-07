/* ============================================
   ROBLOX NEWS & CURIOSIDADES - JAVASCRIPT
   Criado por Rone Martins Pires - Trabalho Escolar 2026
   ============================================ */

// Menu mobile (abre e fecha o menu no celular)
function toggleMobileMenu() {
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'md:hidden fixed inset-0 bg-black/95 z-[100] flex flex-col p-6';
    
    mobileMenu.innerHTML = `
        <div class="flex justify-between items-center mb-8">
            <div class="flex items-center gap-x-3">
                <div class="w-9 h-9 bg-[#E2231A] rounded-2xl flex items-center justify-center">
                    <i class="fa-solid fa-gamepad text-white"></i>
                </div>
                <span class="heading-font text-2xl font-bold">Roblox News</span>
            </div>
            <button onclick="this.parentElement.remove()" class="text-4xl text-zinc-400 hover:text-white">×</button>
        </div>
        
        <div class="flex flex-col gap-y-1 text-lg">
            <a href="#noticias" onclick="this.parentElement.remove()" class="py-4 px-2 border-b border-zinc-800 hover:text-[#E2231A]">Notícias</a>
            <a href="#curiosidades" onclick="this.parentElement.remove()" class="py-4 px-2 border-b border-zinc-800 hover:text-[#E2231A]">Curiosidades</a>
            <a href="#premiacoes" onclick="this.parentElement.remove()" class="py-4 px-2 border-b border-zinc-800 hover:text-[#E2231A]">Premiações</a>
        </div>
    `;
    
    document.body.appendChild(mobileMenu);
}

// Rolagem suave quando clica nos links do menu
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });
}

// Inicialização de tudo
function init() {
    setupSmoothScroll();
    
    // Easter egg: clicar no avatar sobe para o topo da página
    document.querySelectorAll('.small-avatar').forEach(avatar => {
        avatar.style.cursor = 'pointer';
        avatar.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    console.log('%c[Roblox News] Site carregado com sucesso! Feito por Rone Martins Pires', 'color:#666');
}

// Inicia tudo quando a página carregar
window.onload = init;