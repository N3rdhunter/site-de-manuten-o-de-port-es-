// 1. Inicialização do ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    reset: false
});

sr.reveal('.hero-content', { delay: 100 });
sr.reveal('.hero-visual', { delay: 300, origin: 'right' });
sr.reveal('.b-item', { interval: 200 });
sr.reveal('.promo-card', { delay: 400, scale: 0.8 });
sr.reveal('.plan-card', { interval: 200 });

// 2. Notificação de Prova Social (Gera confiança)
function showNotification() {
    const nomes = ['Carlos (Condomínio)', 'Ana P.', 'Marcos', 'Residencial Sol'];
    const acoes = ['solicitou orçamento', 'assinou o Plano Pro', 'agendou manutenção'];
    
    const toast = document.createElement('div');
    toast.style = `position: fixed; bottom: 100px; left: 20px; background: white; padding: 12px 20px; 
                  border-radius: 10px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border-left: 5px solid #2563eb;
                  font-size: 13px; z-index: 9998; transition: 0.5s; opacity: 0;`;
    
    toast.innerHTML = `<strong>${nomes[Math.floor(Math.random()*nomes.length)]}</strong> ${acoes[Math.floor(Math.random()*acoes.length)]} 🛠️`;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.style.opacity = '1', 100);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}
setInterval(showNotification, 15000);

// 3. Envio do Formulário para WhatsApp
document.getElementById('tech-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const whats = document.getElementById('whatsapp').value;
    const problema = document.getElementById('problema').value;
    const obs = document.getElementById('obs').value;
    
    const msg = `🛠️ *NOVO ORÇAMENTO TECHGATE*\n\n` +
                `👤 *Nome:* ${nome}\n` +
                `📱 *WhatsApp:* ${whats}\n` +
                `🔧 *Problema:* ${problema}\n` +
                `📝 *Obs:* ${obs}`;
    
    const numero = "+55 (19) 995385012"; // COLOQUE SEU NÚMERO AQUI
    window.open(`https://wa.me{numero}?text=${encodeURIComponent(msg)}`, '_blank');
});
