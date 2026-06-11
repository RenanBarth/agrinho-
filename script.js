// Aguarda o documento HTML ser totalmente carregado
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona o botão de "Conheça Nossos Pilares"
    const botaoConhecer = document.getElementById("btn-conhecer");
    
    // Seleciona a seção para onde a página vai rolar
    const secaoPilares = document.getElementById("pilares");

    // Adiciona o evento de clique ao botão
    botaoConhecer.addEventListener("click", function() {
        // Faz a rolagem suave até a seção de pilares
        secaoPilares.scrollIntoView({ behavior: "smooth" });
    });

    // Efeito simples de destaque nos cards ao passar o mouse (via JS para demonstração)
    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "#f0fff4";
        });
        
        card.addEventListener("mouseleave", function() {
            this.style.backgroundColor = "#ffffff";
        });
    });

    console.log("Site 'Agro Forte, Futuro Sustentável' carregado com sucesso!");
});