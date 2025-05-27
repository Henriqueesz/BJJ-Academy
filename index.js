document.addEventListener("DOMContentLoaded", () => {
  const drills = [
    { name: "nome do drill*", image: "./src/drills/Drill1b.jpg" },
    { name: "nome do drill*", image: "./src/drills/escapeside_large.webp" },
    {
      name: "nome do drill*",
      image:
        "./src/drills/INSTRUCTIONAL-Open-Guard-Guard-Pass-Drills-Leg-Drag-B83I5293.jpg",
    },
    { name: "nome do drill*", image: "./src/drills/maxresdefault (1).jpg" },
    { name: "nome do drill*", image: "./src/drills/maxresdefault (2).jpg" },
    { name: "nome do drill*", image: "./src/drills/maxresdefault (3).jpg" },
    { name: "nome do drill*", image: "./src/drills/maxresdefault.jpg" },
    { name: "nome do drill*", image: "./src/drills/sddefault.jpg" },
    { name: "nome do drill*", image: "./src/drills/solo-bjj-drills.webp" },
  ];

  const posicao = [
    {
      name: "nome posição*",
      image:
        "./src/passagens/1450912654-555cdece64edf0f12f17deea3f0b6b7e4a204f899b2c65b461931c4627c47194-d_1000.jpg",
    },
    {
      name: "nome posição*",
      image:
        "./src/passagens/arataba-jiu-jitsu-aprenda-passagens-de-guarda-passagem-de-guarda-frontal-foto-a.jpg",
    },
    { name: "nome posição*", image: "./src/passagens/convert.jpg" },
    {
      name: "nome posição*",
      image: "./src/passagens/digo_almeida_Davi_ramos_copa_podio-2.jpg",
    },
    { name: "nome posição*", image: "./src/passagens/emborcada.jpeg" },
    { name: "nome posição*", image: "./src/passagens/jiujitsu_1024x1024.webp" },
    { name: "nome posição*", image: "./src/passagens/maxresdefault.jpg" },
    {
      name: "nome posição*",
      image:
        "./src/passagens/arataba-jiu-jitsu-aprenda-passagens-de-guarda-passagem-de-guarda-frontal-foto-a.jpg",
    },
    { name: "nome posição*", image: "./src/passagens/jiujitsu_1024x1024.webp" },
  ];

  const raspagens = [
    {
      name: "nome raspagem*",
      image:
        "./src/raspagens/arataba-jiu-jitsu-aprenda-img-raspagens-raspagem-tecnica-ii.jpg",
    },
    { name: "nome raspagem*", image: "./src/raspagens/images.jpeg" },
    { name: "nome raspagem*", image: "./src/raspagens/maxresdefault (1).jpg" },
    { name: "nome raspagem*", image: "./src/raspagens/maxresdefault.jpg" },
    {
      name: "nome raspagem*",
      image: "./src/raspagens/raspagem-by-John-Cooper.jpg",
    },
    { name: "nome raspagem*", image: "./src/raspagens/sddefault.jpg" },
    { name: "nome raspagem*", image: "./src/raspagens/sddefault.jpg" },
    {
      name: "nome raspagem*",
      image: "./src/raspagens/Terere-raspando-de-gancho-1.jpg",
    },
    { name: "nome raspagem*", image: "./src/raspagens/images.jpeg" },
  ];

  const drillsGrid = document.querySelector(".drills-grid");
  const posicaoGrid = document.querySelector(".posicao-grid");
  const raspagensGrid = document.querySelector(".raspagens-grid");

  drills.forEach((drill) => {
    const card = document.createElement("div");
    card.classList.add("drills-card");

    card.innerHTML = `
        <img src="${drill.image}" alt="imagem do ${drill.name}"> 
        <h2>${drill.name}</h3>
        <p>Drills</p>
      `;
    drillsGrid.appendChild(card);
  });

  // Adicionando posições
  posicao.forEach((pos) => {
    const card = document.createElement("div");
    card.classList.add("posicao-card");

    card.innerHTML = `
        <img src="${pos.image}" alt="imagem da ${pos.name}"> 
        <h2>${pos.name}</h3>
        <p>Posição</p>
      `;
    posicaoGrid.appendChild(card);
  });

  // Adicionando raspagens
  raspagens.forEach((rasp) => {
    const card = document.createElement("div");
    card.classList.add("raspagem-card");

    card.innerHTML = `
        <img src="${rasp.image}" alt="imagem da ${rasp.name}"> 
        <h2>${rasp.name}</h3>
        <p>Raspagem</p>
      `;
    raspagensGrid.appendChild(card);
  });
  // Função para configurar navegação dos carrosséis
  function setupCarouselNavigation(wrapperSelector, gridSelector) {
    const wrapper = document.querySelector(wrapperSelector);
    const grid = wrapper.querySelector(gridSelector);
    const btnLeft = wrapper.querySelector(".carousel-btn-left");
    const btnRight = wrapper.querySelector(".carousel-btn-right");

    const scrollAmount = 220; // quanto scrollar ao clicar

    btnLeft.addEventListener("click", () => {
      grid.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    btnRight.addEventListener("click", () => {
      grid.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }

  // Configura os três carrosséis
  setupCarouselNavigation(".carousel-wrapper:nth-of-type(1)", ".drills-grid");
  setupCarouselNavigation(".carousel-wrapper:nth-of-type(2)", ".posicao-grid");
  setupCarouselNavigation(
    ".carousel-wrapper:nth-of-type(3)",
    ".raspagens-grid"
  );
});
