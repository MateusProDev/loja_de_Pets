var carrossel = document.getElementById('myCarousel');

    carrossel.addEventListener('click', function() {
      if (carrossel.classList.contains('paused')) {
        carrossel.classList.remove('paused');
      } else {
        carrossel.classList.add('paused');
      }
    });

// Função para exibir a notificação do carrinho
function exibirNotificacao(produto) {
  const notificacao = document.getElementById('notificacao-carrinho');
  const produtoAdicionado = document.getElementById('produto-adicionado');
  
  produtoAdicionado.textContent = produto;
  notificacao.style.display = 'block';

  // Ocultar a notificação após alguns segundos (por exemplo, 3 segundos)
  setTimeout(() => {
    notificacao.style.display = 'none';
  }, 3000);
}

// Adiciona um ouvinte de evento a todos os botões com a classe "adicionar-ao-carrinho"
const botoesAdicionarCarrinho = document.querySelectorAll('.adicionar-ao-carrinho');
botoesAdicionarCarrinho.forEach((botao) => {
  botao.addEventListener('click', function () {
    const produto = botao.getAttribute('data-produto');
    exibirNotificacao(produto);
  });
});
