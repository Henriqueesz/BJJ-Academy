// Função para mostrar a seção selecionada e esconder as outras
function showSection(sectionId) {
  // Esconde todas as seções que têm a classe 'profile-section'
  document.querySelectorAll(".profile-section").forEach((section) => {
    section.classList.add("hidden"); // Adiciona a classe 'hidden' do Tailwind para esconder o elemento
  });

  // Remove a classe 'border-b-2' e 'text-blue-500' de todos os botões de navegação
  // Isso remove o destaque do botão que estava ativo anteriormente
  document.querySelectorAll(".border-b-2").forEach((button) => {
    button.classList.remove(
      "border-blue-500",
      "text-blue-500",
      "font-semibold"
    );
    button.classList.add("hover:text-white"); // Restaura o estilo de hover para os botões inativos
  });

  // Mostra a seção desejada removendo a classe 'hidden'
  document.getElementById(sectionId).classList.remove("hidden");

  // Adiciona a classe 'border-b-2' e 'text-blue-500' ao botão clicado para destacá-lo
  const clickedButton = document.querySelector(
    `button[onclick="showSection('${sectionId}')"]`
  );
  if (clickedButton) {
    clickedButton.classList.add(
      "border-blue-500",
      "text-blue-500",
      "font-semibold"
    );
    clickedButton.classList.remove("hover:text-white"); // Remove o estilo de hover, pois já está ativo
  }
}

// Garante que a seção de histórico de aulas seja exibida por padrão ao carregar a página
// O evento 'DOMContentLoaded' garante que o script só execute após o HTML ser completamente carregado
document.addEventListener("DOMContentLoaded", () => {
  showSection("historico"); // Chama a função para exibir a seção de histórico ao carregar
});
document
  .getElementById("btnVideosSalvos")
  .addEventListener("click", function () {
    // Substitua pela URL da página que você quer redirecionar
    window.location.href = "https://seudominio.com/pagina-videos-salvos.html";
  });
