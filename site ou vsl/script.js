// script.js

// Função para obter a data atual formatada
function getDataAtualFormatada() {
    const dataAtual = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return dataAtual.toLocaleDateString('pt-BR', options);
  }
  
  // Atualiza a data no elemento com o id "data" ao carregar a página
  document.addEventListener('DOMContentLoaded', function() {
    const elementoData = document.getElementById('data');
    if (elementoData) {
      elementoData.textContent = getDataAtualFormatada();
    }
  });
  // script.js
// script.js

// Função para gerar um número aleatório entre 458 e 800
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * (800 - 458 + 1)) + 458;
  }
  
  // Atualiza o número no elemento com o id "numeroAssistindo"
  function atualizarNumeroAssistindo() {
    const elementoNumeroAssistindo = document.getElementById('numeroAssistindo');
    if (elementoNumeroAssistindo) {
      const novoNumero = gerarNumeroAleatorio();
      elementoNumeroAssistindo.textContent = novoNumero;
    }
  }
  
  // Atualiza o número inicialmente e em seguida:
  // - A cada 5 segundos para a unidade
  // - A cada 10 segundos para a dezena
  // - A cada 90 segundos para a centena
  document.addEventListener('DOMContentLoaded', function() {
    atualizarNumeroAssistindo();
    setInterval(atualizarNumeroAssistindo, 5000); // Atualiza a cada 5 segundos para a unidade
    setInterval(atualizarNumeroAssistindo, 10000); // Atualiza a cada 10 segundos para a dezena
    setInterval(atualizarNumeroAssistindo, 90000); // Atualiza a cada 90 segundos para a centena
  });
  // script.js

document.addEventListener('DOMContentLoaded', function() {
    const meuVideo = document.querySelector('.wistia_embed');
    const meuBotao = document.querySelector('.button-lIuFFh4829683-element');

    meuBotao.style.display = 'none'; // Inicialmente, oculta o botão

    meuVideo.addEventListener('ended', function() {
        // Quando o vídeo chegar ao fim, mostra o botão
        meuBotao.style.display = 'block';
    });

    meuBotao.addEventListener('click', function() {
        // Ação a ser realizada quando o botão for clicado
        alert('Botão clicado!');
    });
});
