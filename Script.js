document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Inicialização do Gráfico com Dados Reais de Produção (VBP Agropecuário de Toledo e Cascavel)
    // Foz do Iguaçu entra com valor referencial baixo no agro porque seu foco absoluto é Turismo/Energia
    const ctx = document.getElementById('vbpChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Toledo', 'Cascavel', 'Foz do Iguaçu'],
            datasets: [{
                label: 'Valor Bruto de Produção Agropecuária (Em Bilhões de R$ - Base 2024/2025)',
                data: [4.72, 3.63, 0.15], // Dados aproximados oficiais SEAB/IBGE
                backgroundColor: [
                    '#007A33', // Verde Principal
                    '#2E3B14', // Verde Variante
                    '#81A384'  // Verde Claro
                ],
                borderColor: [
                    '#005c26',
                    '#1e260d',
                    '#688a6b'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Bilhões de Reais (R$)'
                    }
                }
            }
        }
    });

    // 2. Geração Automática do QR Code dinâmico apontando para a URL atual do site
    const qrCodeImg = document.getElementById('qrcode-img');
    const currentUrl = window.location.href;
    // Utiliza uma API pública segura para renderizar o QR code em tempo de execução
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentUrl)}`;
});

// 3. Função para interatividade do botão "Clique para mais dados"
function toggleDadosExtras() {
    const hiddenBox = document.getElementById('dados-extras');
    
    if (hiddenBox.style.display === "block") {
        hiddenBox.style.display = "none";
    } else {
        hiddenBox.style.display = "block";
    }
}
