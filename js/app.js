let valorTotal = 0;
limpar();

function adicionar() {
    // Recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$') [1];
    let quantidadeProduto = document.getElementById('quantidade').value;

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }


    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidadeProduto) || quantidadeProduto <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    // Calcular o preço
    let preco = quantidadeProduto * valorProduto;

    // Adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`

    // Atualizar o valor total
     valorTotal += preco;
     let campoTotal = document.getElementById('valor-total');
     campoTotal.textContent = `R$ ${valorTotal}`;
     document.getElementById('quantidade').value = 0;

}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$00,00'
}