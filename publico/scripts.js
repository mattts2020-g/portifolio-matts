document.addEventListener("DOMContentLoaded", () => {
  // --- 1. EFEITO DE DIGITAÇÃO (TYPEWRITER) ---
  // Faz o texto do Span no H1 mudar sozinho
  const textElement = document.querySelector("h1 span");
  const phrases = ["LEGADO", "CORPO", "FUTURO", "LIMITES"];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      textElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      textElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pausa no final da frase
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  // Inicia o efeito se o elemento existir na página
  if (textElement) type();

  // --- 2. MENU INTERATIVO (MUDAR COR AO ROLAR) ---
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(0, 0, 0, 0.95)";
      navbar.style.borderBottom = "2px solid var(--turquesa)";
      navbar.style.padding = "15px 7%";
    } else {
      navbar.style.background = "rgba(0, 0, 0, 0.85)";
      navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";
      navbar.style.padding = "20px 7%";
    }
  });

  // --- 3. LOG DE INTERATIVIDADE NO CLIENTE ---
  console.log(
    "%c SMART CONSULT - MODO ELITE ATIVADO ",
    "color: #f5ff00; background: #000; font-weight: bold; font-size: 20px;"
  );
});
