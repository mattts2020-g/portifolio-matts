document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const body = document.body;

  // Cores correspondentes a cada plano (puxando da nossa paleta neon)
  const colors = [
    "rgba(0, 255, 204, 0.05)", // Turquesa (Starter)
    "rgba(255, 0, 85, 0.08)", // Rosa (Elite)
    "rgba(245, 255, 0, 0.05)", // Amarelo (VIP)
  ];

  cards.forEach((card, index) => {
    // Quando o mouse entra no card
    card.addEventListener("mouseenter", () => {
      // Muda o fundo do site levemente para a cor do plano
      body.style.transition = "background-color 0.5s ease";
      body.style.backgroundColor = colors[index];

      // Faz o card brilhar mais
      card.style.zIndex = "10";
    });

    // Quando o mouse sai do card
    card.addEventListener("mouseleave", () => {
      // Volta para o preto profundo original
      body.style.backgroundColor = "#050505";
      card.style.zIndex = "1";
    });
  });

  // Efeito de "Pulsar" no preço do plano Elite
  const elitePrice = document.querySelector(".card.highlight .price span");
  if (elitePrice) {
    setInterval(() => {
      elitePrice.style.transition = "text-shadow 0.8s ease";
      elitePrice.style.textShadow =
        elitePrice.style.textShadow === "none"
          ? "0 0 30px rgba(255, 0, 85, 0.8)"
          : "none";
    }, 800);
  }
});
